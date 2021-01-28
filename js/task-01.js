// 1 - Дан блок, внутри кнопка.
// При наведении на кнопку, красить блок в красный цвет
const cardRef = document.querySelector('.card');
// const cardActiveRef = document.querySelector('.card__active');

// cardActiveRef.addEventListener('mouseenter', ()=> {
//     cardRef.classList.add('card__focus');
// });

// cardActiveRef.addEventListener('mouseleave', ()=> {
//     cardRef.classList.remove('card__focus');
// });

function setClassActive (event) {
    // необходимо использовать пару "mouseover"+"mouseout". 
    // Данная пара позволяет пользовать событием на ребенке, не смотря на то,
    //  что слушатель находится на родителе. Другими словами чувствует события ребенка.
    const target = event.target;
    if(target.classList.contains('card__active')){
        cardRef.classList.add('card__focus');
    }
};
function removeClassActive (event) {
    const target = event.target;
    if(target.classList.contains('card__active')){
        cardRef.classList.remove('card__focus');
    }
};

cardRef.addEventListener('mouseover', setClassActive);
cardRef.addEventListener('mouseout', removeClassActive);