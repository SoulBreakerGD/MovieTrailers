import React, { Component } from 'react'
import { Col, Container, Row } from 'react-materialize'
import { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeContext'
import { NewsList } from '../../Shared/ListOfNews'

export default function News() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <Container style={{ backgroundColor: theme.backgroundColor, color: theme.color, boxShadow: `0 0 0 1000px ${theme.backgroundColor}` }}>
      <div style={{height: '10vh'}}></div>
      <h4 class="red-text" style={{ textAlign: 'center' }}>Breaking News</h4>
      <Row>
        {NewsList.map((news) => (
          <Col key={news.id} s={12} m={6} l={4}>
            <iframe style={{ paddingTop: '20px' }} width="100%" src={news.video} frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <h5 class="cyan-text">${news.title}</h5>
            <p>${news.detail}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
