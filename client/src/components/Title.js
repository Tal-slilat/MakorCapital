import useStyles from './TitleStyle';


const Title = () => {
  const classes = useStyles();

  return (
    <h1 className={classes.root}>User Management</h1>
  )
}

export default Title;