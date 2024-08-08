import Body from "./components/Body/Body";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <div className=" main-container">
      <Header />
      <Body />
      <About />
      <Services />
      <Portfolio />
      <Feedback/>
      <Contact />
    </div>
  );
}

export default App;
