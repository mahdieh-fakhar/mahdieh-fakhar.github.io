// Fallback bootstrap for cached index.html referencing this old bundle.
// Purpose: if an old index.html requests this file, redirect the browser to
// the fresh site root so the latest index.html and assets load.
(function () {
  try {
    var base = window.location.origin + '/mf1/';
    // Preserve query/hash when redirecting
    var suffix = (window.location.search || '') + (window.location.hash || '');
    window.location.replace(base + suffix);
  } catch (e) {
    // If redirect fails, log and do a hard reload to the root
    console && console.error && console.error('Fallback redirect failed', e);
    window.location.href = '/mf1/';
  }
})();
