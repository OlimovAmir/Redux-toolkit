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
import Categories from './components/categories/Categories';


function App() {
  const { products, categories } = useSelector((state) => state) // используем useSelector чтоб достать данные из store
  console.log('cat --> ', categories.list)
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
      <Products  products={products.list} amount={5} title="Trending" />
      <Categories  products={categories.list} amount={5} title="Worth seeing" />
      <Footer />
    </div>
  );
}

export default App;