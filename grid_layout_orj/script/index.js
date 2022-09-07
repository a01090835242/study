(()=>{
    const tagMenuIcon = document.querySelector('.menu-icon');
    const tagMenu = document.querySelectorAll('.menu-bar>ul>li');
    const tagSection = document.querySelectorAll('section');
    const getMenuIndex = (obj) => {
        const elem = obj.parentNode.children;
        for( let i=0 ; i<elem.length ; i++ ){
            if( elem[i] === obj ){
                return i;
            }
        }
        return 0;
    }
    const handlerClickMenu = (event) => {
        const idx = getMenuIndex( event.currentTarget );
        // console.log( idx );
        /*** menu icon display */
        tagMenuIcon.style.opacity = '1';
        tagMenuIcon.style.cursor = 'pointer';
        /*** menu bar display */
        document.querySelector('.menu-bar').classList.toggle('menuoff');
        /*** main display */
        document.querySelector('main').classList.toggle('menuon');
        /*** section display */
        tagSection.forEach( (elem) => {
            elem.classList.remove('on');
        });
        tagSection[idx].classList.add('on');
    }
    tagMenu.forEach( (elem) => {
        elem.addEventListener( 'click' , handlerClickMenu );
    });

    const handlerClickIcon = () => {
        const value = tagMenuIcon.style.opacity;
        if( value == 0 ) return;
        tagMenuIcon.style.opacity = "0";
        tagMenuIcon.style.cursor = 'inherit';
        document.querySelector('.menu-bar').classList.toggle('menuoff');
        document.querySelector('main').classList.toggle('menuon');
    }
    tagMenuIcon.addEventListener( 'click', handlerClickIcon );
})();