import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'virtual:uno.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {FluentProvider, webLightTheme} from '@fluentui/react-components';
import Root from './routes/Root.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import About from './routes/About.tsx';
import BlogPage from './routes/BlogPage.tsx';
import ContactPage from './routes/Contact.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <BlogPage/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <ContactPage/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <RouterProvider router={router}/>
    </FluentProvider>
  </React.StrictMode>
)
