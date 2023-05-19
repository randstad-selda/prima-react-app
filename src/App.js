import BaseHeader from "./components/BaseHeader";
import BaseMain from "./components/BaseMain";
import BaseFooter from "./components/BaseFooter";

function App() {
  return (
    <div className="page-container">
      <BaseHeader />
      <BaseMain />
      <BaseFooter />
    </div>
  );
}

export default App;
