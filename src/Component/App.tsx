import React from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import TodoList from "./TodoList";
import TodoAddBtn from "./TodoAdd";

export interface AppProps {

}

const getStyles = computedFn(() => (stylesheet({
    wrap: {},
})))

const App = (props: AppProps) => {
    let styles = getStyles()

    return (
        <div className={styles.wrap}>
            <TodoList/>
            <TodoAddBtn/>
        </div>
    )
}

export default observer(App)