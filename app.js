const input = document.getElementById('input');
const submit = document.getElementById('submit');
const output = document.getElementById('output');
const collection = document.getElementById('collection');

// Event listener for submit
submit.addEventListener('click', addTask);
    // Add tasks to list
    function addTask(e){
        
        // Create li
        const li = document.createElement('li');
        // Add class
        li.className = 'task';
        // Create text node and append to li
        li.appendChild(document.createTextNode(input.value));
        // Append li to collection field
        collection.appendChild(li);
        // Assign input value to new li
        li.innerHTML = input.value;

        e.preventDefault();
    };





/*let tasks;

tasks.forEach(function(task){
    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'item';
    //Append text node to li
    li.appendChild(document.createTextNode(task));
});*/