import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MyCarousel } from "./components/MyCarousel.jsx";
import {banner} from './data/Banner.jsx';
import NavBar from "./components/NavBar.jsx";
import Orchids from "./components/Orchids.jsx";
function App() {

  return (
      <>
          <>
              <NavBar/>
              <MyCarousel persons={banner} />
              <h3 className="text-center fw-bold my-4 text-primary">
                  🌸 List of Orchids 🌸
              </h3>
              <Orchids/>
          </>
      </>
  )
}

export default App
