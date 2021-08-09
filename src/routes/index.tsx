import React from "react";
import {NavigationContainer, NavigationContext} from '@react-navigation/native';

import { Background } from "../components/background";
import { AuthRoutes } from "./auth.routes"; 
import { useAuth } from "../hooks/auth";
import {SignIn} from '../screens/signIn';

export function Routes() {
    const {user} = useAuth();
    return (
        <NavigationContainer>
         { user.id ?   <AuthRoutes/> : <SignIn /> }
        </NavigationContainer>
    )
}