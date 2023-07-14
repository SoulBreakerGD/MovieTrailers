import React, { Component } from 'react'
import { Container } from 'react-materialize'

export default class Footer extends Component {
  render() {
    return (
      <div class="footer-copyright white-text red darken-4" style={{position: "fixed", width: "100%", bottom: "0", textAlign: "center", justifyContent: "center", zIndex: "1"}}>
          © 2014 Copyright
      </div>
    )
  }
}
