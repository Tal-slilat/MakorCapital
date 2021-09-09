import { useState, useEffect } from "react";
import Title from './components/Title';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import { useDispatch } from 'react-redux';
import { getUsers } from './actions/users';

import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  const url = 'http://localhost:4040/users/list';
  const [displayUserForm, setDisplayUserForm] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const disptach = useDispatch();

  useEffect(() => {
    disptach(getUsers());

  }, [])

  const openUserForm = () => {
    setUserEmail('');
    setUserName('');
    setCurrentId(null);
    if (displayUserForm) setDisplayUserForm(false)
    else setDisplayUserForm(true)
  }

  return (
    <div>
      {/* page title */}
      <Title />
      {/* Form to add or edit user */}
      <UserForm displayUserForm={displayUserForm} currentId={currentId} userName={userName} userEmail={userEmail} setUserName={setUserName} setUserEmail={setUserEmail} />
      {/* Button to add user */}
      <div className="usersTable">
        <Button onClick={() => openUserForm()} variant="contained" color="primary">+</Button>
        {/* Table that shows all user from db */}
        <UserTable setDisplayUserForm={setDisplayUserForm} setCurrentId={setCurrentId} setUserName={setUserName} setUserEmail={setUserEmail} />
      </div>
    </div>
  );
}

export default App;
