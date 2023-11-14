import AppRoutes from './components/Routes/Routes';
import './styles/App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer/>
    </div>
  );
}

export default App;