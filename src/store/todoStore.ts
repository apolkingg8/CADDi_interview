import TodoData from "../Klass/TodoData";
import {makeAutoObservable} from "mobx";
import _ from "lodash";

export class TodoStore {

    todos: TodoData[] = [
        new TodoData({
            value: 'Todo 0',
        }),
        new TodoData({
            value: 'Todo 1',
        }),
    ]

    add = (todo: TodoData)=> {
        this.todos.push(todo)
    }

    removeById = (id: string)=> {
        this.todos = _.filter(this.todos, (todo)=> {
            return todo.id !== id
        })
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new TodoStore()