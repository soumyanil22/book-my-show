// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovietHOC from "./HOC/Movie.HOC";

// Components
import HomePage from "./pages/home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovietHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
