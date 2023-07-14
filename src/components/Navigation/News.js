import React, { Component } from 'react'
import { Col, Container, Row } from 'react-materialize'
import { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeContext'

export default function News() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <Container style={{ backgroundColor: theme.backgroundColor, color: theme.color, boxShadow: `0 0 0 1000px ${theme.backgroundColor}` }}>
      <h4 class="red-text" style={{ textAlign: 'center' }}>Breaking News</h4>
      <Row>
        <Col s={12} m={6} l={4}>
          <iframe style={{ paddingTop: '20px' }} width="100%" src={'https://www.youtube.com/embed/HANw_h3x4VM'} frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </Col>
        <Col s={12} m={6} l={8}>
          <h5 class="cyan-text">"Star Wars: Episode IV" Celebrates 45th Anniversary with Re-Release</h5>
          <p>As one of the most iconic movies in cinematic history, "Star Wars: Episode IV" celebrated its 45th anniversary by being re-released in select theaters worldwide. Fans of the epic space franchise were thrilled to relive the adventures of Luke Skywalker, Princess Leia, and Han Solo on the big screen once again.</p>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={6} l={4}>
          <iframe style={{ paddingTop: '20px' }} width="100%" src={'https://www.youtube.com/embed/4vQLMu-dGDY'} frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </Col>
        <Col s={12} m={6} l={8}>
          <h5 class="cyan-text">"The Matrix" Franchise Set for Reboot with New Director</h5>
          <p>Warner Bros. Pictures announced that "The Matrix" franchise will receive a reboot directed by Lana Wachowski, one of the original directors of the trilogy. The new movie is set to explore new ideas and themes within the universe of the sci-fi classic.</p>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={6} l={4}>
          <iframe style={{ paddingTop: '20px' }} width="100%" src={'https://www.youtube.com/embed/441Vy8BBnIc'} frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </Col>
        <Col s={12} m={6} l={8}>
          <h5 class="cyan-text">"Forrest Gump" Soundtrack Named Top Movie Soundtrack of All Time</h5>
          <p>A recent poll conducted by Rolling Stone magazine named the soundtrack of "Forrest Gump" the greatest movie soundtrack of all time. The album features classic songs from the 1960s and 1970s, including hits from Elvis Presley, The Doors, and Bob Dylan, and perfectly captures the spirit of the film's heartwarming story.</p>
        </Col>
      </Row>
      <br />
    </Container>
  )
}
