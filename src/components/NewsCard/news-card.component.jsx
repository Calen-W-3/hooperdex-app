import { Container, Box, Card, Typography, CardContent, CardMedia, Button } from '@mui/material';
import Logo from '../../assets/hooperdex_logo.png'


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

return (
  <Container maxWidth="lg" sx={{marginTop: '10px'}}>
    <Card sx={{ 
    display: 'flex',
    boxShadow: 6,
    transition: 'box-shadow 0.3s ease-in-out', 
    '&:hover': {
      boxShadow: 12,
    }
  }}>
      <CardMedia
      sx={{width: 300}}
        component="img"
        image={`${articleImg}`}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant='h4'>{articleTitle}</Typography>
          <Typography>Published: {formatTimeUS(articleDate)}</Typography>
          <Button target="_blank" href={`${articleLink}`}>Read Article</Button>
        </CardContent>
      </Box>
    </Card>
  </Container>
  )
}

export default NewsCard;