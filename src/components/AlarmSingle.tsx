import React from 'react'
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

  const classes = useStyles();
  return (
    <Container className={classes.alarm} maxWidth='sm'>
      <Typography variant='h4'>
        <div className="clock-font">
          {alarm.hours + ':' + alarm.minutes + ':' + alarm.seconds}
        </div>
      </Typography>
    </Container>
  )
}

export default AlarmSingle
