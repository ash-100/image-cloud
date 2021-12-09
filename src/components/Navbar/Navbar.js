import React, { useState } from "react";
import './Navbar.css';
import { provider, auth } from "../../firebase/config";
import ImageGrid from "../ImageGrid";
import Title from "../Title";
import UploadForm from "../UploadForm";


const Navbar = () => {
    const [signedIn, setSignedIn] = useState(false);

    function signIn() {
        auth.signInWithPopup(provider)
            .then((result) => {
                setSignedIn(true);
            }).catch((error) => {
                console.log('error');
            })
    }
    function signOut() {
        auth.signOut()
            .then(() => {
                setSignedIn(false);
            })
    }

    return (
        <div>
            <div className="navbar">
                <div className="nav-links">
                    <span className="nav-heading">Image Cloud</span>
                    {!signedIn && <button className='signInButton' onClick={signIn} >Sign In</button>}
                    {signedIn && <button id='signOutButton' className='signOutButton' onClick={signOut} >Sign Out</button>}
                </div>
            </div>
            <Title />
            {signedIn && <UploadForm />}
            {signedIn && <ImageGrid />}
        </div>


    );
}


export default Navbar;
