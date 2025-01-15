import { useContext } from "react";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('in private route',location);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <ClipLoader color="#4CAF50" size={60} />
            </div>
        );
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;

/* 

in private route:

the location.pathname is "/item/123", the page you wanted to go.
so "state={location.pathname}" stores the page you were trying to access (e.g., /item/123) in the state of the navigation.
When you are redirected from the PrivateRoute to the login page using the <Navigate> component, it sends along the location.state(/item/123..)
so, On the login page, you can access this state using useLocation(). When you consolelog the location object, you'll see that the state set to /item/123
hence, when we login successfully from there, it takes you back to page you intended to visit

*/