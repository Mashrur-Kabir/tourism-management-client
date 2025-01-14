import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTourSpot from "../Pages/addTourSpot/addTourSpot";
import AllTouristSpots from "../Pages/AllTouristSpots/AllTouristSpots";
import SpotDetails from './../Pages/SpotDetails/SpotDetails';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:3000/topSpots")
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
                element: <AddTourSpot></AddTourSpot>,
            },
            {
                path: '/allSpots',
                element: <AllTouristSpots></AllTouristSpots>,
                loader: () => fetch("http://localhost:3000/topSpots")
            },
            {
                path: "/details/:id",
                element: <SpotDetails />,
                loader: ({ params }) => fetch(`http://localhost:3000/topSpots/${params.id}`),
            },

        ]
    }
]);

export default router;