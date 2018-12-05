
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('serviceworker.js')
    .then(function(reg) {
      console.log('Service Worker: Registered');
    })
    .catch(function(error){
      document.querySelector('body').innerHTML = 'We\'re sorry, an error occured.';
    });

}
