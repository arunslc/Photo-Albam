import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import photoCamera from '@material-ui/core';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import useStyles from './styles';

const cards =[1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
    const classes = useStyles();
    return ( 
        <>
           <CssBaseline />
           <AppBar position="relative">
               <Toolbar>
                   <photoCamera className={classes.icon} />
                   <Typography variant="h6">
                       Photo Albam
                   </Typography>
               </Toolbar>
           </AppBar>
           <main>
               <div>
                   <Container maxWidth="sm">
                       <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                           Photo Album
                       </Typography>
                       <Typography variant="h5" align="center" color="textSecondary" paragraph>
                          hello everyone This is a photo album and I'm trying to make this sentence as long as posssible so we can see how does it look like on the screen
                       </Typography>
                       <div className={classes.button}>
                           <Grid container spacing={2} justify="center">
                               <Grid item>
                               <Button variant="contained" color='primary'>
                                  See my photos
                               </Button>
                               </Grid> 
                               <Grid item>
                               <Button variant="outlined" color='primary'>
                                  Secondary action
                               </Button>
                               </Grid>   
                           </Grid>
                       </div>
                   </Container>
               </div>
               <container className={classes.cardGrid} maxWidth="md">
                  <Grid container spacing={4}>
                  {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <card className={classes.card}>
                         <CardMedia
                               className={classes.cardMedia}
                               image="https://www.industrialempathy.com/img/remote/ZiClJf-1280w.avif"
                               title="Image title"
                               />
                               <CardContent className={classes.cardcontent}>
                               <Typography gutterBottom variant="h5">
                                  Heading
                               </Typography>
                               <Typography>
                                   This is a media card. You can use this section to describe the content.
                               </Typography>
                               </CardContent>
                               <CardActions>
                                   <Button size="small" color="primary">View</Button>
                                   <Button size="small" color="primary">Size</Button>
                               </CardActions>    
                     </card>
                    </Grid>
                  ))}
                  </Grid>

               </container>
           </main>
           <footer className={classes.footer}>
                 <Typography variant="h6" align= "center" gutterBottom>
                    Footer
                 </Typography>
                 <Typography variant="subtitle1" align= "center" color="textSecondary">
                     Somthing here to give the footer a purpose!
                 </Typography>
           </footer>
        </>
    );
}

export default App;