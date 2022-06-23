import "./App.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Header headerText="Recipe Book" />
      <Navigation />
    </div>
  );
};

export default App;
