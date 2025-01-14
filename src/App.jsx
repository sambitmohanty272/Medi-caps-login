import Header from './components/Header';
import Background from './components/Background';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Background>
        <LoginForm />
      </Background>
      <Footer />
    </div>
  );
}

export default App;
