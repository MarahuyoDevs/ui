/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import App from "./App";
import hljs from "highlight.js/lib/common";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("javascript", javascript);
hljs.initHighlightingOnLoad();
hljs.highlightAll();

const root = document.getElementById("root");

render(() => <App />, root!);
