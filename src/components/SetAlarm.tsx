import React from 'react'
import useStyles from '../styles';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'

const SetAlarm = () => {
  const classes = useStyles();
  return (
    <div className={classes.contentBelow}>
      <Container className={classes.content} maxWidth='lg'>
      <Typography variant='h2' align='center' color='inherit'>
          Set alarm
      </Typography>
      <Grid container justify='center'>
        <form autoComplete='true' className={classes.form} >
          <TextField label='Hours'/>
          <TextField label='Minutes'/>
          <TextField label='Seconds' />
        </form>
      </Grid>
      <Grid container justify='center'>
        
        <Button size="large" variant='contained' className={classes.button} onClick={() => {}}>
          Set alarm
        </Button>
      </Grid>
    </Container>
    </div>
  )
}

export default SetAlarm
