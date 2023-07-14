import React, { Component } from 'react'
import { Container, Icon, TextInput, Textarea, Select } from 'react-materialize'
import { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeContext'
const handleSubmit = (e) => {
  e.preventDefault();
}

export default function Contact() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <Container style={{ backgroundColor: theme.backgroundColor, color: theme.color, boxShadow: `0 0 0 1000px ${theme.backgroundColor}` }}>
      <div style={{height: '10vh'}}></div>
      <h4 class="red-text" style={{ textAlign: 'center' }}>Contact Us</h4>
      <form onSubmit={handleSubmit}>
        <TextInput style={{ color: theme.color}} id="TextInput-38" label="Your Name" />
        <TextInput style={{ color: theme.color}} id="TextInput-39" label="Your Phone" />
        <TextInput style={{ color: theme.color}} email id="TextInput-41" label="Email" vvalidate />
        <Select id="Select-46" multiple={false} onChange={function noRefCheck() { }} value="">
          <option disabled value="">
            Choose your favorite nation
          </option>
          <option value="1">
            England
          </option>
          <option value="2">
            France
          </option>
          <option value="3">
            Spain
          </option>
        </Select>
        <Textarea style={{ color: theme.color}} icon={<Icon>mode_edit</Icon>} id="Textarea-28" label="Your content" />
        <button class="btn waves-effect waves-dark red darken-4" type="submit" name="action">Submit
          <Icon right>keyboard_arrow_right</Icon>
        </button>
      </form>
    </Container>
  )
}
