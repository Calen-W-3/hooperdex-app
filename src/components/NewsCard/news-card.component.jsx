import { Container, Box, Card, Typography, CardContent, CardMedia, Button, useMediaQuery, useTheme } from '@mui/material';
import Logo from '../../assets/hooperdex_logo.png'
import TeamsMap from '../TeamsMap/TeamsMap.component';



const NewsCard = ({ articleTitle, articleDate, articleLink, articleImg }) => {

  // For displaying the time in US format (12-hour with AM/PM)
  const formatTimeUS = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    });
};

const theme = useTheme();
const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

return (
    <Container maxWidth="lg" sx={{ marginTop: '10px' }}>
      {isMobileScreen ? (
        //Mobile Screen Layout
        <Card sx={{
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 6,
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: 12,
          }
        }}>
          <CardMedia
            sx={{ width: '100%' }}
          component="img"
          image={`${articleImg}`}
          alt="Article image"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant='h5'>{articleTitle}</Typography>
            <Typography>Published: {formatTimeUS(articleDate)}</Typography>
            <Button target="_blank" href={`${articleLink}`}>Read Article</Button>
          </CardContent>
        </Box>
      </Card>
    ) : (
        //Desktop View Layout
        <Card sx={{
          display: 'flex',
          boxShadow: 6,
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: 12,
          }
        }}>
          <CardMedia
            sx={{ width: 300 }}
            component="img"
            image={`${articleImg}`}
            alt="Article image"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant='h4'>{articleTitle}</Typography>
              <Typography>Published: {formatTimeUS(articleDate)}</Typography>
              <Button target="_blank" href={`${articleLink}`}>Read Article</Button>
            </CardContent>
          </Box>
        </Card>
      )}
    </Container>
  )
}

export default NewsCard;