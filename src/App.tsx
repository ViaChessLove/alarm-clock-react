import React, { useState } from 'react';
import { CssBaseline} from '@material-ui/core';
import useStyles from './styles';
import Header from './components/Header';
import CurrentTime from './components/CurrentTime';
import Footer from './components/Footer';
import SetAlarm from './components/SetAlarm';
import AlarmList from './components/AlarmList';
import { Time } from './model';
import AlarmSingle from './components/AlarmSingle';
import { GlobalStyles } from './GlobalStyles.style';
import AlarmDrawer from './components/AlarmDrawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Alarm from './pages/Alarm';
import Stopwatch from './pages/Stopwatch';
import Timer from './pages/Timer';

const App = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [alarms, setAlarms] = useState<Time[]>([]);
  /*
  var test: Time = {id: Math.random(), hours:1, minutes:1, seconds:1};
  const [alarm, setAlarm] = useState<Time>(test);
  */
  const classes = useStyles();

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    
    
    if (hours >0 || minutes > 0 || seconds > 0){
      setAlarms([...alarms, {id: Math.random(), hours:hours, minutes:minutes, seconds:seconds}]);
    }
  }
  
  return (
    <BrowserRouter>
      <div className = {classes.appWrapper}>
        <CssBaseline/> 
        <GlobalStyles/>
        <Header/>
        <Routes>
          <Route index  element={<Alarm/>}/>
          <Route path="/stopwatch" element={<Stopwatch/>}/>
          <Route path="/timer" element={<Timer/>}/>
        </Routes>
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
        <AlarmList alarms={alarms} setAlarms={setAlarms}/>
        <AlarmDrawer/>
        {/**Set alarm + alarm list + routing with timer + stopwatch */}
        <Footer/>
      </div>
    </BrowserRouter>
  );
  
}
export default App;
