import { CTA, Features, Footer, Header, Navbar, Possibility } from '../components';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Features />
    <Possibility />
    <CTA />
    <Footer />
  </div>
);

export default App;
