var currentEvents = [];
function plannerLaunch() {
    window.location.href = 'PlannerPage.html';
}

function studyingLaunce() {
    window.location.href = 'StudyingPage.html';
}

function createEvent(){
    var nameofEvent = document.getElementById("userInput").value;
    var startDate = document.getElementById("userInput").value;
    var endDate = document.getElementById("userInput").value;

    var event = new Events(nameofEvent, startDate, endDate);
    currentEvents.add(event);

}
function returnHome(){
    window.location.href = 'index.html';
}

function generateOrderedList() {
    
}
