// App.js
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home.jsx";
import NotFound from "./pages/not-found.jsx";
import MoviesPage from "./pages/movies.jsx";
import CategoryPage from './pages/category.jsx';
import RootLayout from "./layout/root-layout.jsx";
import SignupPage from './pages/signup.jsx';
import LoginPage from './pages/login.jsx';
import SearchPage from './pages/search.jsx';
import MoviesLayout from './layout/movies-layout.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'movies',
                element: <MoviesLayout />,
                children: [
                    {
                        index: true,
                        element: <CategoryPage />
                    },
                    {
                        path: ':category', // 동적 경로 설정
                        element: <MoviesPage />
                    }
                ]
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'signup',
                element: <SignupPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
