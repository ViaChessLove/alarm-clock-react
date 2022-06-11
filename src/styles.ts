import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
        appWrapper: {
                backgroundColor: '#f0f0f0',
                color: 'black',
                fontWeight: 'bold',
                fontSize: '20px',
                height: '100vh'
        },
        toolBar: {
                backgroundColor: 'darkblue'
        }, 
        content: {
                padding: theme.spacing(10, 0, 6),
                backgroundColor: theme.palette.background.paper,
                borderRadius: '25px'
        },
        contentBelow: {
                marginTop: '20px'
        }
        ,
        button: {
                marginTop: '20px',
                backgroundColor: 'purple',
                color: 'lightyellow',
                fontSize: '26px',
                '&:hover': {
                        backgroundColor:'pink',
                        transition: '3s'
                }
        },
        form: {
                '& .MuiTextField-root': {
                        margin: theme.spacing(1),
                        width: '25ch',
                      },
        }
}));


export default useStyles;
