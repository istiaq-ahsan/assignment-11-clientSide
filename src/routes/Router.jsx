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
                element: <AddMarathon></AddMarathon>
            },
            {
                path: "/myMarathonList",
                element: <PrivateRouter>
                    <MyMarathonList></MyMarathonList>
                </PrivateRouter>
            },
            {
                path: "/myApplyList",
                element: <MyApplyList></MyApplyList>
            }
        ]
    }
])

export default Router;