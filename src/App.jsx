
import { Achivement, Companies, Courses, Hero, Navbar } from './components';
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achivement />
    </div>
  );
};

export default App;