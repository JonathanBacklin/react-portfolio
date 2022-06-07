// import Carousel from './ComponentsSmaller/Carousel';
import Navbar from './ComponentsSmaller/Navbar';
import Sidebar from './ComponentsBigger/Sidebar';
import Goals from './ComponentsBigger/Goals';
import Typing from './ComponentsBigger/Typing';
import Footer from './ComponentsSmaller/Footer';
import Projects from './ComponentsBigger/Projects';
import './css/Index.css'
import Knowledge from './ComponentsBigger/Knowledge';

function App() {
  return (
    <div className="App">
      {/* Certificates,recommendations,attests,goals,open for work etc,contact,download CV swedish english */}
      <Navbar />
      <div className='actual-page'>
        <Typing />
        {/* <Carousel /> */}
        <Knowledge />
        <Sidebar />
        <Goals />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
