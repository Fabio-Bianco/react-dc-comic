import Header from './components/Header/Header';
import JumboContent from './components/Jumbotron/JumboContent';
import ServicesBar from './components/ServicesBar/ServicesBar';
import Footer from './components/Footer/Footer';


const menuLinks = [
  'Characters',
  'Comics',
  'Movies',
  'TV',
  'Games',
  'Collectibles',
  'Videos',
  'Fans',
  'News',
  'Shop',
];

function App() {
  return (
    <>
      <Header links={menuLinks} />
      <JumboContent />
      <ServicesBar />
      <Footer />
      <main>
        {/* Altri contenuti */}
      </main>
    </>
  );
}

export default App;
