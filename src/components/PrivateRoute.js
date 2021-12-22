import React from "react";
import { Route, Redirect} from "react-router-dom";

function PrivateRoute({component:Component, data, ...rest}) {
  return <Route {...rest} render={(props)=> {
            if (localStorage.getItem("token")) {
                return <Component {...props} {...data}/>
            } else {
                return <Redirect to="/login"/>
            }
    }}/>
}

export default PrivateRoute;
