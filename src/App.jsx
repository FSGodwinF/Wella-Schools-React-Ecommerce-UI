import {Routes, Route, Navigate} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';


function App() {
 

  return (
    <>
   
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/cart" element={<CartPage/>} />
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Layout>

    </>
  )
}

export default App
