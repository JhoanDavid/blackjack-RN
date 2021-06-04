import React from 'react'
import Profile from './Profile.view'

class ProfileViewController extends React.Component { 
moreMoney(){
    const {amount} = this.state;
    this.setState({
      amount : (amount + 5000)
    });
  }


  render() {
    return (
        <Profile
        moreMoney={this.moreMoney}
        />
    )
}
}

export default ProfileViewController