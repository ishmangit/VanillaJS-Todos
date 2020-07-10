export class TodoList {

    constructor() {
        this.todos = [];
    }

    nuevoTodo( todo ) {
        this.todos.push(todo);
    }

    eliminarTodo( id ) {

    }

    marcarCompletado( id ) {

        for( const todo of this.todos ) {

            // Comparación no estricta ya que comparamos un string con un number
            if( todo.id == id ) {
                todo.completado = !todo.completado;
                break;
            }

        }

    }

    eliminarCompletados() {

    }

}