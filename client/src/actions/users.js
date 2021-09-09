import * as api from '../api';

export const getUsers = () => async (dispatch) => {

  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: 'FETCH_ALL', payload: data.data })
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteUser = (id) => async (dispatch) => {

  try {
    await api.deleteUser(id);
    dispatch({ type: 'DELETE', payload: id })
  } catch (error) {
    console.log(error.message);
  }
}

export const updateUser = (id, user) => async (dispatch) => {
  try {
    await api.updateUser(id, user);
    user.id = id;
    dispatch({ type: 'UPDATE', payload: user });
  } catch (error) {
    console.log(error.message);
  }
}

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);
    user.id = data.data.insertId;
    dispatch({ type: 'CREATE', payload: user });
  } catch (error) {
    console.log(error.message);
  }
}














