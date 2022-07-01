window.onload = function() {
    let features = document.getElementById('dropdown_features');
    features.addEventListener('click', dropdownMenu);
    features.addEventListener('mousedown', preventSelection);

    let company = document.getElementById('dropdown_company');
    company.addEventListener('click', dropdownMenu);
    company.addEventListener('mousedown', preventSelection);
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