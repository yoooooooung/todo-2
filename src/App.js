import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // input태그에 텍스트가 입력되면 위state에 넣어주는 핸들러 !
  function change_title_handler(event) {
    setTitle(event.target.value);
  }

  function change_contents_handler(event) {
    setContents(event.target.value);
  }

  console.log(title);
  console.log(contents);

  return (
    <div>
      <div id="header">
        <h1>Todo-list</h1>
      </div>

      <div id="input_box">
        <div id="input_title">
          <h3>Title</h3>
          <input type="text" id="title" onChange={change_title_handler} />
        </div>

        <div id="input_contents">
          <h3>Contents</h3>
          <input type="text" id="contents" onChange={change_contents_handler} />
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
