import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {BrowserRouter} from 'react-router-dom' // importamos para trabajar con Rutas. Lo llamamos en la const App



const App = () =>{
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App;