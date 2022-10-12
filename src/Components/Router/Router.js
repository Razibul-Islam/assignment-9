import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Hero from "../Hero/Hero";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Hero></Hero>
            }
        ]
    }
])