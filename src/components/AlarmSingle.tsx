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
  }, [alarm.hours, alarm.minutes, alarm.seconds])
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
