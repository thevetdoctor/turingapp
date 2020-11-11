export const initialState = {
    tasks: [
    {name:"flying",
    type:"social",status:"active",checked: "", createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7e"},
    {name:"swimming",
    type:"social",status:"active",checked: "", createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7f"},
    {name:"reading",
    type:"social",status:"active",checked: "", createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7g"},
    {name:"travelling",
    type:"social",status:"active",checked: "", createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7h"},
    {name:"sleeping",
    type:"social",status:"active",checked: "", createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7i"},
    {name:"studying",
    type:"social",status:"active",checked: "", createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7j"}
    ],
    checkedTasks: [],
    user: null
  };
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TASK":
          console.log('ADD_TASK:reducer: ', action.task);
        return {
          ...state, tasks: [...state.tasks, ...action.task]
        };
      case "GET_TASKS":
          console.log('GET_TASKS:reducer: ', action.tasks);
        return {
          ...state, tasks: [...action.tasks]
        };
      case "DELETE_TASK":
          console.log('DELETE_TASK:reducer ', action.taskId);
          let taskListDelete = [...state.tasks];
          let taskIndexDelete = taskListDelete.findIndex(task => task._id === action.taskId);
          taskListDelete.splice(taskIndexDelete, 1);
          console.log('taskIndex: ', taskIndexDelete,'taskList: ', taskListDelete);
        return {
          ...state, tasks: taskListDelete
        };
      case "CHECK_TASK":
          console.log('CHECK_TASK:reducer ', action.taskId);
          let taskListClone = [...state.tasks];
          let taskIndex = taskListClone.findIndex(task => task._id === action.taskId);
          let checkedTask = state.tasks[taskIndex];
          let checkedTaskWithCheckedProp = {...checkedTask};
          checkedTaskWithCheckedProp['checked'] = 'strike';
          taskListClone.splice(taskIndex, 1);
          console.log('taskIndex: ', taskIndex,'taskList: ', taskListClone, 'checkedTasks: ', checkedTaskWithCheckedProp);
        return {
          ...state, tasks: taskListClone, checkedTasks: [...state.checkedTasks,checkedTaskWithCheckedProp]
        };
      case "UNCHECK_TASK":
          console.log('UNCHECK_TASK:reducer ', action.taskId);
          let taskListUncheck = [...state.checkedTasks];
          let taskIndexUncheck = taskListUncheck.findIndex(task => task._id === action.taskId);
          let uncheckedTask = state.checkedTasks[taskIndexUncheck];
          let uncheckedTaskWithoutCheckedProp = {...uncheckedTask};
          uncheckedTaskWithoutCheckedProp['checked'] = '';
          taskListUncheck.splice(taskIndexUncheck, 1);
          console.log('taskIndex: ', taskIndexUncheck,'taskList: ', taskListUncheck, 'checkedTasks: ', uncheckedTaskWithoutCheckedProp);
        return {
          ...state, tasks: [...state.tasks, uncheckedTaskWithoutCheckedProp], checkedTasks: taskListUncheck
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;