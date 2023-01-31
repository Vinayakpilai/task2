import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        items: []
    },
    mutations: {
        setItems(state, items) {
            state.items = items
        }
    },
    actions: {
        getData({commit}) {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((response) => response.json())
                .then((data) => commit('setItems', data));
        }
    },
    getters: {
        loading(state) {
            return state.loading
        },
        items(state) {
            console.log(state.items);
            return state.items
        }
    }
})