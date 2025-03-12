import { useState } from 'react';
import { useEffect } from 'react';
import { teams } from './lib/mockData';

import Button from '@mui/material/Button';
import { Card, CardContent, Container, Typography } from '@mui/material';
import { CardMedia, Grid } from '@material-ui/core';


function App() {
  
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try{
  //       const resp = await fetch('')
  //       const json = await resp.json()
  //       console.log(json)
  //       setData(json.teams)
  //     } catch (error) {
  //       console.log('There was an error: ', error)
  //     }
  //   };

  //   fetchData();
  // }, [])


  return (
    <Grid container spacing={2}>
      {teams.map((team) => (
        <Card>
          <CardMedia component="img" height={140} image={team.strBadge}></CardMedia>
          <CardContent>
          <Typography variant="p">{team.strTeam}</Typography>
          <Typography color="textSecondary">{team.strStadium}</Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  )
}

export default App
