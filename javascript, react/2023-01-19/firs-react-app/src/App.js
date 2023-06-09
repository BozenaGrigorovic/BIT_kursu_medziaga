import './App.css';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import Subheadline from './components/subheadline/Subheadline';
import Footer from './components/footer/Footer';
import { useId } from 'react';

function App() {

  const navLinks = ['Tours', 'Products', 'Features', 'Enterprise', 'Support', 'Pricing', 'Cart'];

  const Subheadlines = () => {

    const products = [];
    const id = useId();

    for(let i = 0; i < 4; i++) {
      products.push(<Subheadline key={id + i} />)
    }
    return products;
  }
  return (
    <>
    <Header nuorodos={navLinks} />
    <main>
      <Headline />
      <Subheadlines />
    </main>
    <Footer />
    </>
  );
}

export default App;
