import Home from "./components/Home";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Resume from './components/Resume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
