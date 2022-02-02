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
import { history } from './helpers/history';
import Profile from './components/Profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Routes  >
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/">
            <Route index element={<ProductList />} />
            <Route path=":number" element={<ProductView />} />
          </Route>

          {/* <PrivateRoute path="/orders" element={<Orders />} /> */}

        </Routes >
      </BrowserRouter>
    </div>
  )
}

export default App
