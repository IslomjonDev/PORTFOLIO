import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Loading from './components/loading/Loading.jsx'



const App = lazy( () => import('./App.jsx'))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
