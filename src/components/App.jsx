import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Category from '../pages/Category';

import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import Post from '../pages/Post';
import Search from '../pages/Search';
import Tags from '../pages/Tags';
import Footer from './footer/Footer';
import Header from './header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/post" element={<Post />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
