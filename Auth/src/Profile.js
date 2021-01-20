import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


const Profile = ({handleLogOut})=>{
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

    const data = [
        {
        "id": 1,
        "name": "test1",
        "age": "11",
        "gender": "male",
        "email": "test1@gmail.com",
        "phoneNo": "9191919191"
        },
        {
        "id": 2,
        "name": "test2",
        "age": "12",
        "gender": "male",
        "email": "test2@gmail.com",
        "phoneNo": "9292929292"
        },
        {
        "id": 3,
        "name": "test3",
        "age": "13",
        "gender": "male",
        "email": "test3@gmail.com",
        "phoneNo": "9393939393"
        },
        ]
return(
   
    <>
     
        
        <h1>Welcome</h1>
        <Button  variant="contained" color="primary" onClick={handleLogOut}>LockOut</Button>
        
        
    
    {  data.map((d,i) =>{
        return <Card className={classes.root}  key={i}> 
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {d.name}
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {d.age}
          </Typography>
          <Typography variant="body2" component="p">
            {d.gender}
            <br />
            {d.email}
            <br/>
            {d.phoneNo}
          </Typography>
        </CardContent>
        
      </Card>
    })
  
    }
    </>

)
}
export default Profile;