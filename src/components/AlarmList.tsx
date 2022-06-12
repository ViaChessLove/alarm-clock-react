import { Container, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from '../styles';

interface AlarmProps {
  isShow?: boolean;
}

const AlarmList:React.FC<AlarmProps> = ({isShow}) => {
  const classes = useStyles();
  const [show, setShow] = useState<boolean>(false);
  const array: any[] = [1, 2, 3, 4, 5];
  return (
    <>
    {isShow? (
      <div className={classes.contentBelow}>
        <Container className = {classes.content} maxWidth = 'lg'>
          <Typography variant='h3' align='center'>
            Your alarms
          </Typography>
          <Typography variant='h3' align='center'>
            {isShow?
            array.map((element) => (
              <Typography >
                {element}
              </Typography>
                ))
            : 
            undefined}
          </Typography>
        </Container>
      </div>) 
      : undefined}
    </>
    
  )
}

export default AlarmList
