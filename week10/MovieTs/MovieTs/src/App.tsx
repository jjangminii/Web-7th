// App.tsx
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import HomePage from "./pages/home";
import NotFound from "./pages/not-found";
import MoviesPage from "./pages/movies";
import CategoryPage from './pages/category';
import RootLayout from "./layout/root-layout";
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import SearchPage from './pages/search';
import MoviesLayout from './layout/movies-layout';

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

function App(): JSX.Element {
    return ( 
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
