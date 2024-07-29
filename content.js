document.addEventListener('DOMContentLoaded', () => {
  // Function to apply styles to English texts
  const applyStyles = () => {
    const englishTexts = document.querySelectorAll(
      '.context-sentences .wk-text:not([lang="ja"]), .subject-section__text p:not([lang="ja"])'
    );

    englishTexts.forEach((sentence) => {
      sentence.classList.add('newStyle');
    });
  };

  applyStyles(); // Initial application

  // Mutation observer to apply styles when new content is added
  const observer = new MutationObserver(() => {
    applyStyles();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});
