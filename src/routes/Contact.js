import React from 'react';

class Contact extends React.Component {
  componentWillMount() {
    console.log('Hi');
    this.props.history.push('/Contact?pushed=true');     
   }

  render() {
    return <div>This is my contact information:</div>;
  }
}

export default Contact;