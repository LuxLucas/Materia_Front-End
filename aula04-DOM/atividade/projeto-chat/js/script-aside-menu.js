let menuButtonsBox      = document.querySelectorAll('.menu-button-box');
let buttonsOfSideMenu   = document.querySelectorAll('aside.aside-menu nav.menu button');

function showBorderLeftMenuButton(HTMLElement){
    HTMLElement.style.borderLeft   = '0.2em solid var(--focused-icon)';
    HTMLElement.style.borderRight  = '0.2em solid transparent';
}

function hiddenBorderLeftMenuButton(HTMLElement){
    HTMLElement.style.border = 'none';
}

for(let box of menuButtonsBox){
    let borderLeftMenuButton    = box.children[0];
    let buttonFilter            = borderLeftMenuButton.children[0];

    box.addEventListener('mouseenter', () => {       
        for(let child of buttonFilter.children){
            showBorderLeftMenuButton(borderLeftMenuButton);
            if(!(child.tagName == 'IMG' && child.classList.contains('img-account-menu')) && !borderLeftMenuButton.classList.contains('border-active')){
                child.classList.toggle('hidden');
            }
        }
    });

    box.addEventListener('mouseleave', () => {
        for(let child of buttonFilter.children){
            hiddenBorderLeftMenuButton(borderLeftMenuButton);
            if(!(child.tagName == 'IMG' && child.classList.contains('img-account-menu')) && !borderLeftMenuButton.classList.contains('border-active')){
                child.classList.toggle('hidden');
            }
        }
    })
}

for(let button of buttonsOfSideMenu){
    button.addEventListener('click', () => {
        let parentButton = button.parentElement;
        let activeBorderLeft = document.querySelectorAll('aside.aside-menu nav.menu div.left-edge-menu-button.border-active');

        console.log(activeBorderLeft);
        if(activeBorderLeft.length > 0){
            activeBorderLeft.forEach((Element) => {
                Element.classList.remove('border-active');
                hiddenBorderLeftMenuButton(Element);
            })
        }

        showBorderLeftMenuButton(parentButton);
        parentButton.classList.add('border-active');
    })
}
