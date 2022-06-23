import React, { Component } from 'react';
import LogoutButton from '../logoutbutton';
import Profile from '../profile/index';
import { useAuth0, withAuth0 } from "@auth0/auth0-react";
import LoginButton from '../loginbutton';
import useAPI from '../../useAPI';


export class Home extends Component {
    constructor(props) {
        super(props);


        this.state = {
            apiResponse: ""
        }
    }

    callAPI(){
        const opts = {
            audience: "https:tasktracker/api",
            scope: "read:current_user update:current_user_metadata"
        }
        const { login, getAccessTokenWithPopup } = useAuth0();
        const { loading, error, refresh, data: users} = useAPI('http://localhost:3001/projects/private', opts);
        const getTokenAndTryAgain = as
    }

    componentDidMount(){
        this.callAPI();
    }

    render() {
        const { user, isAuthenticated, isLoading } = this.props.auth0;
        if (isLoading) {
            return <div>Loading ...</div>;
          }
        if (isAuthenticated) {
            return (<>
            <div>Hello {user.name}!</div>
            {this.state.apiResponse}
            <LogoutButton />
            </>)

        }
        else{
            return(<div>Nobody logged in 
                {this.state.apiResponse}
                <LoginButton />
            </div>)
        }
    }

}

export default withAuth0(Home)