// Fallback for cached old hashed JS filename at root
(function(){
  try {
    var base = document.querySelector('base')?.getAttribute('href') || '/';
    window.location.replace((base.endsWith('/')?base:base + '/') );
  } catch (e) {
    console.error('fallback redirect failed', e);
  }
})();
