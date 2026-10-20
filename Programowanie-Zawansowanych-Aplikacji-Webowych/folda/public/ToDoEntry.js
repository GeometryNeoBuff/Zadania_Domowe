"use strict";
class ToDoEntry {
    id;
    title;
    description;
    status;
    isDone;
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    render() {
        return `
            <div class = "card, card-body, mt-1, shadow">
                <p>ID ${this.id}</p>
            </div>
        `;
    }
}
