import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [userData, setUserData] = useState(null);

    const handleLogin = (userData) => {
        setUserData(userData);
        console.log("Usuario logueado:", userData);
    };

    return (
        <Router>
            <div className="App">
                <Header onLogin={handleLogin} />
                {/* Pasa handleLogin a Main como onLogin */}
                <Main userData={userData} onLogin={handleLogin} />
            </div>
            <Footer />
        </Router>
    );
};

export default App;





/* import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    // Estado para almacenar los datos del usuario logueado
    const [userData, setUserData] = useState(null);

    // Función para manejar el login y actualizar el estado con los datos del usuario
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