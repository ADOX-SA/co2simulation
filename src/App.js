import "./App.css";
import "./sass/main.css";

// Imported components
import Navigation from "./components/Navigation";

// Imported pages
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="App-header">
        <Mainpage />
      </div>
    </div>
  );
}

export default App;
