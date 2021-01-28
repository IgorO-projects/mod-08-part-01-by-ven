// Пример 2 - Вывести 4 красных квадрата, 
// при клике на любой, он становиться зеленым, 
// при этом если есть уже зеленый квадрат, 
// то он становиться обратно красным и так можно кликать на любой квадрат, 
// он становиться зеленым, а старый зеленый квадрат обратно крассным и тд.

const parentDivRef = document.querySelector('.parent');
const blockRefs = document.querySelectorAll('.block');

// function setColorChangeOnBlock (event) {
//     const target = event.target;
//     const currentActiveBlock = parentDivRef.querySelector('.block__active');

//     if (currentActiveBlock) {
//         currentActiveBlock.classList.remove('block__active');
//     }

//     if (target.classList.contains('block')) {
//         target.classList.add('block__active');
//     }
// }

// parentDivRef.addEventListener('click', setColorChangeOnBlock);

function clearColorBlock () {
    blockRefs.forEach(blockRef => {
        blockRef.classList.remove('block__active');
    })
}

function setColorChangeOnBlock (event) {
    const target = event.target;

    clearColorBlock();

    if (target.classList.contains('block')){
        target.classList.add('block__active');
    }
}

parentDivRef.addEventListener('click', setColorChangeOnBlock);