import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@material-ui/core';
import {Time} from '../model';
import './font.css'
import useStyles from '../styles';

interface AlarmSingleProps {
  alarm: Time;
  alarms: Time[];
  setAlarms: React.Dispatch<React.SetStateAction<Time[]>>;
}

const AlarmSingle: React.FC<AlarmSingleProps> = ({alarm, alarms, setAlarms}) => {
  const [hours, setHours] = useState<string>(alarm.hours + '');
  const [minutes, setMinutes] = useState<string>(alarm.minutes + '');
  const [seconds, setSeconds] = useState<string>(alarm.seconds + '');
  useEffect(() => {
    if (alarm.hours && alarm.hours < 10) {
      setHours('0' + alarm.hours);
    }
    if (alarm.minutes && alarm.minutes < 10) {
      setMinutes('0' + alarm.minutes);
    }
    if (alarm.seconds && alarm.seconds < 10) {
      setSeconds('0' + alarm.seconds);
    }
  }, [alarm.hours, alarm.minutes, alarm.seconds]);
  useEffect(() => {
    const timeout = setInterval(() =>{
      const currTime: string = new Date().toLocaleString('en-US', {hour12: false, hour: 'numeric',  minute: 'numeric', second: 'numeric'});
      const time: string[] = currTime.split(':');
      const hours: number = parseInt(time[0]);
      const minutes: number = parseInt(time[1]);
      const seconds: number = parseInt(time[2]);
      if (alarm.hours === undefined) {
        alarm.hours = 0;
      }
      if (alarm.minutes === undefined) {
        alarm.minutes = 0;
      }
      if (alarm.seconds === undefined) {
        alarm.seconds = 0;
      }
      if ((hours*3600 + minutes*60 + seconds) === (alarm.hours*3600 + alarm.minutes*60 + alarm.seconds)){
        alert('Pora vstavat`')
      }
    }, 500);
  }, [])
  const classes = useStyles();
  return (
    <Container className={classes.alarm} maxWidth='sm'>
      <Typography variant='h4'>
        <div className="clock-font">
          {hours + ':' + minutes + ':' + seconds}
        </div>
      </Typography>
    </Container>
  )
}

export default AlarmSingle
