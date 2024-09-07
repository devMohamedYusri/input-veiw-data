import './App.css'
import Form from './components/component/form.jsx';
import Final from './components/component/Final.jsx';
import Review from './components/component/Review.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/review-information" element={<Review />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  )
}

export default App
