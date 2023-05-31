import React, { useState, useEffect } from 'react';
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
    let search_term_lower = search_term.toLowerCase();
    let new_data = originalData.filter((event) =>
      (event.date && event.date.includes(search_term)) ||
      (event.location && event.location.toLowerCase().includes(search_term_lower)) ||
      (event.title && event.title.toLowerCase().includes(search_term_lower)) ||
      // if there is a category property in the fetched data
      (event.category && event.category.toLowerCase().includes(search_term_lower)) ||
      // assuming the cost is a number, convert it to string before calling includes
      (event.cost && event.cost.toString().includes(search_term))
    );
  
    setSearch(search_term);
    setData(new_data);
  
  };

  const getAllEvents = async () => {
    const res = await fetch("http://localhost:5000/events/events");

    const data = await res.json()

    if(data.success){
      setData(data.events);
      setOriginalData(data.events); // update original data
    }
  }


  useEffect(() => {
    getAllEvents();
  }, [])

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
              placeholder="Search"
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>Date</td>
              <td>Adress</td>
              <td>Name</td>
              <td>Category</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date.split('T')[0]}</td>
                <td>{item.location}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.cost}</td>

              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Home;
