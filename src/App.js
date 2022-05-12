import Carousel from './ComponentsSmaller/Carousel';
import Mainpage from './ComponentsBigger/Mainpage';
import Navbar from './ComponentsSmaller/Navbar';
import Sidebar from './ComponentsBigger/Sidebar';

function App() {
  return (
    <div className="App">
      {/* Certificates,recommendations,attests,goals,open for work etc,contact */}
      <Navbar />
      <div className='actual-page'>
        <Mainpage />
        <Carousel />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
