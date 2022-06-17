import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import useStyles from '../styles';
import AlarmSingle from './AlarmSingle';
import { Time } from '../model';

interface AlarmProps {
  alarms: Time[];
  setAlarms: React.Dispatch<React.SetStateAction<Time[]>>;
}

const AlarmList:React.FC<AlarmProps> = ({alarms, setAlarms}) => {
  const classes = useStyles();
  const [show, setShow] = useState<boolean>(false);
  const [alarmList, setAlarmList] = useState<Time[]>(alarms);
  useEffect(() => {
    if (alarms.length || alarmList.length> 0){
      setShow(true);
    } else {
      setShow(false)
    }
  }, [alarms]);
  const undefinedToZero = (element: number | undefined): number => {
    if (element === undefined){
      element = 0;
    }
    return element;
  }
  const noUndefinedTime = (time: Time): Time =>{
    time.hours = undefinedToZero(time.hours);
    time.minutes = undefinedToZero(time.minutes);
    time.seconds = undefinedToZero(time.seconds);
    return time;
  }
  const compareSeconds = (left: Time, right: Time): number => {
    left = noUndefinedTime(left);
    right = noUndefinedTime(right);
    
    return (left.hours && left.minutes && left.seconds
         && right.hours && right.minutes && right.seconds!==undefined)? 
         (left.hours - right.hours)*3600 + (left.minutes - right.minutes)*60 + (left.seconds - right.seconds): 1;
  }
  return (
    <>
    {show? (
      <div className={classes.contentBelow}>
        <Container className = {classes.content} maxWidth = 'lg'>
          <Typography variant='h3' align='center'>
            Your alarms
          </Typography>
          <Typography variant='h3' align='center'>
            {alarms.map((alarm) => (
              <AlarmSingle key={alarm.id} alarm={alarm} alarms={alarms} setAlarms={setAlarms}/>
                ))
            }
          </Typography>
          
          <Grid container justify='center' style={{marginTop: '30px'}}>
            <Button size="medium" variant='contained' className={classes.button} onClick={() => {
              alarms.sort(compareSeconds);
              }}>
              Sort Alarms
            </Button>
          </Grid>
        </Container>
      </div>) 
      : undefined}
    </>
    
  )
}

export default AlarmList
