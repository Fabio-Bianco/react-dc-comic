import Header from "./Header";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import ServicesBar from "./ServicesBar";
import FooterMenu from './FooterMenu';
import FooterBottom from './FooterBottom';

function MainLayout() {
  return (
    <>
      {/* Logo in alto */}
      <Header />

      {/* Menu di navigazione */}
      <Navbar />

      {/* Sezione centrale nera */}
      <Jumbotron />


      {/* Barra azzurra con icone */}
      <ServicesBar />

      {/* Colonne di link nel footer */}
      <FooterMenu />

      {/* Parte finale con pulsante e social */}
      <FooterBottom />
    </>
  );
}
export default MainLayout;