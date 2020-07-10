import { Todo } from '../classes';
import { todoList } from '../index';

// Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnFiltrarCmp = document.querySelector('.clear-completed');


export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
        <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
            <div class="view">
                <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
                <label>${ todo.tarea }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}

// Manejo de Eventos
txtInput.addEventListener('keyup', ( event ) => {

    if ( event.key === 'Enter' && txtInput.value.length ) {
        const nuevoTodo = new Todo(txtInput.value);

        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);

        txtInput.value = '';
    }

});

divTodoList.addEventListener('click', () => {

    // Necesitamos subir dos niveles para coger el elemento li
    const todoElemento = event.target.parentElement.parentElement
    const nombreElemento = event.target.localName; // input, label, button
    const todoId = todoElemento.getAttribute('data-id');

    if ( nombreElemento.includes('input') ) { // Click en el check
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');
    } else if ( nombreElemento.includes('button') ) { // Borrado del todo
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );
    }

});

btnFiltrarCmp.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for( let i = divTodoList.children.length - 1; i >= 0; i-- ) {

        const elemento = divTodoList.children[i];

        if ( elemento.classList.contains('completed') ) {
            divTodoList.removeChild(elemento);
        }

    }
});
