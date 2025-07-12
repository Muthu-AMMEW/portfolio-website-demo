// installButton.js

function createInstallButtons(containerSelector = 'body') {
  const container = document.querySelector(containerSelector);

  const playStoreImg = document.createElement('img');
  const appStoreImg = document.createElement('img');

  [playStoreImg, appStoreImg].forEach((img) => {
    img.className = 'install-button';
    img.width = 160;
    img.height = 50;
    img.style.cursor = 'pointer';
    container.appendChild(img);
  });

  playStoreImg.src = '/public/images/no-play-store.png';
  playStoreImg.alt = 'Play Store App';
  playStoreImg.classList.add('mb-2');

  appStoreImg.src = '/public/images/no-app-store.png';
  appStoreImg.alt = 'App Store App';

  const updateTitle = ({ isStandalone, canInstall, cannotInstall }) => {
    const title = isStandalone
      ? 'Already Installed'
      : canInstall
        ? 'Install App'
        : cannotInstall
          ? 'Cannot as Install'
          : 'Open App';

    playStoreImg.title = title;
    appStoreImg.title = title;
  };

  const handleClick = async () => {
    const { isStandalone, canInstall, cannotInstall } = pwaInstallPrompt.getState();

    if (isStandalone) {
      const goToBrowser = window.confirm(
        'You are already using the installed app. Open in browser?'
      );
      if (goToBrowser) {
        window.open(window.location.origin, '_blank');
      }
    } else if (canInstall) {
      await pwaInstallPrompt.promptInstall();
    } else if (cannotInstall) {
      alert('This app could not install or already installed on your device.');
    } else {
      alert('This app is already installed.');
    }
  };

  // Attach click handler to both images
  playStoreImg.addEventListener('click', handleClick);
  appStoreImg.addEventListener('click', handleClick);

  // Update title when PWA state changes
  pwaInstallPrompt.onChange(updateTitle);
  updateTitle(pwaInstallPrompt.getState());
}

window.addEventListener('DOMContentLoaded', () => {
  pwaInstallPrompt.init();
  createInstallButtons('#install-container'); // Place your buttons inside this div
});
