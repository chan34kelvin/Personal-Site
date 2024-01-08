
//using hashrouter because github treats this as a static site, and this is the way to make client-side routing work.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//layouts
import { PageLayout } from "./layouts/PageLayout"

//pages
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'

//css
import './App.css';

function App() {

  return (
    <div className="App">
      {/* basename = the folder name or repo name = /folder or repo */}
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <PageLayout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/my-projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </PageLayout>
      </Router>
    </div>
  );
}

export default App;
