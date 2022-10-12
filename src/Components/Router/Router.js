import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Hero from "../Hero/Hero";
import Blog from "../Blog/Blog";
import About from "../About/About";
import Error from "../Error/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => {
                    return fetch(
                        `https://openapi.programming-hero.com/api/quiz`
                    );
                },
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
    }, {
        path: '*',
        element:<Error></Error>
    }
])