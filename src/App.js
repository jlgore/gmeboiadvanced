import "nes.css/css/nes.min.css";
import { MenuBar } from "./components/MenuBar"
import { DialogBar } from "./components/DialogBar"
import { BossBattle } from "./components/BossBattle"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
        <BossBattle />
        <DialogBar />
      </header>
    </div>
  );
}

export default App;
