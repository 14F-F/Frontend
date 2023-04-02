import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Login from "../components/Login.vue";
import Questions from "../components/Questions.vue";

const app = createApp(App);
app.component('Login', Login);
app.component('Questions', Questions);
const mountedApp = app.mount('#app');