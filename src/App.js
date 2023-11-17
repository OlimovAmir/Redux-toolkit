import AppRoutes from './components/Routes/Routes';
import './styles/App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import AppStyles from './styles/App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from './features/caregories/categoriesSlice';
import { getProducts } from './features/products/productsSlice';
import Products from './components/products/Products';


function App() {
  const { list } = useSelector(({ products }) => products) // используем useSelector чтоб достать данные из store
  console.log('testProduct---> ', list)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])
  return (
    <div className="App">
      <Header />
      <div className={AppStyles.container}>
        <Sidebar />
        <AppRoutes />
        
      </div>
      <Products  products={list} amount={5} title="Trending" />
      <Footer />
    </div>
  );
}

export default App;