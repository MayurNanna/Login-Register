import React from 'react';
import { Table } from 'react-bootstrap';
import './Style.css';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.dob}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
