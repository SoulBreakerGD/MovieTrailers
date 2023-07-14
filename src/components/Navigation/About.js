import React, { Component } from 'react'
import { Container } from 'react-materialize'
import { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeContext'

export default function About() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <Container style={{ backgroundColor: theme.backgroundColor, color: theme.color, boxShadow: `0 0 0 1000px ${theme.backgroundColor}` }}>
      <div class="about-us-section">
        <h4 class="red-text" style={{ textAlign: 'center' }}>About Us</h4>
        <p>We are a company that specializes in creating innovative products and solutions to make your life easier. Our team is made up of experienced professionals who are passionate about technology and dedicated to providing excellent customer service.</p>

        <h5 class="cyan-text">Our Mission</h5>
        <p>Our mission is to create products that improve people's lives by simplifying and streamlining their daily tasks. We strive to be leaders in innovation and customer satisfaction.</p>

        <h5 class="cyan-text">Our Vision</h5>
        <p>Our vision is to become the go-to company for innovative solutions that make your life more efficient, enjoyable, and productive. We are committed to staying at the forefront of technology and continuing to exceed our customers' expectations.</p>

        <h5 class="cyan-text">Meet Our Team</h5>
        <ul>
          <li><strong>John Doe</strong> - CEO</li>
          <li><strong>Jane Smith</strong> - CTO</li>
          <li><strong>Bob Johnson</strong> - Head of Product Development</li>
          <li><strong>Sarah Lee</strong> - Marketing Director</li>
        </ul>
      </div>
    </Container>
  )
}
