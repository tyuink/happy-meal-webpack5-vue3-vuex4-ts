import { createStore } from 'vuex';
import { SET_NAME, SET_GENDER, SET_AGE, INCREMENT } from './mutation-types';

const examples = {
    index: 0,
    profiles: [
        { name: 'tyu.ink', gender: 'male', age: 38 },
        { name: 'fit1983', gender: 'female', age: 23 },
        { name: 'wangweiqi', gender: 'male', age: 18 }
    ]
}

const store = createStore({
    state: {
        name: 'tyu.ink',
        gender: 'male',
        age: 38,

        count: 0
    },

    getters: {},

    actions: {
        updateProfileAsync (context) {
            setTimeout(() => {
                let profile = examples.profiles[++examples.index % 3];
                context.commit(SET_NAME, profile);
                context.commit(SET_GENDER, profile);
                context.commit(SET_AGE, profile);
            }, 500);

        },
        increment (context) {
            context.commit('increment');
        }
    },

    mutations: {
        [SET_NAME] (state, payload) {
            state.name = payload.name;
        },
        [SET_GENDER] (state, payload) {
            state.gender = payload.gender;
        },
        [SET_AGE] (state, payload) {
            state.age = payload.age;
        },
        [INCREMENT] (state) {
            state.count++;
        }
    },

    modules: {}
})

export default store;
