import React from 'react';
import {AppBar, Typography, IconButton, Container, Toolbar, Box, Paper, Grid} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/es/Button/Button";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    overlay: {
       position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,.3)"
    },
    mainFeaturesPostContent: {
        position: "relative",
        padding: theme.spacing(9)
    }
}))


function App() {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton edge="start"
                                    color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>Web Dev Blog</Typography>
                        <Box mr={3}>
                            <Button color="inherit" variant="outlined">Log in</Button>
                        </Box>
                        <Button color="secondary" variant="contained">Sign Up</Button>
                    </Toolbar>
                </Container>
            </AppBar>

            <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography
                                    component="h1"
                                    variant="h3"
                                    color="inherit"
                                    gutterBottom
                                    >
                                        Web Dev Blog Kama
                                    </Typography>
                                    <Typography

                                        variant="h5"
                                        color="inherit"
                                        paragraph
                                    >
                                        Lor 25 words agnha  ahah ah aojnapori ghaogj
                                         ahohap0hi phiagporhn ahpgjiahjah ahjia[-jh[ const ah
                                        ahiojaohjn aoihja ijaahi aija aijoiajoijija ahijphijh
                                    </Typography>
                                    <Button variant="contained" color="secondary">
                                        Lear more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </main>

        </>
    );
}

export default App;
