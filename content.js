// Function to replace the verified icon with a clown emoji
function replaceVerifiedIcons() {
  const verifiedIcons = document.querySelectorAll('svg[data-testid="icon-verified"]');
  console.log('Verified icons found:', verifiedIcons.length);

  verifiedIcons.forEach((icon) => {
    const clownEmoji = document.createElement('span');
    clownEmoji.textContent = '🤡';
    clownEmoji.style.fontSize = '1.2em';
    icon.parentElement.replaceChild(clownEmoji, icon);
  });

  console.log('Verified icons replaced.');
}

// Initial replacement of verified icons
replaceVerifiedIcons();

// Replace verified icons when new tweets are loaded
const targetNode = document.querySelector('body');
const observerConfig = { childList: true, subtree: true };

const observerCallback = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      replaceVerifiedIcons();
    }
  }
};

const observer = new MutationObserver(observerCallback);
observer.observe(targetNode, observerConfig);
