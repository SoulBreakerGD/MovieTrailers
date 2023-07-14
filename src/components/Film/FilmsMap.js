import { React, useEffect, useState } from 'react'
// import { Films } from '../Shared/ListOfFilms'
import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'
import { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeContext'

export default function FilmsMap() {
    const [APIData, setAPIData] = useState([]);
    const baseURL = `https://64b05cf2c60b8f941af5a00a.mockapi.io/Films`;
    useEffect(() => {
        fetch(baseURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setAPIData(data);
            })
            .catch((error) => console.log(error.message));
    }, []);

    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <Container style={{ backgroundColor: theme.backgroundColor, color: theme.color, boxShadow: `0 0 0 1000px ${theme.backgroundColor}` }}>
            <br/>
            <Row style={{ textAlign: 'center' }}>
                {APIData.map((film) => (
                    <Col key={film.id} s={6} m={4} l={3}>
                        <Card style={{ backgroundColor: theme.backgroundColor}}>
                            <img src={film.img} style={{ maxWidth: '100%' }} />
                            <h6 class='cyan-text'>{film.name}</h6>
                            <h6>{film.year}</h6>
                            {/* <h7>{film.nation}</h7> */}
                            <Link to={`detail/${film.id}`}>
                                <p><button class="btn waves-effect waves-dark red darken-4">Detail</button></p>
                            </Link>
                        </Card>
                    </Col>))}
            </Row>
            <br />
        </Container>
    )
}
