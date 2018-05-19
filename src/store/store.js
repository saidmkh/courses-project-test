import {createStore} from 'redux';


const initial_state = {
    token: localStorage.getItem('auth')
}

function reducer (state, action) {
    switch (action.type) {
      case 'AUTH':
        localStorage.setItem('auth', action.payload.token);
        return {...state, ...{
          token: action.payload.token
        }}
      case 'LOGOUT':
        localStorage.removeItem('auth');
        return {...state, ...{token: null}}
      default:
        return state
    }
  }
  
  export default createStore(reducer, initial_state);