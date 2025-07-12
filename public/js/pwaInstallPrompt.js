// pwaInstallPrompt.js

const pwaInstallPrompt = (() => {
  let deferredPrompt = null;
  let isStandalone = false;
  let hasTriedPrompt = false;
  let promptResolve = null;

  const listeners = {
    onChange: () => {},
  };

  const triggerChange = () => {
    listeners.onChange({
      isStandalone,
      canInstall: !!deferredPrompt,
      cannotInstall: hasTriedPrompt && !deferredPrompt,
    });
  };

  const init = () => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault(); // Prevent default mini-infobar
      deferredPrompt = e;
      hasTriedPrompt = true;
      triggerChange();
    });

    const checkStandalone = () => {
      const isIosStandalone = window.navigator.standalone === true;
      const isDisplayStandalone = window.matchMedia('(display-mode: standalone)').matches;
      isStandalone = isIosStandalone || isDisplayStandalone;
      triggerChange();
    };

    checkStandalone();

    const displayModeMatcher = window.matchMedia('(display-mode: standalone)');
    displayModeMatcher.addEventListener('change', checkStandalone);

    // Timeout to detect if prompt was never fired
    setTimeout(() => {
      if (!deferredPrompt) {
        hasTriedPrompt = true;
        triggerChange();
      }
    }, 3000);
  };

  const promptInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    deferredPrompt = null;
    triggerChange();
    return result;
  };

  // public API
  return {
    init,
    promptInstall,
    onChange: (callback) => {
      listeners.onChange = callback;
    },
    getState: () => ({
      isStandalone,
      canInstall: !!deferredPrompt,
      cannotInstall: hasTriedPrompt && !deferredPrompt,
    }),
  };
})();
