/*$(document).ready(function (){

    $("#add-task").click(function(){
        alert('Adicionando nova tarefa');
    });
    
  
    let buttonAddTask = document.getElementById("add-task");
    buttonAddTask.addEventListener("click",function(){

      let taskdescriptioninput = document.getElementById("task-description");
      let tasktable = document.getElementById("task-table");
      let tasktablebody = tasktable.querySelector("tbody");
      
      let index = 1;
      let title = "";
      let description = taskdescriptioninput.value;
      let datestr = "19/05/2021 19:15";

      let template = `<tr>
                     <td scope="row">${index}</td>
                     <td>${title}</td>
                     <td>${description}</td>
                     <td>${datestr}</td>
                     </tr>`;

     tasktablebody.insertAdjacentHTML("beforend",template)
     console.log(description)

   })

  /*function addtask(){
     const novatask = document.getElementById("dingoubel").value;
     const listatask = document.getElementById("lista-ordenada");
     const linetask = document.createElement("li");
     linetask.innerText =novatask
     listatask.appendChild(linetask)
     console.log(listatask)
   }


   let addbutton = document.querySelector('button')
   let table = document.querySelector('table')

  
   let inputtitle = document.querySelector('#titulo')
   let inputdesc = document.querySelector('#descrição')
   let inputdata = document.querySelector('#data')

   addbutton.addEventListener('click',function(){
     let title = inputtitle.value
     let desc = inputdesc.value
     let data = inputdata.value

     let template = `
                     <tr>
                        <td>${titulo}</td>
                        <td>${descrição}</td>
                        <td>${data}</td>
                      </tr>`
                      table.innerHTML += template
   })*/
function deleterow(event) {
  if (!event.target.classList.contains("deleteBtn")) return;
  const botdelete = event.target;
  botdelete.closest("tr").remove();
}
function addtask() {
  let dateNow = new Date();

  // referência do elemento "descrição (input)"
  let taskDescriptionInput = document.getElementById("task-description");

  // titulo
  let taskTitleInput = document.getElementById("task-title");

  // tabela de atividades
  let taskTable = document.getElementById("task-table");

  // elemento <tbody> presente dentro da tabela de atividades
  let taskTableTBody = taskTable.querySelector("tbody");

  let index = 1;
  let title = taskTitleInput.value;
  let description = taskDescriptionInput.value;

  let day = dateNow.getDate();
  let month = ("" + (dateNow.getMonth() + 1)).padStart(2, "0");
  let year = dateNow.getFullYear();
  let hour = dateNow.getHours();
  let minute = dateNow.getMinutes();
  let seconds = dateNow.getSeconds();

  let dateStr = `${day}/${month}/${year} ${hour}:${minute}:${seconds}`;

  // nova linha a ser inserida apartir da ação de click
  let template = `<tr>
                           <td scope="row">${index}</td>
                           <td>${title}</td>
                           <td>${description}</td>
                           <td>${dateStr}</td>
                           <td><button type="button" class="deleteBtn btn btn-danger">delete</button></td>
                       </tr>`;
  taskTableTBody.insertAdjacentHTML("beforeend", template);

  //botao de deletar

  taskTable.addEventListener("click", deleterow);
}

let buttonAddTask = document.getElementById("add-task");

// attach on element button
buttonAddTask.addEventListener("click",addtask);


//<td type="button" class="deleteBtn" id="deletebutton">delete</td>