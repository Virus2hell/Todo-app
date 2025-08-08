import type { TodoTypes } from "./todo";

const LOCAL_STORAGE_KEY = "todos";

const TodoService = {

    //getting todos
    getTodos: (): TodoTypes[] => {
        const todos = localStorage.getItem(LOCAL_STORAGE_KEY);
        return todos ? JSON.parse(todos) : [];
    },

    //adding todos
    addTodos: (text:string): TodoTypes => {
        const todos = TodoService.getTodos();
        const newTodo: TodoTypes = {
            id: todos.length + 1, // simple id generation
            text,
            completed: false
        };
        const updateTodos = [...todos, newTodo];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
        return newTodo;
    },

    //updating todos
    updateTodos: (todo:TodoTypes): TodoTypes => {
        const todos = TodoService.getTodos();
        const updatedTodos = todos.map((t) => (t.id === todo.id ? todo : t));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
        return todo;
    },

    //deleting todos
    deleteTodos: (id:number): void => {
        const todos = TodoService.getTodos();
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    }

}

export default TodoService;