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

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path='/' element={<Layout/>}>
//       <Route path='' element={(<Home/>)} />
//       <Route path='home' element= {(
//         <App/>
//       )}/>
//       <Route path='all-event' element={(
//         <AllEvents/>
//       )}/>
//       <Route path='about-us' element={<Aboutus/>}/>
//       <Route path='post-form' element={(
//         <PostForm/>
//       )}/>
//       <Route path='edit-post' element ={(
//         <EditPost/>
//       )}/>
//       </Route>

//       <Route path='login' element={(
       
//           <Login/>
       
//       )}/>
//       <Route path='signup' element={(
       
//           <Signup/>
//        )}/>
//     </Route>
//   )
// )

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
        element : <AllEvents/>,
        
      },
      {
        path : '/post/:slug',
        element : <Post/>
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
      }

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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
