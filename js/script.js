// TOGGLE DROPDOWN MENU & ACTIVE MENU 
const menuListItem = document.querySelectorAll('.menu__item');
const arrayMenuList = [...menuListItem];

const checkDropItem = (item) => {
    return item.classList.contains('menu__item--wrapper') ? true : false;
}

const HandleActiveMenu = (element, index, array) => {
    const cloneArr = [...array];
    checkDropItem(element) ? element.classList.toggle('active__tab') : element.classList.add('active__tab');

    cloneArr.splice(index, 1);

    cloneArr.forEach(item => {
        item.classList.remove('active__tab');
    })
}

arrayMenuList.forEach((element, index, array) => {
    element.onclick = () => {
        HandleActiveMenu(element, index, array);
    }
})

// HOVER & STOP PROPAGATION FOR DROPDOWN MENU
const dropDownItem = document.querySelectorAll('.menu__item--wrapper');
const arrDropItem = [...dropDownItem];

const stopPropagationClick = (arrElement) => {
    arrElement.forEach(ele => {
        ele.onclick = (e) => {
            e.stopPropagation();
        }
        ele.onmouseover = (e) => {
            e.stopPropagation();
        }
    })
}

const wrapperHoverEffect = (element) => {
    const listContent = element.querySelector('.list__content');
    const dropItem = element.querySelectorAll('.drop__item');

    element.onmouseover = () => {
        element.style.backgroundColor = 'var(--special-color)';
        listContent.style.transform = 'translateX(.5rem)';
    }
    element.onmouseout = () => {
        element.style.backgroundColor = 'transparent';
        listContent.style.transform = 'translateX(0)';
    }

    stopPropagationClick(dropItem);
}

arrDropItem.forEach(element => {
    wrapperHoverEffect(element);
})

// MAIN PAGE MOVE WHILE SIDEBAR HOVER 
const sideBar = document.querySelector('.menu');
const mainPage = document.querySelector('.mainpage');

sideBar.onmouseover = () => {
    mainPage.style.marginLeft = "var(--menu-width)";
}

sideBar.onmouseout = () => {
    mainPage.style.marginLeft = "var(--menu-icon-width)";
}

