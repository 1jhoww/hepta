/**
 * Performs a premium custom inertia smooth scroll to a target vertical position.
 * Uses a subtle easeOutCubic curve for a natural start-fast, end-slow deceleration.
 */
export const smoothScrollTo = (targetPosition: number, duration: number = 800) => {
  const startPosition = window.scrollY || window.pageYOffset;
  const distance = targetPosition - startPosition;
  if (distance === 0) return;
  
  let startTime: number | null = null;

  const easeOutCubic = (t: number) => {
    return 1 - Math.pow(1 - t, 3);
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const run = easeOutCubic(progress);
    
    window.scrollTo(0, startPosition + distance * run);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Scrolls to a DOM element by its ID, taking into account a sticky header offset.
 */
export const smoothScrollToId = (targetId: string, headerOffset: number = 80) => {
  const element = document.getElementById(targetId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + (window.scrollY || window.pageYOffset) - headerOffset;
    smoothScrollTo(offsetPosition, 900);
  }
};
