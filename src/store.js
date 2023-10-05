import { createStore } from 'redux';
import rootred from './redux/reducers/main';
//import { createStoreHook } from 'react-redux';


const store = createStore(
    rootred
)

export default store;