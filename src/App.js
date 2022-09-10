import React, { useContext, useEffect, useState } from 'react'
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import {check} from './http/userAPI'
import { Spinner } from 'react-bootstrap';


const App = observer (() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [])

  if(loading) {
    return <Spinner animation={"grow"}/>
  }

  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <AppRouter />
        </BrowserRouter>
    </div>
  );
})

export default App;
