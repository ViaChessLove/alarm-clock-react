import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appWrapper: {
    height: '-webkit-fill-available',
    background: '#f0f0f0',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  toolBar: {
    backgroundColor: 'darkblue',
  }, 
  content: {
    padding: theme.spacing(10, 0, 6),
    backgroundColor: theme.palette.background.paper,
    borderRadius: '25px',
  },
  contentBelow: {
    marginTop: '20px'
  }
  ,
  button: {
    backgroundColor: 'purple!important' as 'backgroundColor',
    color: 'lightyellow!important' as 'color',
    fontSize: '22px!important' as 'fontSize',
    '&:hover!important': {
      backgroundColor:'pink',
      transition: '3s'
    }
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  alarm: {
    marginTop: '15px',
    backgroundColor: 'purple',
    color: 'lightyellow',
    borderRadius: '25px'
  },
  drawer: {
    width: '240px',
  },
  drawerPaper: {
    width: '240px',
  },
  drawerContainer: {
    overflow: 'hidden',
  },
}));


export default useStyles;
