import React from 'react';
import { CssBaseline, Typography, AppBar, Toolbar} from '@material-ui/core';
import useStyles from './styles';
import Header from './components/Header';
import CurrentTime from './components/CurrentTime';
import Footer from './components/Footer';

const App = () => {
  
  const classes = useStyles();
  return (
    <div className = {classes.appWrapper}>
      <CssBaseline/> 
      <Header/>
      <CurrentTime/>
      {/**Set alarm + alarm list + routing with timer + stopwatch */}
      <Footer/>
    </div>
  );
}

export default App;
