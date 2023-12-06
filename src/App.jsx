
import { Achivement, Categories, Companies, Courses, Cta, Feedback, Footer, Hero, Navbar } from './components';
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achivement />
      <Categories />
      <Feedback />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;