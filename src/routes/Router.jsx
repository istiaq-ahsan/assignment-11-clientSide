import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import AddMarathon from "../pages/AddMarathon";
import MyMarathonList from "../pages/MyMarathonList";
import MyApplyList from "../pages/MyApplyList";
import AllMarathons from "../pages/AllMarathons";
import PrivateRouter from "./PrivateRouter";
import MarathonDetails from "../pages/MarathonDetails";
import MarathonReg from "../pages/MarathonReg";
import UpdateApplyInfo from "../pages/UpdateApplyInfo";
import UpdatePostedMarathon from "../pages/UpdatePostedMarathon";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";


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
                path: "/marathonDetails/:id",
                element: <PrivateRouter>
                    <MarathonDetails></MarathonDetails>
                </PrivateRouter>
            },
            {
                path: "/marathonReg/:id",
                element: <PrivateRouter>
                    <MarathonReg></MarathonReg>
                </PrivateRouter>
            },
            {
                path: "/addMarathon",
                element: <PrivateRouter>
                    <AddMarathon></AddMarathon>
                </PrivateRouter>
            },
            {
                path: "/myMarathonList",
                element: <PrivateRouter>
                    <MyMarathonList></MyMarathonList>
                </PrivateRouter>
            },
            {
                path: "/myApplyList",
                element: <PrivateRouter>
                    <MyApplyList></MyApplyList>
                </PrivateRouter>
            },
            {
                path: "/updateApplyInfo/:id",
                element: <PrivateRouter>
                    <UpdateApplyInfo></UpdateApplyInfo>
                </PrivateRouter>
            },
            {
                path: "/updateMarathonInfo/:id",
                element: <PrivateRouter>
                    <UpdatePostedMarathon></UpdatePostedMarathon>
                </PrivateRouter>
            },
            {
                path: "/dashboard",
                element: <PrivateRouter>
                    <Dashboard></Dashboard>
                </PrivateRouter>
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    },
])

export default Router;