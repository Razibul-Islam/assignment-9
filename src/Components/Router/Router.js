import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Hero from "../Hero/Hero";
import Blog from "../Blog/Blog";
import Error from "../Error/Error";
import Statics from "../Statics/Statics";

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
                path: '/statics',
                element: <Statics></Statics>
            }
        ]
    }, {
        path: '*',
        element:<Error></Error>
    }
])