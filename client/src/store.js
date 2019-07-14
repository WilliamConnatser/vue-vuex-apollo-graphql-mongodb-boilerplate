//Import GraphQL dependencies and queries
import {
  defaultClient as apolloClient
} from './main';
import {
  GET_TODOS,
  ADD_TODO,
  TOGGLE_COMPLETION,
  DELETE_TODO
} from './queries';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    loading: false

  },
  mutations: {
    setTodos: (state, payload) => {
      state.todos = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    addTodo: (state, payload) => {
      state.todos.unshift(payload);
    },
    setCompletion: (state, payload) => {
      for (var i = 0; i < state.todos.length; i++) {
        if (state.todos[i]._id === payload._id) {
          state.todos[i].completed = !state.todos[i].completed;
          break;
        }
      }
    },
    removeTodo: (state, payload) => {
      for (var i = 0; i < state.todos.length; i++) {
        if (state.todos[i]._id === payload) {
          state.todos.splice(i, 1);
          break;
        }
      }
    }

  },
  actions: {

  }
}) 
