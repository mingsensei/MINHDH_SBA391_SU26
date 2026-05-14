import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {MyProfile} from "./components/MyProfile.jsx";
import { MyCarousel } from "./components/MyCarousel.jsx";
import {Navigation} from "./components/Navigation.jsx";
import {persons} from './data/Students.jsx';
function App() {

  return (

      <>
          <Navigation />
          <MyCarousel persons={persons} />

          <div
              style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "20px",
                  justifyContent: "center",
                  justifyItems: "center",
                  padding: "20px",
                  maxWidth: "1400px",
                  margin: "0 auto"
              }}
          >
              {
                  persons.map((person, index) => (
                      <MyProfile key={index} person={person} />
                  ))
              }
          </div>
      </>
  )
}

export default App
