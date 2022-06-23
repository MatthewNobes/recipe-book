import "./App.css";
import Router from "./components/Router";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Header headerText="Recipe Book" />
      <Router />
      <Navigation />
    </div>
  );
};

export default App;
