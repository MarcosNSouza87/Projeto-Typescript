import React from 'react'
import {RouteProps,Route,Redirect} from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'

interface PrivateRouteProps extends RouteProps{
    component:any;
    isSignedIn: boolean;
  }
  
  const PrivateRoute = (props:PrivateRouteProps) =>{
    const {component:Component,isSignedIn,...rest} = props;
    console.log('1');
    return(
      <Route {...rest} 
      render={(routeProps) =>
        isSignedIn ? (
          <AdminLayout>
            <Component {...routeProps} />
          </AdminLayout>
        ) : (
          <Redirect 
            to={{pathname:'/',
                state:{from:routeProps.location}}}
          />
        )
      }
      />
    )
  }

  export default PrivateRoute
  