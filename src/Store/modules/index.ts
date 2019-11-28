import { combineReducers, createStore} from 'redux'
import { TodoList, todoReducer } from './todos';

export type StoreState = {
  todos: TodoList
}

const rootReducer = combineReducers<StoreState>({ todos: todoReducer })
export default createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>