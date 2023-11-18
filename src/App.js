import AppRoutes from './components/Routes/Routes';
import './styles/App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import AppStyles from './styles/App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from './features/caregories/categoriesSlice';
import { filterByPrice, getProducts } from './features/products/productsSlice';
import Products from './components/products/Products';
import Categories from './components/categories/Categories';
import Banner from './components/banner/Banner';


function App() {
  const {
    products: { list, filtered },
    categories
  } = useSelector((state) => state) // используем useSelector чтоб достать данные из store
  //console.log('cat --> ', categories.list)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
    if (!list.length) return;
    dispatch(filterByPrice(200));
  }, [dispatch, list.length])
  return (
    <div className="App">
      <Header />
      <div className={AppStyles.container}>
        <Sidebar />
        <AppRoutes />

      </div>
      <Products products={list} amount={5} title="Trending" />
      <Categories products={categories.list} amount={5} title="Worth seeing" />
      <Banner />
      <Products products={filtered} amount={5} title="Less than 200$" />
      <Footer />
    </div>
  );
}

export default App;