import React, {useState} from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import todoStore from "../store/todoStore";
import TodoData from "../Klass/TodoData";
import styleStore from "../store/styleStore";

export interface TodoAddProps {

}

const getStyles = computedFn(() => (stylesheet({
    wrap: {
        ...styleStore.centerRow,
    },
    input: {
        flex: 1,
    },
})))

const TodoAdd = (props: TodoAddProps) => {
    let [value, setValue] = useState('')
    let styles = getStyles()

    return (
        <div className={styles.wrap}>
            <input
                className={styles.input}
                type="text"
                value={value}
                onChange={(event)=> {
                    setValue(event.target.value)
                }}
            />
            <button
                onClick={()=> {
                    let newTodo = new TodoData({
                        value: value,
                    })
                    todoStore.add(newTodo)
                    setValue('')
                }}
            >
                Add
            </button>
        </div>
    )
}

export default observer(TodoAdd)