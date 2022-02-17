const initState = {
    task: [],
  };
  
  export const reducer = (state = initState, action) => {
    switch (action.type) {
      case "ADDNEW":
        return { ...state, task: [...state.task, action.payload] };
      case "CHECKBOX":
        return { ...state, task: state.task.map(el=>el.id===action.payload ?{...el,done:!el.done} :el) };
        case "UPDATE":
        return { ...state, task: state.task.map(el=>el.id===action.payload.id ?{...el,text:action.payload.updatetext} :el) };
        case "DELETE":
          return { ...state, task:state.task.filter(el=>el.id!==action.payload.id) };
      default:
        return state;
    }
  };