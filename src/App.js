import "./App.css";

function App() {
  return (
    <div>
      <div id="pagetitle">
        <h1>Todo-list</h1>
      </div>
      <div id="addbox">
        <div id="titlebox">
          <h3>Title</h3>
          <input type="text" id="title" />
        </div>
        <div id="contentsbox">
          <h3>Contents</h3>
          <input type="text" id="contents" />
        </div>
        <button className="addbutton">add</button>
      </div>
    </div>
  );
}

export default App;
