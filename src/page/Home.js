import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const loggedIn = JSON.parse(localStorage.getItem("token"));

  const [search, setSearch] = useState('');
  const [originalData, setOriginalData] = useState([
    {
      id: 1,
      date: '2023-04-06',
      address: 'Malmö',
      name: 'Summerburst',
      category: 'Rave',
    },
    {
      id: 2,
      date: '2023-08-11',
      address: 'Stockholm',
      name: 'Kärleksklubben',
      category: 'R&B',
    },
    {
      id: 3,
      date: '2023-03-07',
      address: 'Malmö',
      name: 'ROll ouy',
      category: 'Rave',
    },
  ]);
  const [data, setData] = useState(originalData);

  const onSearch = (search_term) => {
    let new_data = originalData.filter((x) =>
      x.date.includes(search_term) ||
        x.address.toLowerCase().includes(search_term) ||
        x.name.toLowerCase().includes(search_term) ||
        x.category.toLowerCase().includes(search_term)
    );

    setSearch(search_term);
    setData(new_data);
  };

  return (
    <div>
      {loggedIn ? (
        <h1>Welcome to Eventhub, {loggedIn.username}!</h1>
      ) : (
        <h1>Log in/Register an account.</h1>
      )}

      <Container>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search contacts"
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Datum</th>
              <th>Adress</th>
              <th>Namn</th>
              <th>Kategori</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.address}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Home;
