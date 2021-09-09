import Card from '@material-ui/core/Card';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from 'react-redux';
import { updateUser } from '../actions/users';
import { createUser } from '../actions/users';
import { TextField } from '@material-ui/core';
import useStyles from './UserFormStyles';


const UserForm = (props) => {
  const classes = useStyles();

  const displayUserForm = props.displayUserForm;
  const currentId = props.currentId;
  const userName = props.userName;
  const userEmail = props.userEmail;
  const setUserEmail = props.setUserEmail;
  const setUserName = props.setUserName;
  const dispatch = useDispatch();

  const validateUser = (user) => {
    if (user.name.length === 0) {
      alert("Please enter user name")
      return false;
    }
    if (user.email.length === 0) {
      alert("Please enter user email");
      return false;
    }
    return true;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (currentId) {
      const userUpdateData = {
        name: userName,
        email: userEmail
      }

      if (!validateUser(userUpdateData)) return;
      dispatch(updateUser(currentId, userUpdateData))
      alert('Successfully updated user!')
    }
    else {
      const newUserData = {
        name: userName,
        email: userEmail
      };

      if (!validateUser(newUserData)) return;
      dispatch(createUser(newUserData));
      alert('Successfully added new user!')
    }
  }

  return (
    <form onSubmit={(event) => handleFormSubmit(event)} style={{ margin: "auto", width: "200px", display: displayUserForm ? 'block' : 'none' }}>
      <Card className={classes.root}>
        <Typography variant="h5" gutterBottom>
          {currentId ? 'Edit ' : 'Add'} User
        </Typography>
        <TextField value={userName} onChange={(event) => setUserName(event.target.value)} label="Name" className={classes.mg} />
        <TextField value={userEmail} onChange={(event) => setUserEmail(event.target.value)} label="Email" className={classes.mg} />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {currentId ? 'Edit ' : 'Add'}
        </Button>
      </Card>
    </form>
  )
}

export default UserForm;