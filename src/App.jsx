import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {BrowserRouter} from 'react-router-dom' // Importamos para trabajar con Rutas. Lo llamamos en la const App



const App = () =>{
    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
    )
}

export default App;