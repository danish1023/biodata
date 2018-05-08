(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./lite/service-worker.js').then(function (registration) {
      console.log('Registration successful, scope is:', registration.scope);
    }).catch(function (error) {
      console.log('Registration failed:', error);
    });
  } else {
    console.log('Service workers are not supported.');
  }
})();