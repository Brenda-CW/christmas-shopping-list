const items = ["Candles", "Cheese", "Chocolate", "Booze"]
const checklist = document.getElementById("checklist")
const btn = document.querySelector("button")
const input = document.querySelector("input")

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

//My solution - loop over the array and add items ot the list; if item is checked off, cross item out on list
function list() {{
    const newChecklist = items.map(item =>
        `<li class="checklist-item">
                <input type="checkbox" id="${item}" value="${item}">
                <label for="${item}" class="strikethrough">${item}</label>
        </li>`).join('\n');
    checklist.innerHTML = newChecklist;
    }
}
 

list(); 

function addItem(e) {
    if (e.code === 'Enter') {
        btn.click();
    }
}

btn.onclick = () => {
    updateList();
}

function updateList() {
    items.push(input.value);
    input.value = ""
    list();
}


//To remove completed items
//map over array and find items whose class includes strikethrough
//save the items without that class in a new variable
//run the updateList function

// function clearCompleted() {
//      const cleanedList = items.map(item => {
//         if ({item}.input === checked) {
//          {item}.remove();
//       }
//     console.log(cleanedList);
//     })
//  }
 
//  clearBtn.addEventListener("click", () => {
//     clearCompleted();
//  })