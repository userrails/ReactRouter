import React from 'react';

// export default () => (
//   <div>Home</div>
// );

class Home extends React.Component {
  componentWillMount() {
    console.log('Hi');
    this.props.history.push('/home?pushed=true');     
   }

  render() {
    return <div>hi</div>;
  }
}

export default Home;