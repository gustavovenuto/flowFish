import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {AuthContext} from '../contexts/auth';


import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import AdminRoutes from './admin.routes';


function Routes(){

    const {signed, loading, user, data, nt} = useContext(AuthContext);

    if(loading){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#131313"/>
            </View>
        )
    }


    if(user && user.email == "admin@admin.com"){
        return(<AdminRoutes/>)
    }
    return(
        signed ? <AppRoutes/> :<AuthRoutes/>
    )
}


export default Routes;