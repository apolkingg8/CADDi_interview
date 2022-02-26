import React from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import TodoData from "../Klass/TodoData";
import todoStore from "../store/todoStore";
import styleStore from "../store/styleStore";

export interface TodoProps {
    data: TodoData
}

const getStyles = computedFn(() => (stylesheet({
    wrap: {
        ...styleStore.centerRow,
        height: 36,
    },
    text: {
        flex: 1,
    },
})))

const Todo = (props: TodoProps) => {
    let styles = getStyles()

    return (
        <div className={styles.wrap}>
            <div className={styles.text}>
                {props.data.value}
            </div>
            <button
                onClick={()=> {
                    todoStore.removeById(props.data.id)
                }}
            >
                Remove
            </button>
        </div>
    )
}

export default observer(Todo)