import express from 'express';

const app = express();
const port = 6969;

app.get('/',(req,res) => {
    res.json({msg : "hello prashanth"});
});

app.listen( port, () => {
    console.log('server is running in port 6969');
    
});