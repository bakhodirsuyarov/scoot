var elSiteHeaderWrapper = document.querySelector('.site-header__wrapper')
var elSiteHeaderButton = document.querySelector('.js-btn');


if(elSiteHeaderButton){
  elSiteHeaderButton.addEventListener('click', function() {
    elSiteHeaderWrapper.classList.toggle('site-header__links--open');
  });
}