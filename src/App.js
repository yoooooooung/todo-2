import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "제목", contents: "내용~~~" },
  ]);

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
          <input
            type="text"
            id="title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />
        </div>

        <div id="input_contents">
          <h3>Contents</h3>
          <input
            type="text"
            id="contents"
            onChange={(event) => {
              setContents(event.target.value);
            }}
            value={contents}
          />
        </div>

        <button
          className="add_button"
          onClick={() => {
            setTodos([
              ...todos,
              { id: todos.length + 1, title: title, contents: contents },
            ]);
            setTitle("");
            setContents("");
          }}
        >
          add
        </button>
      </div>

      <div id="listbox">
        {/* <div className="item">
          <div>
            <input type="checkbox"></input>
          </div>
          <div className="todo_title">투두 제목</div>
          <div className="todo_contents">투두 내용~~~~</div>
          <div className="button_box">
            <button className="delete">DELETE</button>
            <button className="cancel">CANCEL</button>
          </div>
        </div> */}
        {/* jsx안에서 JS문법을 쓸 때에는 중괄호 열어야 함 */}
        {todos.map((todo) => (
          <div className="item" key={todo.id}>
            <div>
              <input type="checkbox"></input>
            </div>
            <div className="todo_title">{todo.title}</div>
            <div className="todo_contents">{todo.contents}</div>
            <div className="button_box">
              <button className="delete">DELETE</button>
              <button className="cancel">CANCEL</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
