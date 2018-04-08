import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Section from '../components/section';

import * as actions from '../store/actions/section';

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
    let renderSections = null;
    if (this.props.sections > 0) {
      const sections = [];
      for (let i = 0, l = this.props.sections; i < l; i++) {
        sections.push(<Section key={i} />);
      }

      renderSections = sections.map((section) => {
        return section;
      });
    }
    return (
      <div>
        <h2 className={styles.red}>React</h2>
        <button onClick={this.props.onAddSection}>Add section</button>
        {renderSections}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sections: state.count
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddSection: () => dispatch(actions.addSection())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
