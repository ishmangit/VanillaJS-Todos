import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// Equivale a: forEach( todo => crearTodoHtml(todo))
todoList.todos.forEach( crearTodoHtml );

console.log(todoList);
