import React from 'react'
import { Container, Typography } from '@material-ui/core';
import './font.css'
import useStyles from '../styles';

interface AlarmSingleProps {
  children?: string | number;
}

const AlarmSingle: React.FC<AlarmSingleProps> = ({children}) => {

  const classes = useStyles();
  return (
    <Container className={classes.alarm} maxWidth='sm'>
      <Typography variant='h4'>
        <div className="clock-font">
          {children}
        </div>
      </Typography>
    </Container>
  )
}

export default AlarmSingle
