import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './store/Store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
 
)
