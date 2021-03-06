export type TodoItem = {
  id: number,
  text: string,
  done: boolean
}

export type TodoList = {
  list: TodoItem[],
}

export const CREATE_TODO = "todo/CREATE_TODO"
export const EDIT_TODO = "todo/EDIT_TODO"
export const REMOVE_TODO = "todo/REMOVE_TODO"
export const TOGGLE_TODO = "todo/TOGGLE_TODO"
export const CHANGE_INPUT = "todo/CHANGE_INPUT"

interface CreateAction {
  type: typeof CREATE_TODO,
  payload: TodoItem
}

interface RemoveAction {
  type: typeof REMOVE_TODO,
  meta: {
    id: number
  }
}

interface EditAction {
  type: typeof EDIT_TODO,
  meta: {
    id: number,
    text: string
  }
}
interface ToggleAction {
  type: typeof TOGGLE_TODO,
  meta: {
    id: number
  }
}

interface ChangeInputAction {
  type: typeof CHANGE_INPUT,
  meta: {
    input: string
  }
}

export type TodoActionTypes = CreateAction | RemoveAction | EditAction | ToggleAction | ChangeInputAction

let autoId = 0;

function create(text: string):TodoActionTypes {
  return {
    type: CREATE_TODO,
    payload: {
      id: autoId++,
      text,
      done: false
    }
  }
}

function edit(id:number, text: string) {
  return {
    type: EDIT_TODO,
    meta: {
      id,
      text
    }
  }
}

function remove(id: number) {
  return {
    type: REMOVE_TODO,
    meta: {
      id
    }
  }
}

function changeInput(text: string) {
  return {
    type: CHANGE_INPUT,
    meta: {
      input: text
    }
  }
}

export const actionCreators = {
  create,
  edit,
  remove,
  changeInput
};

const initialState: TodoList = {
  list: [],
}

export function todoReducer (state=initialState, action: TodoActionTypes): TodoList{
  switch(action.type) {
    case CREATE_TODO: return {
      list: [...state.list, action.payload]
    }
    case REMOVE_TODO: return {
      list: state.list.filter(item => item.id !== action.meta.id)
    }
    case EDIT_TODO: return {
      list: state.list.map(item => item.id === action.meta.id ? {...item, text: action.meta.text}: item)
    }
    case TOGGLE_TODO: return {
      list: state.list.map(item => {
        return item.id === action.meta.id ? {...item, done: !item.done} : item
      })
    }
    default: return state
  }
}
