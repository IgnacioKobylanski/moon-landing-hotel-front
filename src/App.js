import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';  // Importa useState para manejar el estado de usuario
import Login from './components/Login';  // Asegúrate de que importas el componente Login
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    // Estado para almacenar los datos del usuario logueado
    const [userData, setUserData] = useState(null);

    // Función para manejar el login y actualizar el estado con los datos del usuario
    const handleLogin = (userData) => {
        setUserData(userData);  // Guarda la información del usuario en el estado
        console.log("Usuario logueado:", userData);  // Esto te ayudará a depurar
    };

    return (
        <Router>
            <div className="App">
                {/* Pasamos la función handleLogin al componente Login */}
                <Header onLogin={handleLogin} />
                {/* Aquí pasamos el userData a Main (por si lo necesitas en ese componente) */}
                <Main userData={userData} />
                {/* Mostrar Login solo si no hay un usuario logueado */}
                {!userData && <Login onLogin={handleLogin} />} 
            </div>
            <Footer />
        </Router>
    );
};

export default App;
