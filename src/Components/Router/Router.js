import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Hero from "../Hero/Hero";
import Blog from "../Blog/Blog";
import About from "../About/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Hero></Hero>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])