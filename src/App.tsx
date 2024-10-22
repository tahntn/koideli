import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { Toaster } from './components/ui/sonner';

import './App.css';
function App() {
  return (
    <BrowserRouter>
          <Router />
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
}

export default App;
