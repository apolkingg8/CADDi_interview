import React from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import todoStore from "../store/todoStore";
import _ from "lodash";
import Todo from "./Todo";

export interface TodoListProps {

}

const getStyles = computedFn(() => (stylesheet({
    wrap: {},
})))

const TodoList = (props: TodoListProps) => {
    let styles = getStyles()

    return (
        <div className={styles.wrap}>
            {_.map(todoStore.todos, (todoData)=> {
                return (
                    <Todo data={todoData}/>
                )
            })}
        </div>
    )
}

export default observer(TodoList)