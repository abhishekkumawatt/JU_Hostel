import AllRoutes from './allroutes/AllRoutes';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import './assets/css/animate.min.css';
import './assets/css/bootstrap-datepicker.css';
import './assets/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/flaticon.css';
import './assets/css/font-awesome.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/nice-select.css';
import './assets/css/slick.css';
import './assets/css/style.css';

function App() {
  AOS.init({
    duration: 1000, // Animation duration (in ms)
    easing: "ease-in-out", // Easing function
    offset: 100, // Offset (in px) from the element before animating
    delay: 200, // Delay before animation (in ms)
    once: true, // Animation happens only once
    mirror: false, // Whether animation should happen again on scroll-up
  });
  return (
    <div>
      <div>
        <AllRoutes/>
      </div>
    </div>
  );
}

export default App;
