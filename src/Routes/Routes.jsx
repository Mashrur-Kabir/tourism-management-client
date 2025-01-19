import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTourSpot from "../Pages/addTourSpot/addTourSpot";
import AllTouristSpots from "../Pages/AllTouristSpots/AllTouristSpots";
import SpotDetails from './../Pages/SpotDetails/SpotDetails';
import MyList from "../Pages/MyList/MyList";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateSpot from "../Pages/MyList/UpdateSpot";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://tourism-management-server-gray.vercel.app/topSpots")
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addSpot',
                element: <PrivateRoute> <AddTourSpot></AddTourSpot> </PrivateRoute> ,
            },
            {
                path: '/allSpots',
                element: <AllTouristSpots></AllTouristSpots>,
                loader: () => fetch("https://tourism-management-server-gray.vercel.app/topSpots")
            },
            {
                path: "/details/:id",
                element: <PrivateRoute> <SpotDetails></SpotDetails> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://tourism-management-server-gray.vercel.app/topSpots/${params.id}`),
            },
            {
                path: '/myList',
                element: <PrivateRoute> <MyList></MyList> </PrivateRoute>,
                loader: () => fetch(`https://tourism-management-server-gray.vercel.app/topSpots`)
            },
            {
                path: '/updateSpot/:id',
                element: <UpdateSpot></UpdateSpot>,
                loader: ({params}) => fetch(`https://tourism-management-server-gray.vercel.app/topSpots/${params.id}`) // topSpots contains all the data. it is used here along with the URL to load the specific data with id params in UpdateSpot.jsx
            }

        ]
    }
]);

export default router;