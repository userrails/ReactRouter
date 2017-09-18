import React from 'react';
import {Link} from 'react-router-dom';

// export default () => (
//   <div>Home</div>
// );

class Home extends React.Component {
  componentWillMount() {
    console.log('Hi');
    this.props.history.push('/home?pushed=true');     
   }

  render() {
    return <div>
      <p><Link to="/contact">Contact</Link></p>
      <h2>Welcome to home page</h2>
    </div>;
  }
}

export default Home;