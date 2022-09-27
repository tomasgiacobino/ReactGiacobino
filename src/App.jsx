import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter } from 'react-router-dom' // Importamos para trabajar con Rutas. Lo llamamos en la const App
import CartProvider from "./components/Context/CartContext";


const App = () => {

console.log(process.env);

    return (

        <CartProvider>


            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>

        </CartProvider>

    )
}

export default App;