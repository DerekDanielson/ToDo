const input = document.getElementById('input');
const submit = document.getElementById('submit');
const output = document.getElementById('output');
const collection = document.getElementById('collection');

// Event listener for submit
submit.addEventListener('click', addTask);
    // Add tasks to list
    function addTask(e){
        if(input.value === ''){
            alert('Add Task');
        } else {
        // Create li
        const li = document.createElement('li');
        // Add class
        li.className = 'task';
        // Create text node and append to li
        li.appendChild(document.createTextNode(input.value));
        // Append li to collection field
        collection.appendChild(li);
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        collection.appendChild(link);
        // Assign input value to new li
        li.innerHTML = input.value;
        //Clear input
        input.value = '';
        }

        e.preventDefault();
    };

// Remove task event
//collection.addEventListener('click', removeTask);

// Remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
        }
    }
}
