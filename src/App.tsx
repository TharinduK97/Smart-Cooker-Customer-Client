import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './containers/Productlist/productList';
import ProductView from './containers/Productlistview/productview';
import Transactions from './containers/Transactions/transactions';
import Orders from './containers/Orders/orders';
import Login from "../src/components/Login/index"
import { PrivateRoute } from '../src/helpers/privateRoutes';
import Profile from './containers/Profile/index';
import Checkout from './containers/Checkout';
import { isAuthenticated } from './services/authenticationService';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Routes  >
       
          <Route path="/login" element={<Login />} />
          {/* <PrivateRoute
    path='/profile'
    isAuthenticated={isAuthenticated}
    component={Profile}
/> */}
          <Route path="/profile" element={<Profile />} />
           <Route path="/orders" element={<Orders />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/">
            <Route index element={<ProductList />} />
            <Route path="/view/:id" element={<ProductView />} />
          </Route>

         

        </Routes >
      </BrowserRouter>
    </div>
  )
}

export default App
