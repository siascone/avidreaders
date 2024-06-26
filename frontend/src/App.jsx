import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginForm from "./components/session/LoginForm";
import SignupForm from './components/session/SignupForm';
import Navigation from './components/navigation/Navigation';
import BookIndex from './components/books/BookIndex';
import * as sessionActions from './store/sessionReducer';
import BookPage from './components/books/BookPage';
import AuthorPage from './components/authors/AuthorPage';

function Layout() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState();

    useEffect(() => {
        dispatch(sessionActions.restoreSession()).then(() => {
            setIsLoaded(true);
        });
    }, [dispatch]);

    return (
        <>
            <Navigation />
            {isLoaded && <Outlet />}
        </>
    )
}


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <h1>Welcome avidReaders!</h1>
            },
            {
                path: '/login',
                element: <LoginForm />
            },
            {
                path: '/signup',
                element: <SignupForm />
            },
            {
                path: '/books',
                element: <BookIndex />
            },
            {
                path: '/books/:bookId',
                element: <BookPage />
            },
            {
                path: '/authors/:authorId',
                element: <AuthorPage />
            }
        ]
    }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
