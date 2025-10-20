// Page-level fallback to avoid 404 for cached scripts
(function(){
  var base = document.querySelector('base')?.getAttribute('href') || '/';
  try{ window.location.replace(base); }catch(e){console.error(e)}
})();
