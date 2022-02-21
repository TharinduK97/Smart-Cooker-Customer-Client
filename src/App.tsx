import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './containers/Productlist/productList';
import ProductView from './containers/Productlistview/productview';
import Transactions from './containers/Transactions/transactions';
import Orders from './containers/Orders/orders';
import Login from "../src/components/Login/index"
import Profile from './containers/Profile/index';

import { isAuthenticated } from './services/authenticationService';
import TransactionsView from './containers/TransactionView/transactionView';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Routes  >
       
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
           <Route path="/orders" element={<Orders />} />
          <Route path="/transactions">
            <Route index element={<Transactions/>} />
            <Route path="/transactions:id" element={<TransactionsView/>} />
          </Route>
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
