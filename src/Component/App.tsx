import React from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

export interface AppProps {

}

const getStyles = computedFn(() => (stylesheet({
    wrap: {
        width: 320,
    },
})))

const App = (props: AppProps) => {
    let styles = getStyles()

    return (
        <div className={styles.wrap}>
            <TodoList/>
            <TodoAdd/>
        </div>
    )
}

export default observer(App)