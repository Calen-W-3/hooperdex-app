import { Container, Box, Card, Typography, CardContent, CardMedia, Button, Divider } from '@mui/material';
import Logo from '../../assets/hooperdex_logo.png'
import React, { useEffect, useState } from 'react'
import NewsCard from '../../components/NewsCard/news-card.component';

const NewsFeed = () => {

  const [newsArticle, setNewsArticle] = useState([]);
  

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const resp = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.cbssports.com/rss/headlines/nba/')
        const data = await resp.json();
           
        setNewsArticle(data.items)
        
      } catch (error) {
        console.log("error: ", error)
      }
    }

    fetchNews();
  }, [])

  useEffect(() => {
    console.log("Updated newsArticle:", newsArticle);
  }, [newsArticle]);

return (
  <Container maxWidth="lg" sx={{marginTop: '24px'}}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant='h3'>League News</Typography>
      <Typography variant='h6'>Checkout the Latest NBA News</Typography>
      <Divider sx={{mt: 3}}/>
    </Box>
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
    {newsArticle.map((article, i) => (
      <NewsCard 
      key={i} 
      articleTitle={article.title}
      articleDate={article.pubDate}
      articleImg={article.enclosure.link}
      articleLink={article.link}/>
    ))}
    </Box>
  </Container>
  )
}

export default NewsFeed;