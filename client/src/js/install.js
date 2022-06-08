const buttonInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    buttonInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
buttonInstall.addEventListener('click', async () => {
    console.log('Install PWA');
    const promptEvent = window.deferredPrompt;
    
    if (!promptEvent) {
        console.log('no prompt');
        return;
    }

    console.log('prompt');
    promptEvent.prompt();

    window.deferredPrompt = null;

    buttonInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('The PWA was installed.');
    window.deferredPrompt = null;
});
