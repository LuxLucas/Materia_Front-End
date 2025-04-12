let boxMenuButtons = document.querySelectorAll('.box-menu-button');

for(let box of boxMenuButtons){
    let borderLeftMenuButton    = box.children[0];
    let buttonFilter            = borderLeftMenuButton.children[0];

    box.addEventListener('mouseenter', () => {        
        borderLeftMenuButton.style.borderLeft   = '0.2em solid var(--focused-menu-icon)';
        borderLeftMenuButton.style.borderRight  = '0.2em solid transparent';

        for(let child of buttonFilter.children){
            child.classList.toggle('hidden');
        }
    });

    box.addEventListener('mouseleave', () => {
        borderLeftMenuButton.style.border = 'none';

        for(let child of buttonFilter.children){
            child.classList.toggle('hidden');
        }
    })
}

