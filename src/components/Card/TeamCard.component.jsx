import { Card, CardContent, CardMedia, Typography, Link, Box} from '@mui/material';
import Grid from '@mui/material/Grid';


const TeamCard = ({ team }) => {

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', mb: 2}}>
      <CardMedia
        component="img"
        sx={{ width: 80, height: 80, objectFit: 'contain', ml: 2 }}
        image={team.strBadge}
      />

      <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h6'>{team.strTeam}</Typography>

        <Grid container spacing={1} sx={{ mt: 1 }}>
          <Grid item>
            <Link style={{ textDecoration: "none" }} target="_blank" href={`https://www.espn.com/nba/team/schedule/_/name/${team.strTeamShort.toLowerCase()}/${team.strTeam.toLowerCase().replace(/\s+/g, "-")}`}>
              Schedule
            </Link>
          </Grid>
          <Grid item>|</Grid>
          <Grid item>
            <Link style={{ textDecoration: "none" }} target="_blank" href={`https://${team.strYoutube}/videos`}>
              Highlights
            </Link>
          </Grid>
          <Grid item>|</Grid>
          <Grid item>
            <Link style={{ textDecoration: "none" }} target="_blank" href={`https://www.espn.com/nba/team/stats/_/name/${team.strTeamShort.toLowerCase()}/${team.strTeam.replace(/\s+/g, "-")}`}>Statistics</Link>
          </Grid>

        </Grid>
      </Box>
    </Card>
  )
}

export default TeamCard