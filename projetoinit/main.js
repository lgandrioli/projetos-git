

/*$(document).ready(function (){

    $("#add-task").click(function(){
        alert('Adicionando nova tarefa');
    });*/
    
  
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
