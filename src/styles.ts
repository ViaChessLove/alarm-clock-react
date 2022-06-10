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
        }
}));


export default useStyles;
