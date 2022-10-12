import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Hero from "../Hero/Hero";
import Blog from "../Blog/Blog";
import Error from "../Error/Error";
import Statics from "../Statics/Statics";
import InnerQuiz from "../InnerQuiz/InnerQuiz";

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
                path: '/:quiz',
                loader: (params) => {
                    return fetch(
                      `https://openapi.programming-hero.com/api/quiz/${params.quiz}`
                    );
                },
                element: <InnerQuiz></InnerQuiz>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/statics',
                loader: () => {
                    return fetch(
                        `https://openapi.programming-hero.com/api/quiz`
                    );
                },
                element: <Statics></Statics>
            }
        ]
    }, {
        path: '*',
        element:<Error></Error>
    }
])