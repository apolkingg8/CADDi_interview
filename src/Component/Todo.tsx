import React from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import TodoData from "../Klass/TodoData";
import todoStore from "../store/todoStore";

export interface TodoProps {
    data: TodoData
}

const getStyles = computedFn(() => (stylesheet({
    wrap: {},
})))

const Todo = (props: TodoProps) => {
    let styles = getStyles()

    return (
        <div className={styles.wrap}>
            {props.data.value}
            <button
                onClick={()=> {
                    todoStore.removeById(props.data.id)
                }}
            >
                remove
            </button>
        </div>
    )
}

export default observer(Todo)