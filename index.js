
const registerSW = async () => {
  const registrations = await navigator.serviceWorker.getRegistrations()

  for(let registration of registrations) {
    await registration.unregister();
  }
  return navigator.serviceWorker.register(
    "service-worker.js",
    {
      scope: "./",
    }
  );
}

window.addEventListener('DOMContentLoaded', async () => {

  const swRegistration = await registerSW();

  const subscribeBtn = document.getElementById('subscribe-to-push');

  subscribeBtn.addEventListener('click', async () => {
    const grantedResult = await window.Notification.requestPermission();

    if (grantedResult === 'granted') {
      void swRegistration.showNotification('Hello from Alex', {
        body: "New notification from my side",
        tag: 'message-group-1',
        icon: '/images/demos/doughnut-action.png',
        image: '/images/rr-image.png',
        actions: [
          {
            action: 'coffee-action',
            title: 'Coffee',
            type: 'button',
            icon: '/images/demos/coffee-action.png',
          },
          {
            action: 'doughnut-action',
            type: 'button',
            title: 'Doughnut',
            icon: '/images/demos/doughnut-action.png',
          },
        ]
      })
      navigator.setAppBadge(777)
    }
  })

})
