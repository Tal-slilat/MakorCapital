const usersReducer = (users = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...users, action.payload]
    case 'DELETE':
      return users.filter(user => user.id !== action.payload);
    case 'UPDATE':
      return users.map(user => user.id === action.payload.id ? { ...action.payload } : user);
    default:
      return users;
  }
}
export default usersReducer;