import React from 'react'
import { CssBaseline, AppBar, Toolbar, Typography, Container, Grid, Button } from '@material-ui/core';
import {Alarm} from '@material-ui/icons'
import useStyles from '../styles';

const Header = () => {
        const classes = useStyles();
        return (
                <>
                        <AppBar position='fixed'>
                                <Toolbar className={classes.toolBar}>
                                        <Grid container justify='space-between'>
                                                <Alarm fontSize='large'/>
                                                <Typography variant='h4'align='right'>
                                                        Alarm Clock App
                                                </Typography>
                                        </Grid>
                                </Toolbar>
                        </AppBar>
                </>
        )
}

export default Header