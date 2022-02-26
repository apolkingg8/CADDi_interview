import {makeAutoObservable} from "mobx";
import {cssRule} from "typestyle";
import {viewHeight} from "csx";
import {NestedCSSProperties} from "typestyle/lib/types";

export class StyleStore {

    readonly centerRow: NestedCSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    constructor() {
        makeAutoObservable(this)
        cssRule('body', {
            backgroundColor: '#3a3a3a',
            color: '#d1d1d1',
            height: viewHeight(100),
        })
        cssRule('#root', {
            ...this.centerRow,
            height: viewHeight(100),
        })
    }
}

export default new StyleStore()