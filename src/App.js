import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/user' element={<UserList />} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='/newuser' element={<NewUser />} />
            <Route exact path='/products' element={<ProductList />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/newproduct' element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;