(function () {
  var version = window.CIPHERWARE_VERSION;
  if (!version) return;
  document.querySelectorAll("[data-site-version]").forEach(function (el) {
    el.textContent = "v" + version;
  });
})();
