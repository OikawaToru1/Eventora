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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}>
      <Route path='' element={(<Home/>)} />
      <Route path='home' element= {(<AuthLayout authentication="true">
        <App/>
      </AuthLayout>)}/>
      <Route path='all-event' element={(<AuthLayout authentication="true">
        <AllEvents/>
      </AuthLayout>)}/>
      <Route path='about-us' element={<Aboutus/>}/>
      <Route path='post-form' element={(<AuthLayout authentication="true">
        <PostForm/>
      </AuthLayout>)}/>
      <Route path='edit-post' element ={(<AuthLayout authentication="true">
        <EditPost/>
      </AuthLayout>)}/>
      </Route>

      <Route path='login' element={(
        <AuthLayout authentication>
          <Login/>
        </AuthLayout>
      )}/>
      <Route path='signup' element={(
        <AuthLayout authentication>
          <Signup/>
        </AuthLayout>)}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
