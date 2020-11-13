export const initialState = {
    tasks: [
    {name:"flying",
    type:"social", createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7e"},
    {name:"swimming",
    type:"social", createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7f"},
    {name:"reading",
    type:"social", createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7g"},
    {name:"travelling",
    type:"social", createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7h"},
    {name:"sleeping",
    type:"social", createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7i"},
    {name:"studying",
    type:"social", createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7j"}
    ],
    // checkedTasks: [],
    user: null
  };
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TASK":
          console.log('ADD_TASK:reducer: ', action.task);
        return {
          ...state, tasks: [...state.tasks, action.task]
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
          taskListClone[taskIndex]['done'] = true;
          taskListClone[taskIndex]['checked'] = 'strike';
          let checkedList = taskListClone.filter(x => x.checked === 'strike');
          console.log('taskIndex: ', taskIndex,'taskList: ', taskListClone, 'checkedTasks: ', checkedList);
        return {
          ...state, tasks: taskListClone
        };
      case "UNCHECK_TASK":
          console.log('UNCHECK_TASK:reducer ', action.taskId);
          let taskListUncheck = [...state.tasks];
          let taskIndexUncheck = taskListUncheck.findIndex(task => task._id === action.taskId);
          taskListUncheck[taskIndexUncheck]['done'] = false;
          taskListUncheck[taskIndexUncheck]['checked'] = ''; 

          let checkedListUncheck = taskListUncheck.filter(x => x.checked === 'strike');
          console.log('taskIndex: ', taskIndexUncheck,'taskList: ', taskListUncheck, 'checkedTasks: ', checkedListUncheck);
        return {
          ...state, tasks: taskListUncheck
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;