import React from 'react';
import { CssBaseline} from '@material-ui/core';
import useStyles from './styles';
import Header from './components/Header';
import CurrentTime from './components/CurrentTime';
import Footer from './components/Footer';
import SetAlarm from './components/SetAlarm';
import AlarmList from './components/AlarmList';

const App = () => {
  
  const classes = useStyles();
  return (
    <div className = {classes.appWrapper}>
      <CssBaseline/> 
      <Header/>
      <CurrentTime/>
      <SetAlarm/>
      <AlarmList/>
      {/**Set alarm + alarm list + routing with timer + stopwatch */}
      <Footer/>
    </div>
  );
  
}
export default App;
