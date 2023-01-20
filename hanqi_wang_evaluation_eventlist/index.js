class TodoModel {
    constructor() {
        this.isEditing = false;
        this.currentEditingEventId = null;
    }

    getEvents() {
        return fetch("http://localhost:3000/events")
            .then((response) => response.json());
    }

    addEvent(event) {
        return fetch("http://localhost:3000/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: event.name, start: event.start, end: event.end }),
        }).then((response) => response.json());
    }

    updateEvent(eventId, event) {
        return fetch(`http://localhost:3000/events/${eventId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: event.name, start: event.start, end: event.end }),
        }).then((response) => response.json());
    }

    deleteEvent(eventId) {
        return fetch(`http://localhost:3000/events/${eventId}`, {
            method: "DELETE",
        });
    }
}

class TodoView {
    constructor() {
        this.eventTable = document.getElementById("event-table");
        this.eventList = document.getElementById("event-list");
        this.addEventBtn = document.getElementById("add-event-btn");
        this.addEventForm = document.getElementById("add-event-form");
        this.eventNameInput = document.getElementById("event-name-input");
        this.eventStartInput = document.getElementById("event-start-input");
        this.eventEndInput = document.getElementById("event-end-input");
        this.saveEventBtn = document.getElementById("save-event-btn");
        this.cancelEventBtn = document.getElementById("cancel-event-btn");
    }

    displayEvents(events) {
        events.forEach((event) => {
            this.addEventToTable(event);
        });
    }

    addEventToTable(event) {
        const eventRow = document.createElement("tr");
        eventRow.innerHTML = `<td>${event.name}</td> <td>${event.start}</td> <td>${event.end}</td> <td> <button class="edit-event-btn" data-event-id=${event.id}>Edit</button> <button class="delete-event-btn" data-event-id=${event.id}>Delete</button> </td>`;
        this.eventList.appendChild(eventRow);

        // Handle edit event button click
        const editEventBtn = eventRow.querySelector(".edit-event-btn");
        editEventBtn.addEventListener("click", (e) => {
            this.isEditing = true;
            this.currentEditingEventId = e.target.dataset.eventId;
            this.addEventForm.style.display = "block";
            this.eventNameInput.value = event.name;
            this.eventStartInput.value = event.start;
            this.eventEndInput.value = event.end;
        });

        // Handle delete event button click
        const deleteEventBtn = eventRow.querySelector(".delete-event-btn");
        deleteEventBtn.addEventListener("click", (e) => {
            const eventId = e.target.dataset.eventId;
            // Delete event from server
            this.controller.deleteEvent(eventId);
            // Delete event from table
            eventRow.remove();
        });
    }

    showAddEventForm() {
        this.addEventForm.style.display = "block";
    }

    hideAddEventForm() {
        this.eventNameInput.value = "";
        this.eventStartInput.value = "";
        this.eventEndInput.value = "";
        this.addEventForm.style.display = "none";
    }
}

class TodoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Get initial data from server
        this.model.getEvents()
            .then((data) => {
                this.view.displayEvents(data);
            });

        // Handle add event button click
        this.view.addEventBtn.addEventListener("click", () => {
            this.view.showAddEventForm();
        });

        // Handle save event button click
        this.view.saveEventBtn.addEventListener("click", () => {
            const eventName = this.view.eventNameInput.value;
            const eventStart = this.view.eventStartInput.value;
            const eventEnd = this.view.eventEndInput.value;

            // Input validation
            if (!eventName || !eventStart || !eventEnd) {
                alert("Please enter all the fields");
                return;
            }

            if (this.model.isEditing) {
                // Update event in the server
                this.model.updateEvent(this.model.currentEditingEventId, { name: eventName, start: eventStart, end: eventEnd })
                    .then((data) => {
                        // Update event in the table
                        this.view.updateEventInTable(this.model.currentEditingEventId, { name: eventName, start: eventStart, end: eventEnd });

                        this.view.eventNameInput.value = "";
                        this.view.eventStartInput.value = "";
                        this.view.eventEndInput.value = "";
                        this.view.hideAddEventForm();
                        this.model.isEditing = false;
                        this.model.currentEditingEventId = null;
                    });
            } else {
                // Create new event in the server
                this.model.addEvent({ name: eventName, start: eventStart, end: eventEnd })
                    .then((data) => {
                        // Add new event to the table
                        this.view.addEventToTable(data);
                        // Reset form
                        this.view.eventNameInput.value = "";
                        this.view.eventStartInput.value = "";
                        this.view.eventEndInput.value = "";
                        this.view.hideAddEventForm();
                    });
            }
        });
        // Handle cancel event button click
        this.view.cancelEventBtn.addEventListener("click", () => {
            this.view.eventNameInput.value = "";
            this.view.eventStartInput.value = "";
            this.view.eventEndInput.value = "";
            this.view.hideAddEventForm();
            this.model.isEditing = false;
            this.model.currentEditingEventId = null;
        });

        // Handle edit event button click
        this.view.eventList.addEventListener("click", (e) => {
            if (e.target.classList.contains("edit-event-btn")) {
                const eventId = e.target.dataset.eventId;
                this.model.currentEditingEventId = eventId;
                this.model.isEditing = true;

                // Get event from the server and populate the form
                this.model.getEventById(eventId)
                    .then((event) => {
                        this.view.eventNameInput.value = event.name;
                        this.view.eventStartInput.value = event.start;
                        this.view.eventEndInput.value = event.end;
                        this.view.showAddEventForm();
                    });
            } else if (e.target.classList.contains("delete-event-btn")) {
                const eventId = e.target.dataset.eventId;

                // Delete event from the server
                this.model.deleteEvent(eventId)
                    .then(() => {
                        // Remove event from the table
                        this.view.removeEventFromTable(eventId);
                    });
            }

        });
    }
}

// Create new TodoController instance
const todoModel = new TodoModel();
const todoView = new TodoView();
const todoController = new TodoController(todoModel, todoView);

// This will handle the initial data load and event binding
todoController.init();