import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from './store/Store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Login,Signup,AuthLayout,Home} from './Components/index.js'
import Layout from './Components/Layout.jsx'
import AllEvents from './Components/AllEvents.jsx'
import Aboutus from './Components/Aboutus.jsx'
import PostForm from './Components/Post-Form/PostForm.jsx'
import EditPost from './Components/pages/EditPost.jsx'
import Post from './Components/Post.jsx'
import TestPage from './Components/TestPage.jsx'
import PostView from './Components/pages/PostView.jsx'
// import Text from './Components/pages/Text.jsx'
import Concert from './Components/pages/Concert.jsx'
import Comedy from './Components/pages/Comedy.jsx'
import ComedyView from './Components/pages/ComedyView.jsx'
import PostTestView from './Components/pages/PostTestView.jsx'
import Layouts from './AdminPanel/Layouts.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children :[
      {
        path : '',
        element : <Home/>
      },
      {
        path : '/home',
        element : <App/>
      },
      {
        path : '/about-us',
        element :<Aboutus/>
      },
      {
        path : '/posts',
        element : <AllEvents/>, //nothing here.
        
      },
      {
        path: '/concert', // it shows concert rn
        element : <Concert/>
      },
      {
        path: '/comedy', // it shows concert rn
        element : <Comedy/>
      },
      {
        path : '/post/:slug',
        element : <PostView/>
      },
      {
        path : '/concert/:slug',
        element : <PostTestView/>
      },
      {
        path : '/comedy/:slug',
        element : <ComedyView/>
      },
      {
        path : '/test',
        element : <TestPage/>
      },
      {
        path : '/post-form',
        element : <AuthLayout><PostForm/></AuthLayout>
      },
      {
        path : '/edit-form',
        element : <AuthLayout><EditPost/></AuthLayout>
      },
      
    ]

  },
  {
    path : '/',
    children :[{
      path : '/login',
      element : <Login/>
    },
    {
      path : '/signup',
      element : <Signup/>
    },]
  },
  {
    path:'/admin',
    element:<Layouts/>
  }

])

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
   

  </StrictMode>,
)
