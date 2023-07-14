import { React, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Players } from '../../Shared/ListOfPlayers'
import { Films } from '../../Shared/ListOfFilms'
import { Link } from 'react-router-dom'
import { Container, Icon, Breadcrumb, Col, Card, Row } from 'react-materialize'
import ModalCase from './ModalCase'
import { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeContext'

export default function Detail() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false);
  const userName = useParams();
  // const player = Players.find(obj => {
  //   return obj.id == userName.id;
  // });
  // let cost = player.cost.toLocaleString();
  const film = Films.find(obj => {
    return obj.id == userName.id;
  });
  let price = film.price.toLocaleString();

  return (
    <Container style={{ backgroundColor: theme.backgroundColor, color: theme.color, boxShadow: `0 0 0 1000px ${theme.backgroundColor}` }}>
      <div class="white" style={{ marginTop: '30px' }}>
        <div class="nav-wrapper">
          <div class="col s12">
            <h6 style={{display: 'inline-block'}}><Link class="red-text" to='/'>Home</Link></h6>
            <h6 style={{display: 'inline-block'}} class="red-text">&nbsp;&nbsp;❯&nbsp;&nbsp;</h6>
            <h6 style={{display: 'inline-block'}}><Link class="red-text" to={`/detail/${film.id}`}>{film.name}</Link></h6>
            <button style={{ float: 'right', zIndex: '0' }} class="btn waves-effect waves-dark red darken-4" name="action">View cart
              <Icon left>shopping_cart</Icon>
            </button>
          </div>
        </div>
      </div>
      <br/>
      <Row >
        <Col s={12} m={6} l={4} style={{ backgroundColor: theme.backgroundColor, color: theme.color, boxShadow: `0 0 0 1000px ${theme.backgroundColor}` }}>
          <Card style={{ textAlign: 'center', backgroundColor: theme.backgroundColor, color: theme.color }}>
            <h5 class='cyan-text'>{film.name}</h5><br/>
            <img src={`../${film.img}`} alt='' style={{ maxWidth: '100%' }} />
            <div>
              <a onClick={() => setIsOpen(true)} class="btn-floating halfway-fab waves-effect waves-dark cyan pulse" style={{ zIndex: '0' }}>
                <Icon>ondemand_video</Icon>
              </a>
              {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
            </div>
          </Card>
        </Col>
        <Col s={12} m={6} l={8}>
          <h5>Released year: {film.year}</h5>
          <h5>Made from: {film.nation}</h5>
          <h5 class="cyan-text">Ticket price: € {price}</h5>
          <div>{film.info}</div><br />
          <button style={{ zIndex: '0' }} class="btn waves-effect waves-dark red darken-4" name="action">Add to cart
            <Icon left>add_shopping_cart</Icon>
          </button>
        </Col>
      </Row>
      <br />
    </Container>

    // <Container>
    //   <div class="white" style={{marginTop: '30px'}}>
    //     <div class="nav-wrapper">
    //       <div class="col s12">
    //         <a class="breadcrumb"><Link class="cyan-text" to='/'>Home</Link></a>
    //         <a class="breadcrumb cyan-text">❯</a>
    //         <a class="breadcrumb"><Link class="cyan-text" to={`/detail/${player.id}`}>{player.name}</Link></a>
    //       </div>
    //     </div>
    //   </div>
    //   <div style={{textAlign: 'center'}}>
    //     <h4>{player.name}</h4><br/>
    //     <div>
    //       <img src={`../${player.img}`} alt='' style={{ maxWidth: '100%' }}/>
    //     </div>
    //     <div>
    //       <h4>{player.club}</h4>
    //       <h5 class="cyan-text">Market value: € {cost}</h5>
    //       <div style={{ textAlign: 'center'}}>{player.info}</div>
    //       <div>
    //         <a onClick={() => setIsOpen(true)} class="btn-floating halfway-fab waves-effect waves-dark">
    //           <Icon>ondemand_video</Icon>
    //         </a>
    //         {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
    //       </div>
    //       <br/>
    //     </div>
    //   </div>
    //   <br/>
    // </Container>
  )
}
