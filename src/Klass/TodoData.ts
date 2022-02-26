import {v4} from "uuid";

class TodoData {

    id: string = v4()
    value: string = ''

    constructor(props: Partial<TodoData>) {
        Object.assign(this, props)
    }
}

export default TodoData