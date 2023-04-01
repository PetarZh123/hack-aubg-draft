import {Routes, Route} from 'react-router-dom';
import Layout from './Layout'
import Login from './Login'
import './App.css';

function App() {
  return (
      <div>
        <Routes>
          <Route path="Layout" element={<Layout />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
