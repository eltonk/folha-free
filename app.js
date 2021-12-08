(() => {
  window.setInterval(function () {
    let paywallScreen = document.getElementById('paywall-screen');
    let paywallFill = document.getElementById('paywall-fill');
    let paywallContent = document.getElementById('paywall-content');

    if (paywallScreen) paywallScreen.remove();
    if (paywallFill) paywallFill.remove();
    if (paywallContent) paywallContent.style.overflow = 'scroll';
  }, 3000);
  
})();
