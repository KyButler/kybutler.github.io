import React, {useEffect} from 'react';
import {Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    document.title = "KyButler's Site - Not Found";
  }, []);

  return (
    <Container style={{marginTop: '1em'}}>
      <Container>
        <center>
          <h1>
            404
            <br/>
          </h1>
          <h2>Nothing was found here.</h2>
          <br/>
          <Link to="/">
            <Button renderAs="button">Click here to go back Home!</Button>
          </Link>
        </center>
      </Container>
    </Container>
  );
};

export default NotFound;
