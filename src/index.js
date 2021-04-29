document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector('#create-task-form')
  const list = document.querySelector('ul')

  submitButton.addEventListener('submit', (event) => {
    event.preventDefault()
    
    console.log(event.target['priority'].value)
    addTask(event.target['new-task-description'].value)

    function addTask(task){
      let pinnedText = document.createElement('li')
      pinnedText.innerText = task
      list.appendChild(pinnedText)
      const deleteBtn = document.createElement('button')
      deleteBtn.innerText = "X"
      pinnedText.append(deleteBtn)
      deleteBtn.addEventListener('click', () => {
        pinnedText.remove()
      })
      if (event.target['priority'].value == 'low') {
      pinnedText.style.color = 'green'
      } else if (event.target['priority'].value == 'medium') {
        pinnedText.style.color = 'orange'
      } else if (event.target['priority'].value == 'high') {
        pinnedText.style.color = 'red'
      }
      
    }
    

  })
  
  

});
