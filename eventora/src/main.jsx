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
import RTE from './Components/RTE.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}>
      <Route path='' element= {<App/>}/>
      <Route path='home' element={<Home/>} />
      <Route path='all-event' element={<AllEvents/>}/>
      <Route path='about-us' element={<Aboutus/>}/>
      <Route path='rte' element={<RTE/>}/>
      </Route>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
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
