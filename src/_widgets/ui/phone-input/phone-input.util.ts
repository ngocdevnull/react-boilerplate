export const resetScrollAreaViewportToTop = (scrollAreaElement: Nullable<HTMLDivElement>) => {
  if (!scrollAreaElement) {
    return;
  }

  const viewportElement = scrollAreaElement.querySelector('[data-radix-scroll-area-viewport]');

  if (viewportElement) {
    viewportElement.scrollTop = 0;
  }
};
