import { createBrowserRouter } from "react-router";
import Home from "./pages/home/Home";
import Instructions from "./pages/instructions/Instructions";

export default createBrowserRouter([
    {
        path: "/",
        children: [
            { index: true, Component: Home },
            {
                path: "/instructions",
                children: [
                    {index: true, Component: Instructions},
                ]
            }
        ],
    },
]);

