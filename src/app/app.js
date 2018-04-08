import React, { Component } from 'react';
import axios from 'axios';

import styles from './app.css';

const DATA_URL = 'http://localhost:3000/getData';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios
      .get(DATA_URL)
      .then(res => {
        this.setState({ data: res.data });
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <h2 className={styles.red}>React 222</h2>
    );
  }
}

export default App;
