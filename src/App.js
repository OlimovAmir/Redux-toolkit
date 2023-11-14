import AppRoutes from './components/Routes/Routes';
import './styles/App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import AppStyles from './styles/App.module.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className={AppStyles.container}>
        <Sidebar/>
        <AppRoutes />
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;