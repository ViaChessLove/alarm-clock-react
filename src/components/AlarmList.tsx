import { Container, Typography } from '@material-ui/core';
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
  useEffect(() => {
    if (alarms.length > 0){
      setShow(true);
    } else {
      setShow(false)
    }
  }, [alarms]);
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
        </Container>
      </div>) 
      : undefined}
    </>
    
  )
}

export default AlarmList
