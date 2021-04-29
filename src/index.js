document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector('#create-task-form')
  const list = document.querySelector('ul')

  submitButton.addEventListener('submit', (event) => {
    event.preventDefault()
    
    console.log(event.target['new-task-description'].value)
    addTask(event.target['new-task-description'].value)
  })
  
  function addTask(task){
    let pinnedText = document.createElement('li')
    pinnedText.innerText = task
    list.appendChild(pinnedText)
  }

});
