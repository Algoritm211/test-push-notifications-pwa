
const registerSW = async () => {
  await navigator.serviceWorker.register(
    "service-worker.js",
    {
      scope: "./",
    }
  );
}

window.addEventListener('DOMContentLoaded', async () => {

  await registerSW();

  const subscribeBtn = document.getElementById('subscribe-to-push');

  subscribeBtn.addEventListener('click', async () => {
    const grantedResult = await window.Notification.requestPermission();

    if (grantedResult === 'granted') {
      const notification = new Notification('hello');
    }
  })

})
