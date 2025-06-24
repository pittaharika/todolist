const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoListUL = document.getElementById('todoList');
const feedbackMessage = document.getElementById('feedbackMessage');
//console.log("To-Do-List script loaded");
addButton.addEventListener('click',function(event){
   // console.log("Add Button clicked");
    addTask();
    NoTaskMsg();
});
function addTask(){
    const taskText = todoInput.value.trim(); // removes white space from both ends of the string
    if(taskText === ""){
        alert("Please enter task.");
        return; // exit the function if tinput is empty

    }
    function NoTaskMsg(){
        if (todoListUL.length === 0)
        {
            document.getElementById('NoTask');
        }else{
            document.getElementById('NoTask').style.display = 'none';
        }
    }
    const listItem = document.createElement('li');//create new list item
    listItem.textContent = taskText;//set the text content
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.color = "red";
    deleteButton.classList.add("delete-btn");
    listItem.appendChild(deleteButton);
    //delete button working
    deleteButton.addEventListener('click',function()
{
    const deletedTask = listItem.textContent.replace('Delete', '').trim();
    listItem.remove();
    feedbackMessage.textContent = `"${deletedTask}" deleted successfully.`;
    feedbackMessage.style.color = "orange";
});    
    todoListUL.appendChild(listItem);//add the new item to the list
    NoTaskMsg()
    todoInput.value = "";//clear the input field
    feedbackMessage.textContent = "Task added successfully";
    feedbackMessage.style.color = "green";
    console.log("Task added:",taskText);

}
todoInput.addEventListener('keyup',function(event)
{
    if (event.key == 'Enter')// check if enter key is pressed
    {
        addTask();//call the addtask function
    }
    
});



