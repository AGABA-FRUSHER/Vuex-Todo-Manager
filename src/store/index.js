// import Vuex from 'vuex';
// import Vue from 'vue';
import { createStore } from 'vuex';
import todos from './modules/todos';

//load Vuex
// Vue.use(Vuex);


//create store
export default createStore({
    modules: {
        todos
    }
});