(() => {
  window.setInterval(function () {
    // folha
    let paywallScreen = document.getElementById('paywall-screen');
    let paywallFill = document.getElementById('paywall-fill');
    let paywallContent = document.getElementById('paywall-content');

    if (paywallScreen) paywallScreen.remove();
    if (paywallFill) paywallFill.remove();
    if (paywallContent) paywallContent.style.overflow = 'scroll';
    
    // oglobo
    document.getElementsByClassName('paywall-cpt paywall-cpt-blogs')[0].remove(document.getElementsByClassName('paywall-cpt paywall-cpt-blogs')[0]);
    document.getElementsByTagName('body')[0].style = "overflow: scroll !important; width: 100% !important;"
  }, 3000);
  
})();
