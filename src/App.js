import logo from './logo.svg';
import './App.css';
import Signin from './Signin';
import Charts from './Charts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
 <Route path='/'  element={<Signin />} />
 <Route path='/dasnboard'  element={< Charts />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
