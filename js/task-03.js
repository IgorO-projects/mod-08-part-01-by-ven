// Пример 3 - Поле
// Сделайте поле из белых клеточек 4x4
// При клике на клеточку она должна менять цвет 
// с белого на черный,
// с черного на белый 
// Под таблицей должна быть кнопка «поменять цвета». 
// При ее нажатии все цвета клеточек меняются 
// на противоположные.

const fieldRef = document.querySelector('.field');
// const allCellRefs = fieldRef.querySelectorAll('.field__cell');

const reverseBtnRef = document.createElement('button');
reverseBtnRef.textContent = 'set reverse color';
fieldRef.after(reverseBtnRef);


function setToggleColor (event) {

    const targetCell = event.target;
    if (!targetCell.classList.contains('field__cell')) return;

    targetCell.classList.toggle('field__cell_active');
};
// очень затратная операция, так как итеротор будет переберать каждую клетку.
// function setReverseColor () {
//     allCellRefs.forEach(cellRef => {
//         cellRef.classList.toggle('field__cell_active');
//     })
// };
function setFieldReverseColor () {
    fieldRef.classList.toggle('field_mod');
};

fieldRef.addEventListener('click', setToggleColor);
// reverseBtnRef.addEventListener('click', setReverseColor);
reverseBtnRef.addEventListener('click', setFieldReverseColor);