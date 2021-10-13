import React from 'react';
import { Img, ImgDiv } from './ImgLoginAuthStyles';
import { useAuth0 } from "@auth0/auth0-react";


function ImgLoginAuth() {
    const { user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
         
            <Img src={user.picture}/>
           
            
        )
    )
}

export default ImgLoginAuth
