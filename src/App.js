import Navbar from "./components/Navbar";
import About from "./components/About";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Contact from "./components/Contact"
import {RemoveScrollBar} from 'react-remove-scroll-bar';

function App() {
  return (
    <div className="App">
      <RemoveScrollBar />
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
