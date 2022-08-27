import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";



const App = () =>{
    return (
        <>
            <Header/>
            <Main/>
            <Footer fecha={25} alumno={{nombre:'Tomas', apellido: 'Giacobino', curso:'React'}} empresa="CoderHouse"/>
        </>
    )
}

export default App;