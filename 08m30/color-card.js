const TOTAL = 12;
const color_list = [];
let choiceCard = []; //const를 let으로 변경시켜야함55번줄
let success = 0;

const reStartGame = () =>{

}

const shuffleColors = () => {
    const colors =['red','orange','purple','green','aqua','pink']
    const total_colors = colors.concat(colors);
    for (let i=0 ; i<TOTAL; i++){   //랜덤색갈12개 축출하기
        const idx =Math.floor(Math.random()*total_colors.length);
        color_list.push(total_colors[idx]);
        total_colors.splice(idx,1);
    }
}

/* 이 함수는 div 요소를 생성하는 함수입니다
매개변수 :
divClassName -> 생성하는  div요소마다 클래스 이름을 다른게 부여합니다
color : color를 가가가 설정해야 할 경우ㄹ는 매개 변수의 인자값을 받고, 그렇지 
않을 경우 기본값을 none으로 처리합니다.
return divElem : 생성한 요소를 반환시켜 줍니다 */

const createDivElem = (divClassName,color="none") =>{//divClassName여기서는매개변수이다30번줄('card')을가르킨다
    //(divClassName,color="none")는칼라값안넣어도되는조건을만든것
    const divElem = document.createElement('div');  //이함수는 div 요소를생성하는함수
    //divElem 은 객체생성 
    divElem.className = divClassName;
    divElem.style.backgroundColor = color;
    return divElem;
}

const handerClickCard =(event) =>{
    const obj =event.currentTarget;
    //console.log(event.target) //target은직접선택했을때
    //console.log(obj) //event.currentTarget를 obj변수로 등록시킴
    //event.currentTarget.classList.add('open');
    obj.classList.add('open');
    //console.log(obj.childNode[0].style.backgroundColor);
    //console.log(obj.querySelector('.card-front').style.backgroundColor);//obj찾는방법
    choiceCard.push(obj);

    if (choiceCard.length !== 2) return;
}
    const first = choiceCard[0].querySelector('.card-front').style.backgroundColor;
    const second = choiceCard[1].querySelector('.card-front').style.backgroundColor;
    if (first === second){
        //같은색상의 카드선택
        success++;
        if( success >=(TOTAL/2)){
            setTimeout(()=>{
                alert('축하합니다');
                init();
            },1000);
        }
        else{
       //다른색상의카드선택
        choiceCard.forEach((v) =>{ //forEach 이용해value값 받아서 
            setTimeout(()=>{
                v.classList.remove('open');
            }, 1000);
            v.classList.remove('open');
        })
    }
    }
//선택된 카드를 초기화
choiceCard =[]

const createCardElem = () => {
    for(let i=0 ; i<TOTAL ; i++){
    const card = createDivElem('card');
    card.appendChild(createDivElem('card-front',color_list[i]));
    card.appendChild(createDivElem('card-back',"blue")); //('card-back',"blue"))칼라값을 지정한것
    card.addEventListener('click',handerClickCard); 
    document.querySelector('#wrapper').appendChild(card);
}
}

const startCardRotate = ()=>{
    document.querySelectorAll('.card').forEach((v,idx) =>{//v는 
    setTimeout(() =>{ //각각의카드뒤집히는값을다르게해주는함수/카드객체가다시들어어게하는것
        v.classList.add('open');
    },1000+(100*idx));//각각의 카드뒤집히는값을다르게해주는작업
});
}

const startCardGame = ()=>{
    //3초있다가원래상태로복귀모든카드의 back이보이게
    document.querySelectorAll('.card').forEach((v,idx) =>{
    setTimeout( () => { 
        v.classList.remove('open');
    },4000);
});
}


const init = () => { //무작의 색상을 만들어 준다
    color_list =[];
    choiceCard=[];
    success=0
    document.querySelector('#wrapper').innerHTML ='';
    //let elem = document.querySelector('#wrapper').childNodes;
    shuffleColors(); //카드 객체를 생성하여 만들어 준다
    createCardElem();//프로그램이실행됨과동시에카드를다뒤짐주면서보여준다
    startCardRotate();
}

init();
