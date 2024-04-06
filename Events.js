class Event {
    constructor(nameofEvent, startDate, endDate) {
        this.nameofEvent = nameofEvent;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    fullEvent() {
        return this.nameofEvent + " starts on " + this.startDate + " and ends on " + this.endDate;
    }
}