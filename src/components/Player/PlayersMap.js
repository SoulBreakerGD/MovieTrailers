import React from 'react'
import { Players } from '../../Shared/ListOfPlayers'
import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'

export default function PlayersMap() {
  return (
    <Container>
      <Row>
        {Players.map((player) => (
        <Col key={player.id} s={12} m={6} l={4}>
          <Card>
            <img src={player.img} style={{ maxWidth: '100%' }}/>
            <h5>{player.name}</h5>
            <p>{player.club}</p><br/>
            <Link to={`detail/${player.id}`}>
              <p><button class="btn waves-effect waves-dark teal lighten-1">Detail</button></p>
            </Link>
          </Card>
        </Col>))}
      </Row>
    </Container>
    // <div className='container'>
    //   {Players.map((player) => (
    //     <div className='column' key={player.id}>
    //       <div className='card'>
    //         <img src={player.img} />
    //         <h3>{player.name}</h3>
    //         <p className='title'>{player.club}</p>
    //         <Link to={`detail/${player.id}`}> 
    //             <p><button className='detail-button'>Detail</button></p>
    //         </Link>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  )
}
