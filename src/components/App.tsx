import {Component, Fragment} from 'react';
import Exercises from './Exercises';
import {Header, Footer} from './Layouts';

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}
