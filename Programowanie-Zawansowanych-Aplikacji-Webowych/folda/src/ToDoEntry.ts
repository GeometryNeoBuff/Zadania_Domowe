class ToDoEntry {
    id: number;
    title: string;
    description?: string;
    status?: string;
    isDone?: boolean;

    constructor(id: number, title: string){
        this.id = id;
        this.title = title;
    }

    render(){
        return `
            <div class = "card, card-body, mt-1, shadow">
                <p>ID ${this.id}</p>
            </div>
        `;
    }
}