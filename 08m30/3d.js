const tagWrapper = document.querySelector('.wrapper');
let currentObj = null
;const activeDoor = (obj) => {
    obj.classList.add('door-open');
    currentObj = obj;
}
const inactiveDoor = (obj) => {
    obj.classList.remove('door-open');
}
const handlerClick = (event) => {
    const targetElem = event.target;
    if(targetElem.classList.contains('door-front')){
        if ( currentObj ){
            inactiveDoor( currentObj );
        }
        activeDoor(targetElem.parentNode);
    //console.log( event.target);
    //방법1  if (event.target.className === 'door-front'){
    //     console.log(event,target);
    // }
    // const removeElem = document.querySelector('.door-open'){

//targetElem.parentNode.classList.add ='door-open'; 이것은 className을 그냥 
        //  targetElem.parentNode.classList.add('door-open');//문열림
        //  removeElem.classList.remove('door-open')

    }
}//위의 .className쓰지말고.contains를 쓰라
tagWrapper.addEventListener('click',handlerClick);
activeDoor(document.querySelector('.door:nth-child(2) '))
