import React, { useEffect } from 'react'
import useStyles from '../styles';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';

interface SetAlarmProps {
  hours: number;
  setHours: React.Dispatch<React.SetStateAction<number>>;
  minutes: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  handleAdd: (e:React.FormEvent) => void;
}

const SetAlarm: React.FC<SetAlarmProps> = (
  {
    hours, 
    setHours,
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    handleAdd
  }) => {
  const classes = useStyles();

  useEffect(() => {
    if (isNaN(hours)){
      setHours(0);
    }
    if (isNaN(minutes)){
      setMinutes(0)
    }
    if (isNaN(seconds)){
      setSeconds(0);
    }
  }, [hours]);

  return (
    <div className={classes.contentBelow}>
      <Container className={classes.content} maxWidth='lg'>
        <Typography variant='h2' align='center' color='inherit'>
            Set alarm
        </Typography>
        <Grid container justify='center'>
          <form autoComplete='true' className={classes.form} onSubmit={(e) => {
            e.preventDefault();
            handleAdd(e);
          }}>
            <TextField label='Hours' onChange={(e) => setHours(parseInt(e.target.value))}/>
            <TextField label='Minutes' onChange={(e) => setMinutes(parseInt(e.target.value))}/>
            <TextField label='Seconds' onChange={(e) => setSeconds(parseInt(e.target.value))}/>
            <Grid container justify='center' style={{marginTop: '30px'}}>
              
              <Button size="medium" variant='contained' className={classes.button} type='submit'>
                Set alarm
              </Button>
            </Grid>
          </form>
        </Grid>
      </Container>
    </div>
  )
}

export default SetAlarm
