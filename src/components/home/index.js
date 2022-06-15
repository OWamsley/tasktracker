import React, { Component } from 'react';
import LogoutButton from '../logoutbutton';
import Profile from '../profile/index';
import { useAuth0, withAuth0 } from "@auth0/auth0-react";


export class Home extends Component {
    constructor(props) {
        super(props);


        this.state = {

        }
    }
    render() {
        const { user, isAuthenticated, isLoading } = this.props.auth0;
        if (isLoading) {
            return <div>Loading ...</div>;
          }
        if (isAuthenticated) {
            return (<>
            <div>Hello {user.name}!</div>
            <LogoutButton />
            </>)

        }
        else{
            return(<div>Nobody logged in </div>)
        }
    }

}

export default withAuth0(Home)