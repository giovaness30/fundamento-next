import { GetStaticProps } from 'next'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


export default function Home({ user }) {
  return (
      <Container component="main" maxWidth="xs" >
        <Box
          sx={{
            marginTop: 8,
            padding: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#e0dddd',
            borderRadius: 10,
          }}
        >
          <Avatar 
            alt={user.name} 
            src={user.avatar_url}
            sx= {{width: 150, height: 150}} />
          <h1>{user.login}</h1>
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
          <div>
          <Link href={user.html_url} underline="hover"><Chip icon={<GitHubIcon />} label="GitHub"/></Link>
          <Link href={user.twitter_username || "#"} underline="hover"><Chip icon={<TwitterIcon />} label="Twitter" style={{marginLeft: '10px'}}/></Link>
          <Link href={ user.email || "#" } underline="hover"><Chip icon={<AlternateEmailIcon />} label="E-mail" style={{marginLeft: '10px'}}/></Link>
          </div>
          
        </Box>
      </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await fetch('https://api.github.com/users/giovaness30');
  const data = await response.json();

  return {
    props: {
      user: data,
    },
    revalidate: 10

  }


};