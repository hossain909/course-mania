// import jwt_decode from "jwt-decode";
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from "../../../App";


const PrivateRoute = ({ component: Component, ...rest }) => {
  const [loggedInUser, setLoggedInuser] = useContext(UserContext)

  // const isLoggedIn = () => {
  //   const token = sessionStorage.getItem("token")
  //   if (!token) {
  //     return false;
  //   }
  //   const decodedToken = jwtDecode(token)
  //   const currentTime = new Date().getTime() / 1000;
  //   return decodedToken.exp > currentTime;
  // }
  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       ((loggedInUser.email || sessionStorage.getItem("token"))) ? (
  //         children
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: "/login",
  //             state: { from: location }
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );
  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedInUser.email
          ? <Component {...props} />
          : <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
      }}
    />
  );
};

export default PrivateRoute;