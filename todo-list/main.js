
// terminou de carregar os elementos em tela?
/*
$(document).ready(function () {
    $("#add-task").click(function() {
        alert('Adicionando nova tarefa');
    });
});
*/

let buttonAddTask = document.getElementById("add-task");

// attach on element button
buttonAddTask.addEventListener("click", function() {
    let dateNow = new Date();

    // referência do elemento "descrição (input)"
    let taskDescriptionInput = document.getElementById("task-description");

    // titulo
    let taskTitleInput = document.getElementById("task-title");

    // tabela de ativdades
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
                    </tr>`;
    
    taskTableTBody.insertAdjacentHTML("beforeend", template);
});