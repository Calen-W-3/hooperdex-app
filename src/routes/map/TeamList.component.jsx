import { useState } from 'react';
import { useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia, Container, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid2';
import TeamCard from '../../components/Card/TeamCard.component';
import TeamsMap from '../../components/TeamsMap/TeamsMap.component';
import { stadiumLocations } from '../../lib/stadiumLocations';


function TeamList() {
    const [teams, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try{
          const resp = await fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=nba')
          const json = await resp.json()
          const data = json.teams

          const mergedData = data.map((team => {
            const stadium = stadiumLocations.find(s => s.team === team.strTeam)

            return {
              ...team,
              coordinates: stadium ? stadium.coordinates : null,
              arena: stadium ? stadium.arena : null,
              city: stadium ? stadium.city : null,
            };
          }));

          setTeams(mergedData);
          setIsLoading(false);

          console.log(mergedData)
          
        } catch (error) {
          console.log('There was an error: ', error)
        }
      };
  
      fetchData();
    }, [])

    const WesternTeams = teams.filter((team) => team.strDescriptionEN.includes("Western"))
    const EasternTeams = teams.filter((team) => team.strDescriptionEN.includes("Eastern"))
    // console.log(WesternTeams)
    // console.log(EasternTeams)
    

    const missingTeam = ["Detroit Pistons"];

    missingTeam.forEach(teamName => {
      const team = teams.find(team => team.strTeam === teamName );
      if (team) {
        EasternTeams.splice(6, 0, team)
      }
    })

    if(!teams){
      return <Typography>Loading...</Typography>
    }
    
  return(
    <>
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress sx={{color: '#043C6B'}} />
        </Box>
      ) : (
        <>
            <Container sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' }, // Stack on small screens, row on medium and up
              alignItems: 'flex-start',
              justifyContent: 'space-evenly',
              mt: 4,
              gap: 4 // Add spacing between columns when stacked
            }}>
            <Grid container spacing={4} sx={{}}>
              <Grid item>
                <Typography variant='h5' sx={{ mb: 2 }}>Western Conference</Typography>
                {WesternTeams.map((team) => (
                  <TeamCard team={team} />
                ))}
              </Grid>
            </Grid>

            <Grid container spacing={4} sx={{}}>
              <Grid item>
                <Typography variant='h5' sx={{ mb: 2 }}>Eastern Conference</Typography>
                {EasternTeams.map((team) => (
                  <TeamCard team={team} />
                ))}
              </Grid>
            </Grid>
          </Container>
          
          <TeamsMap teams={teams} />
          
        </>
      )}
    </>
  )
}

export default TeamList