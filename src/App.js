import Carousel from './Carousel';
import Mainpage from './Mainpage';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {

  return (
    <div className="App">
      <div style={{ marginBottom: '3em' }}>
        <Navbar />
      </div>
      <Mainpage />
      <Carousel />
      <Sidebar />
    </div>
  );
}

export default App;
