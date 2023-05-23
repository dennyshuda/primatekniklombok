import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import TablePrice from "./components/Table/TablePrice";

function App() {
  return (
    <>
      <main>
        <Header />
        <About />
        <Services />
        <TablePrice />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
