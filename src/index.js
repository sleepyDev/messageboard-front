import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Layout from "./components/layout.js"
import store from "./store"

const app = document.getElementById("root")

var es = new EventSource("http://localhost:4399/sse");
es.onmessage = (event) => {
    console.log(event.data)
}

ReactDOM.render(
<Provider store={store}>
    <Layout/>
</Provider>
    , app);
