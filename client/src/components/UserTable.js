import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../actions/users';


const UserTable = (props) => {
  const users = useSelector(state => state.users);
  const setDisplayUserForm = props.setDisplayUserForm;
  const setCurrentId = props.setCurrentId;
  const setUserName = props.setUserName;
  const setUserEmail = props.setUserEmail;
  const dispatch = useDispatch();

  const handleUserUpdate = (id) => {
    setDisplayUserForm(true);
    setCurrentId(id);
    const currentUser = users.find(user => user.id === id);
    setUserName(currentUser.name);
    setUserEmail(currentUser.email);
  }

  const handleUserDelete = (id) => {
    dispatch(deleteUser(id));
  }

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();


  if (!users || users.length === 0)
    return (
      <div>No users</div>
    )

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.id}
              </StyledTableCell>
              <StyledTableCell align="right">{user.name}</StyledTableCell>
              <StyledTableCell align="right">{user.email}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="contained" color="primary" onClick={() => handleUserUpdate(user.id)}>
                  Update
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="contained" color="secondary" onClick={() => handleUserDelete(user.id)}>
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}

export default UserTable;