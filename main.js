import express from 'express';
import moviesRoute from './route/movie-route.js';

const app = express();
const port = 6969;

app.get('/',(req,res) => {
    res.json({msg : "hello prashanth"});
});

app.use('/movies',moviesRoute);
app.listen( port, () => {
    console.log('server is running in port 6969');
    
});