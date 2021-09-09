import axios from 'axios';

const url = 'http://localhost:4040/users';

export const updateUser = (id, user) => axios.patch(`${url}/${id}`, user);
export const createUser = (newUser) => axios.post(`${url}/new`, newUser);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);
export const fetchUsers = () => axios.get(`${url}/list`)
