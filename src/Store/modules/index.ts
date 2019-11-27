import { combineReducer} from 'redux'
import { TodoList } from './todos';

export interface StoreState {
  todos: TodoList
}

export default combineReducer