import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = '741011725549-6nshapmsq4ovn9mostvfb1l50pn3qpf6.apps.googleusercontent.com';

function LogOut() {
    const onSuccess = (res) => {
        console.log('success');
    }
    const onFailure = (res) => {
        console.log('failure');
    }

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onFailure={onFailure}
                onSuccess={onSuccess}
            />
        </div>
    );
}

export default LogOut;