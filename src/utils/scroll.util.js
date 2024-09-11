/**
 * Scroll to the specific section area
 */
function scrollTo(sectionId) {
  const sectionContainer = document.getElementById(sectionId);
  if (sectionContainer) {
    window.scrollTo({
      top: sectionContainer.offsetTop,
      behavior: 'smooth'
    });
  }
}

export { scrollTo };
