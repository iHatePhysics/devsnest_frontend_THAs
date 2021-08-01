const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "AddTodo":
      console.log("Added a Todo");
      return [...state, action.payload];
    case "DelTodo":
      console.log("Deleted a Todo");
      return state.filter((item, index) => index !== action.payload);
    case "SetTodo":
      console.log(state[action.payload].done);
      return (state[action.payload].done = "true");
    case "LoadTodo":
      console.log(action.payload);
      return action.payload;
    case "ClearTodos":
      return [];
    default:
      return state;
  }
};

export default todoReducer;
