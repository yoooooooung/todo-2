import "./App.css";

function App() {
  return (
    <div>
      <div id="header">
        <h1>Todo-list</h1>
      </div>

      <div id="input_box">
        <div id="input_title">
          <h3>Title</h3>
          <input type="text" id="title" />
        </div>

        <div id="input_contents">
          <h3>Contents</h3>
          <input type="text" id="contents" />
        </div>

        <button className="add_button">add</button>
      </div>

      <div id="listbox">
        <div className="item">
          <div>
            <input type="checkbox"></input>
            {/* <span>Done</span> */}
          </div>
          <div className="todo_title">투두 제목</div>
          <div className="todo_contents">투두 내용~~~~</div>
          <div className="button_box">
            <button className="delete">DELETE</button>
            <button className="cancel">CANCEL</button>
          </div>
        </div>
        <div className="item">
          <div>
            <input type="checkbox"></input>
            {/* <span>Done</span> */}
          </div>
          <div className="todo_title">투두 제목</div>
          <div className="todo_contents">투두 내용~~~~</div>
          <div className="button_box">
            <button className="delete">DELETE</button>
            <button className="cancel">CANCEL</button>
          </div>
        </div>
        <div className="item">
          <div>
            <input type="checkbox"></input>
            {/* <span>Done</span> */}
          </div>
          <div className="todo_title">투두 제목</div>
          <div className="todo_contents">투두 내용~~~~</div>
          <div className="button_box">
            <button className="delete">DELETE</button>
            <button className="cancel">CANCEL</button>
          </div>
        </div>
        <div className="item">
          <div>
            <input type="checkbox"></input>
            {/* <span>Done</span> */}
          </div>
          <div className="todo_title">투두 제목</div>
          <div className="todo_contents">투두 내용~~~~</div>
          <div className="button_box">
            <button className="delete">DELETE</button>
            <button className="cancel">CANCEL</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
