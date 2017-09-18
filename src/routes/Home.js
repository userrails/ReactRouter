import React from 'react';

class Home extends React.Component {
  componentWillMount() {
    console.log('Hi');
    this.props.history.push('/home?pushed=true');     
   }

  render() {
    return <div>
      <h2>Welcome to home page</h2>
    </div>;
  }
}

export default Home;