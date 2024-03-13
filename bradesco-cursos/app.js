'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function()
    {document.body.classList.toogle('dark-theme');

    var className = document.body,className;
    if(className == "light-theme") {
        this.textContent = "Dark";
        console.log('current class name: ' + className);
    }
    else {
        this.textContent = "Light";
    }
   
});
