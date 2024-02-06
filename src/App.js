import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Routes y Route
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomList from './components/RoomList';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
            
        </Router>
    );
};

export default App;
