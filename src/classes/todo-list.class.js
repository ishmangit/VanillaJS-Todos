import { Todo } from ".";

export class TodoList {

    constructor() {
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {

        // Comparación no estricta ya que comparamos un string con un number
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();

    }

    marcarCompletado( id ) {

        for( const todo of this.todos ) {

            // Comparación no estricta ya que comparamos un string con un number
            if( todo.id == id ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }

        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos) );
    }

    cargarLocalStorage() {
        this.todos = ( localStorage.getItem('todo') )
            ? JSON.parse(localStorage.getItem('todo'))
            : [];

        // Equivale a: todos.map(obj => Todo.fromJson(obj))
        this.todos = this.todos.map( Todo.fromJson );
    }

}