import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/shared/Loader';
const WebLayout = lazy(() => import('./pages/index.jsx'));
const Home = lazy(() => import('./pages/home/Home.jsx'));
const About = lazy(() => import('./pages/about/About.jsx'));
const Projects = lazy(() => import('./pages/projects/Projects.jsx'));
const Contact = lazy(() => import('./pages/contact/Contact.jsx'));
const NotFound = lazy(() => import('./pages/notFound/NotFound.jsx'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<WebLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
