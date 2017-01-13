// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Input } from 'semantic-ui-react';
import styles from './Home.css';


export default class Home extends Component {

  render() {
    return (
      <div>
        <Input placeholder='Search...' />
        <h1>Yay</h1>
        <Button primary>Primary</Button>
      </div>
    );
  }
}
