import logo from './logo.svg';
import './App.css';
import Clock from './components/pure/clock';
// import TaskListComponent from './components/containers/taskList';
// import ComponenteA from './components/containers/ComponenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ComponenteA></ComponenteA> */}
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
