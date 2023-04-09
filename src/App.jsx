import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";
import GlobalContextProvider from "./context/GlobalContext";
import ProfessionalsContainer from "./components/pages/Professionals/ProfessionalsContainer";
import Home from "./components/pages/Home/Home"
import Contacto from "./components/pages/Contacto/contacto";
import ProfessionalSelectedContainer from "./components/pages/ProfessionalSelected/ProfessionalSelectedContainer";
import FavoritesContainer from "./components/pages/Favorites/FavoritesContainer";
import { ColorModeProvider } from "./Context/ThemeContext/ColorModeContext";


function App() {
  return (
    
    <BrowserRouter>
      <ColorModeProvider> 
      
      <GlobalContextProvider>
        
        <Routes>
          
            <Route element={<Footer />}>
            <Route element={<Navbar />}>
              
              <Route path="/" element={<Home/>} />
              <Route
                path="/dentistas"
                element={<ProfessionalsContainer />}
              />
              <Route
                path="/dentista/:id"
                element={<ProfessionalSelectedContainer />}
                />
              <Route
                path="/contacto"
                element={<Contacto/>}/>


             <Route 
              path="/favoritos" 
              element={<FavoritesContainer/>} />

            </Route>
          </Route>
          <Route 
          path="*" 
          element={<h1> error Not Found</h1>} /> 
        </Routes>
      </GlobalContextProvider>
      </ColorModeProvider>
    </BrowserRouter>
  );
}

export default App;