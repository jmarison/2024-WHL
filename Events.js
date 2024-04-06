class Assignment {
    constructor(nameofAssignment, dueDate) {
        this.nameofAssignment = nameofAssignment;
        this.dueDate = dueDate;
    }

    fullAssignment() {
        return this.nameofAssignment + " starts on " + this.startDate + " and ends on " + this.dueDate;
    }
}