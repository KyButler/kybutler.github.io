import React, { useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';

const Changelog = () => {
  useEffect(() => {
    document.title = `KyButler's Site - Changelog`;
    window.gtag('config', 'G-H3Q4RMNZNV', { 'page_title': document.title, page_path: window.location.pathname + window.location.search });
  });

  return (
    <>
      <Container style={{ marginBottom: '1em' }}>
        <Card bg='light'>
          <Card.Header>
            <Card.Title>
              11/13/2020
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>Removed loading icon on Twitch page, it was causing jank movement on player load</li>
              <li>Added The KyButler Collective on the home screen</li>
            </ul>
          </Card.Body>
        </Card>
      </Container>

      <Container style={{ marginBottom: '1em' }}>
        <Card bg='light'>
          <Card.Header>
            <Card.Title>
              11/11/2020
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>Added analytics</li>
            </ul>
          </Card.Body>
        </Card>
      </Container>

      <Container style={{ marginBottom: '1em' }}>
        <Card bg='light'>
          <Card.Header>
            <Card.Title>
              11/9/2020
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>Added Navbar dropdown for small screens</li>
              <li>Added Loading Spinner</li>
              <li>Added scuffed Trello (need to fix 100% height)</li>
              <li>Changed background color to pink</li>
              <li>Added Discord Page</li>
              <li>Cleaned up formatting a bit on Home</li>
              <li>Added scuffed Discord invite link</li>
              <li>Added WIP Warning</li>
              <li>Added badly formatted Twitch embed</li>
              <li>Changed routing method to hashrouter</li>
              <li>Added wip text to main '/' route</li>
              <li>Added Changelog Page</li>
              <li>Added Twitch Page</li>
              <li>'First Commit'</li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Changelog;