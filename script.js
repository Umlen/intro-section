window.onload = function() {

    screenWidthCheck();

    let features = document.getElementById('dropdown_features');
    features.addEventListener('click', dropdownMenu);
    features.addEventListener('mousedown', preventSelection);

    let company = document.getElementById('dropdown_company');
    company.addEventListener('click', dropdownMenu);
    company.addEventListener('mousedown', preventSelection);

    let openMenuBtn = document.getElementById('open-mobile-menu');
    openMenuBtn.addEventListener('click', openMobileMenu);

    let closeMenuBtn = document.getElementById('close-mobile-menu');
    closeMenuBtn.addEventListener('click', closeMobileMenu);
};

const dropdownMenu = (event) => {
    event.preventDefault();
    let parentElem = event.currentTarget;
    let arrowDown = parentElem.querySelector('.navbar--menu--dropdown_icondown');
    let arrowUp = parentElem.querySelector('.navbar--menu--dropdown_iconup');
    let menuList = parentElem.querySelector('.navbar--menu--dropdown_list');
    arrowUp.classList.toggle('hide');
    arrowDown.classList.toggle('hide');
    menuList.classList.toggle('hide');
};

const preventSelection = (event) => {
    event.preventDefault();
};

const screenWidthCheck = () => {
    if (document.documentElement.clientWidth < 768) {
        document.getElementById('desktop-navbar').classList.add('hide');
        document.getElementById('mobile-navbar').classList.remove('hide');
    }
    else {
        document.getElementById('desktop-navbar').classList.remove('hide');
        document.getElementById('mobile-navbar').classList.add('hide');
    }
};

const openMobileMenu = () => {
    document.querySelector('.navbar--mobilemenu_wrapper').classList.remove('hide');
};

const closeMobileMenu = () => {
    document.querySelector('.navbar--mobilemenu_wrapper').classList.add('hide');
};