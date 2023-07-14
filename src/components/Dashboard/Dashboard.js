import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Icon, Breadcrumb, Table } from 'react-materialize'

export default function Dashboard() {
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

    return (
        <Container>
            <h4 class="red-text" style={{ textAlign: 'center' }}>Dashboard</h4>
            <Table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Info</th>
                        <th>Trailer</th>
                    </tr>
                </thead>
                {APIData.map((film) => (
                    <tr>
                        <td><img src={film.img} style={{ maxWidth: '100%' }} /></td>
                        <td>{film.name}</td>
                        <td>{film.info}</td>
                        <td><iframe width="100%" height="150px" src={film.clip} title={film.title} frameborder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></td>
                        <Link to={`/edit/${film.id}`}>
                            <p><button class="btn waves-effect waves-dark red darken-4"><Icon>edit</Icon></button></p>
                        </Link>

                        <Link to={`/delete/${film.id}`}>
                            <p><button class="btn waves-effect waves-dark red darken-4"><Icon>delete</Icon></button></p>
                        </Link>
                    </tr>
                ))}
            </Table>
            <Link to={`/add`}>
                <p><button class="btn waves-effect waves-dark red darken-4">Add Film</button></p>
            </Link>
            <br />
        </Container>
    )
}
