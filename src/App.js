import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [userData, setUserData] = useState(null);

    // Función para manejar el login
    const handleLogin = (userData) => {
        setUserData(userData); // Guarda los datos del usuario autenticado
        console.log("Usuario logueado:", userData);
    };

    // Función para manejar el logout
    const handleLogout = () => {
        setUserData(null); // Limpia los datos del usuario al cerrar sesión
        console.log("Usuario deslogueado");
    };

    return (
        <Router>
            <div className="App">
                {/* Pasa userData y handleLogout a Header */}
                <Header userData={userData} onLogout={handleLogout} />
                {/* Pasa userData y handleLogin a Main */}
                <Main userData={userData} onLogin={handleLogin} />
            </div>
            <Footer />
        </Router>
    );
};

export default App;



/* DO NOT DELETE
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    // Estado para almacenar los datos del usuario logueado
    const [userData, setUserData] = useState(null);

    const handleLogin = (userData) => {
        setUserData(userData); 
        console.log("Usuario logueado:", userData);  
    };

    return (
        <Router>
            <div className="App">
                <Header onLogin={handleLogin} />
                <Main userData={userData} />
            </div>
            <Footer />
        </Router>
    );
};

export default App;
 */