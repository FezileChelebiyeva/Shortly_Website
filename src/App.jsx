import HomePage from "./pages/home";
import Header from "./layout/header";
import './assets/sass/main.scss'
import "./App.scss";
import Footer from "./layout/footer";
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
