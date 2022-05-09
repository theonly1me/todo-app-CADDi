class Todo {
  private id: number;
  private text: string;
  constructor(text: string) {
    this.id = -1;
    this.text = text;
  }

  getText() {
    return this.text;
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }
}

export default Todo;
