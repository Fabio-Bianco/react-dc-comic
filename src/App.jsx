import menuLinks from './data/menuLinks';
import Header from './components/Header/Header';
import JumboContent from './components/Jumbotron/JumboContent';
import ServicesBar from './components/ServicesBar/ServicesBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header links={menuLinks} />
      <main>
        <JumboContent />
        <ServicesBar />
      </main>
      <Footer />
    </>
  );
}

export default App;
