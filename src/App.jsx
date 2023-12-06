
import { Achivement, Categories, Companies, Courses, Hero, Navbar } from './components';
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
    </div>
  );
};

export default App;