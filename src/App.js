
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//layouts
import { PageLayout } from "./layouts/PageLayout"

//pages
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { About } from './pages/About'

//css
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <PageLayout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/my-projects" element={<Projects />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </PageLayout>
      </Router>
    </div>
  );
}

export default App;
