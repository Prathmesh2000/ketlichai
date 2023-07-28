import Header from './component/header';
import ProductSection from './component/poductSection';
import HeroSection from './component/herosection';
import Footer from './component/footer';

function App() {

  const tempData = [
    {
      url: "https://chaayos.com/cdn/shop/files/81-AI_kbHnL._SX679.jpg?v=1683542634",
      name: "product 1",
      price: "1000",
    },
    {
      url: "https://chaayos.com/cdn/shop/files/81-AI_kbHnL._SX679.jpg?v=1683542634",
      name: "product 2",
      price: "1000",
    },
    {
      url: "https://chaayos.com/cdn/shop/files/81-AI_kbHnL._SX679.jpg?v=1683542634",
      name: "product 3",
      price: "1000",
    },
    {
      url: "https://chaayos.com/cdn/shop/files/81-AI_kbHnL._SX679.jpg?v=1683542634",
      name: "product 3",
      price: "1000",
    },
    {
      url: "https://chaayos.com/cdn/shop/files/81-AI_kbHnL._SX679.jpg?v=1683542634",
      name: "product 1",
      price: "1000",
    },
    {
      url: "https://chaayos.com/cdn/shop/files/81-AI_kbHnL._SX679.jpg?v=1683542634",
      name: "product 2",
      price: "1000",
    },
    {
      url: "https://chaayos.com/cdn/shop/files/81-AI_kbHnL._SX679.jpg?v=1683542634",
      name: "product 3",
      price: "1000",
    },
  ]

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
        <HeroSection />
      </section>
      <section>
        <ProductSection
          productData={tempData}
        />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
