import React, { useState } from 'react';
import { CssBaseline} from '@material-ui/core';
import useStyles from './styles';
import Header from './components/Header';
import CurrentTime from './components/CurrentTime';
import Footer from './components/Footer';
import SetAlarm from './components/SetAlarm';
import AlarmList from './components/AlarmList';

const App = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const classes = useStyles();

  const handleAdd = (e: React.TouchEvent) => {
    console.log('you touched')
  }

  return (
    <div className = {classes.appWrapper}>
      <CssBaseline/> 
      <Header/>
      <CurrentTime/>
      <SetAlarm 
        hours={hours} 
        setHours={setHours}
        minutes={minutes}
        setMinutes={setMinutes}
        seconds={seconds}
        setSeconds={setSeconds}
        handleAdd={handleAdd}
      />
      <AlarmList/>
      {/**Set alarm + alarm list + routing with timer + stopwatch */}
      <Footer/>
    </div>
  );
  
}
export default App;
