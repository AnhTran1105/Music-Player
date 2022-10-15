//-------------Login Screen-------------------
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const aTags = $$('a');
aTags.forEach(function(aTag) {
    aTag.onclick = function() {
        var aSelector = this.getAttribute('href');
        if (aSelector !== null && aSelector.charAt(0) == '#' && aSelector.length > 1) 
            var getSelector = $(aSelector);
        if (getSelector.matches('.not-active-screen')) 
            getSelector.classList.remove('not-active-screen');
    }
})