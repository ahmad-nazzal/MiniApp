document.getElementById('theme-toggle').addEventListener('click', function () {
    document.getElementById("container").classList.toggle('dark-mode');
    document.getElementById("chores").classList.toggle('dark-mode');
    document.getElementById("text-input").classList.toggle('dark-mode');
    document.getElementById("divider").classList.toggle('dark-mode');
    document.querySelectorAll('.text-light').forEach(element => {
        element.classList.toggle('dark-mode');
      });
    document.querySelectorAll('.custom-radio-label').forEach(element => {
        element.classList.toggle('dark-mode');
      });
    document.querySelectorAll('.radio-section').forEach(element => {
        element.classList.toggle('dark-mode');
      });
  });
let counter=4;
  function addTask(){
    let text_input=document.getElementById("text-input").value
    const node = document.createElement("input")
    node.setAttribute('id', 'defult'+counter);
    node.setAttribute('class', 'custom-radio-label');
  }