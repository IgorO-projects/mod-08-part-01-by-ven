const treeRef = document.querySelector('.tree');

// treeRef.addEventListener('click', event => {
//     const targetListItem = event.target;
//     if (!targetListItem.classList.contains('tree__item')) return;

//     const subTreeRef = targetListItem.querySelector('.tree__sub-tree');

//     if (!subTreeRef) return;
//     subTreeRef.classList.toggle('tree__sub-tree_open');
// });
treeRef.addEventListener('click', event => {
    const targetListItem = event.target;
    if (!targetListItem.classList.contains('tree__item')) return;

    const subTreeRef = targetListItem.querySelector('.tree__sub-tree');

    if (!subTreeRef) return;

    if(subTreeRef.classList.contains('tree__sub-tree_open')) {
        subTreeRef.querySelectorAll('.tree__sub-tree')
        .forEach(elem => {
            elem.classList.remove('tree__sub-tree_open');
        });
    }
    subTreeRef.classList.toggle('tree__sub-tree_open');
});