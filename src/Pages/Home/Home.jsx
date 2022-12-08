import React from 'react';
import { HomeThumb, Button, Link, Title } from './Home.styled';
import { useSelector } from 'react-redux';
import { useUserGetQuery } from 'redux/auth/authApi';


export default function Home() {
  const { data } = useUserGetQuery();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <HomeThumb>
      {!isLoggedIn ? (
        <>
          <Title>
            Welcome to the phonebook{' '}
            <span role="img" aria-label="Greeting icon">
              💁‍♀️
            </span>
          </Title>
          <Button>
            <Link to="/login" variant="body2">
              Start
            </Link>
          </Button>
        </>
      ) : (
        <>
          <Title>
            {data && data.name}, have a good day{' '}
            <span role="img" aria-label="Greeting icon">
              💁‍♀️
            </span>
          </Title>
          <Button>
            <Link to="/contacts" variant="body2">
              Back
            </Link>
          </Button>
        </>
      )}
    </HomeThumb>
  );
};
