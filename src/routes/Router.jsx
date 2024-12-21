import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import AddMarathon from "../pages/AddMarathon";
import MyMarathonList from "../pages/MyMarathonList";
import MyApplyList from "../pages/MyApplyList";
import AllMarathons from "../pages/AllMarathons";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/allMarathons",
                element: <AllMarathons></AllMarathons>
            },
            {
                path: "/addMarathon",
                element: <AddMarathon></AddMarathon>
            },
            {
                path: "/myMarathonList",
                element: <MyMarathonList></MyMarathonList>
            },
            {
                path: "/myApplyList",
                element: <MyApplyList></MyApplyList>
            }
        ]
    }
])

export default Router;