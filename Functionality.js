var currentAssignments = [];
function plannerLaunch() {
    window.location.href = 'PlannerPage.html';
}

function studyingLaunch() {
    window.location.href = 'StudyingPage.html';
}

function createAssignment(){
    var nameofAssignment = document.getElementById("userInput").value;
    var dueDate = document.getElementById("userInput").value;

    var Assignment = new Assignments(nameofAssignment, dueDate);
    currentAssignments.add(Assignment);
    generateOrderedList();
}
function returnHome(){
    window.location.href = 'index.html';
}

function generateOrderedList() {
    var ul = document.createElement("ul");
    for (var i = 0; i < currentAssignments.length; i++){
        var li = document.createElement("li");
        li.textContent = currentAssignments[i];
        ul.appendChild(li);
    }
    var container = document.getElementById("listContainer");
    container.appendChild(ul);
}
