import { Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import useStyles from '../styles';
import AlarmSingle from './AlarmSingle';

interface AlarmProps {
  isShow?: boolean;
}

const AlarmList:React.FC<AlarmProps> = ({isShow}) => {
  const classes = useStyles();
  const [show, setShow] = useState<boolean>(false);
  const array: any[] = [1];
  useEffect(() => {
    if (array.length > 0){
      setShow(true);
    } else {
      setShow(false)
    }
  }, [array]);
  return (
    <>
    {show? (
      <div className={classes.contentBelow}>
        <Container className = {classes.content} maxWidth = 'lg'>
          <Typography variant='h3' align='center'>
            Your alarms
          </Typography>
          <Typography variant='h3' align='center'>
            {array.map((element) => (
              <AlarmSingle>
                  {element}
              </AlarmSingle>
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
