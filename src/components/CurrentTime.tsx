import React, { useEffect, useMemo, useState } from 'react'
import { Container, Typography } from '@material-ui/core';
import useStyles from '../styles';
import './font.css'

const CurrentTime = () => {
        const [currentTime, setCurrentTime] = useState<string>(Date.now().toString());
        useEffect(() => {
                const setTime = setInterval(() => {
                        setCurrentTime(new Date().toLocaleTimeString());
                }, 1000);
        }, [currentTime]);
        
        const classes = useStyles();

        return (
                <main>
                        <Container className={classes.content} maxWidth='lg'>
                                <Typography variant='h1' align='center' > 
                                        <div className='clock-font'>
                                                {currentTime}
                                        </div>
                                </Typography>
                                <Typography variant='h3' color='textSecondary' align='center'>
                                        Current time
                                </Typography>
                        </Container>
                </main>
        )
}

export default CurrentTime
