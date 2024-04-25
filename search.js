

// JavaScript code

function search(event) {
    if (event.keyCode === 13) { // Check if Enter key is pressed
        let visibleItems = document.querySelectorAll('#list .erazi[style="display: list-item;"]'); // Select visible items
        if (visibleItems.length > 0) {
            selectItem(visibleItems[0].querySelector('button')); // If there are visible items, select the first one
        }
    } else {
        let input = document.getElementById('searchbar').value;
        input = input.toLowerCase();
        let x = document.getElementsByClassName('erazi');

        for (i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display = "none";
            } else {
                x[i].style.display = "list-item";
            }
        }
    }
}

// Function to select an item
function selectItem(item) {
    let selectedItemText = document.createElement('div');
    selectedItemText.textContent = item.textContent;
    document.getElementById('selectedItems').innerHTML = ''; // Clear previous selection
    document.getElementById('selectedItems').appendChild(selectedItemText);
    
    // Log selected item information to the console
    console.log({TextContent: item.textContent});
    console.log({ID: item.parentElement.id});
    console.log({Class: item.parentElement.className});
}