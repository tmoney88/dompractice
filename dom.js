
const form = document.querySelector('#addForm');

const itemList = document.querySelector('#items');

const filter = document.querySelector('#filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(event) {
    event.preventDefault();
    
    let newItem = document.querySelector('#item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem(event) {
    if(event.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(event) {
    let text = event.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}




