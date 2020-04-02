const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addIthemInput = document.querySelector ('.addIthemInput');
const addItemButton = document.querySelector ('.addItemButton');
const removeItemButton = document.querySelector ('.removedItemButton');



        // listDiv.addEventListener('mouseover',() => {
        //     listDiv.textContent = listDiv.textContent.toUpperCase();
        // });

        // listDiv.addEventListener('mouseout',() => {
        //     listDiv.textContent = listDiv.textContent.toLowerCase();
        // });


document.addEventListener('click', (event) => {
    console.log(event.target);
});

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none' ) {

        listDiv.style.display = 'block';
        toggleList.textContent = 'Hide list';


    } else {
    listDiv.style.display = 'none';
    toggleList.textContent = 'Show list';
    }
});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = '';
});


addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addIthemInput.value;
    ul.appendChild(li);
    addIthemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);

}); 



