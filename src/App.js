
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
      {/* basename = my github url, so everything gonna be githubname.io/Personal-Site/etc. */}
      <Router basename={process.env.PUBLIC_URL}>
        <PageLayout>
          <Routes>
            <Route exact path="" element={<Home />} />
            <Route exact path="/my-projects" element={<Projects />} />
            <Route exact path="/about" element={<About />} />
            <Route element={<NotFound/>}/>
          </Routes>
        </PageLayout>
      </Router>
    </div>
  );
}

export default App;
