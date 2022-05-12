import Carousel from './ComponentsSmaller/Carousel';
import Mainpage from './ComponentsBigger/Mainpage';
import Navbar from './ComponentsSmaller/Navbar';
import Sidebar from './ComponentsBigger/Sidebar';

function App() {
  return (
    <div className="App">
      {/* Certificates,recommendations,attests */}
      <Navbar />
      <Mainpage />
      <Carousel />
      <Sidebar />
    </div>
  );
}

export default App;
