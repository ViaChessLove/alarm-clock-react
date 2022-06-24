import React, { useEffect, useMemo, useState } from 'react'
import { Button, Container, Typography } from '@material-ui/core';
import useStyles from '../styles';
import './font.css'

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<any>();
  useEffect(() => {
    const setTime = setInterval(() => {
      setCurrentTime(new Date().toLocaleString('en-US', {hour12: false, hour: 'numeric',  minute: 'numeric', second: 'numeric'}));
    }, 1000);
                
  }, [currentTime]);
        
  const classes = useStyles();

  return (
    <main>
      <Container className={classes.content} maxWidth="lg">
        <Typography variant="h1" align="center" > 
          <div className="clock-font">
            {currentTime}
          </div>
        </Typography>
        <Typography variant="h3" color="textSecondary" align="center">
                                        Current time
        </Typography> 
      </Container>
    </main>
  )
}

export default CurrentTime;
