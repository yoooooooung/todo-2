import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // todos : listbox안에서 뿌려줄 todo 들의 모음(배열)
  const [todos, setTodos] = useState([
    { id: 1, title: "제목", contents: "내용~~~", isDone:false },
  ]);

  // 고유한 id 값을 주기 위해 Date.now() 사용
  let keyid = Date.now()

  // Cancel <-> Done 핸들러
  const changeDoneHandler = (todo) => {
    setTodos(todos.map(clickone => (
      clickone.id === todo.id ? {...clickone, isDone: ! todo.isDone} : clickone
    )))
  }

  // Delete 핸들러
  const deleteHandler = (todo) => {
    setTodos(todos.filter(clickone => clickone.id !== todo.id))
  }

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
            value={title}   // input안의 텍스트를 title과 동기화시킴 (내용 초기화를 위해)
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
            value={contents} // input안의 텍스트를 title과 동기화시킴 (내용 초기화를 위해)
          />
        </div>

        <button
          className="add_button"
          onClick={() => {  // 클릭시 todos배열 내에 추가하기
            setTodos([
              ...todos,  // 전개 연산자 사용하여 내부 요소들 가져오기
              { id: keyid, title: title, contents: contents, isDone:false },
            ]);
            setTitle("");
            setContents("");
          }}
        >
          add
        </button>
      </div>

      <div id="listbox">
        {todos.map((todo) => (    // map 메서드를 사용해서 todos 배열에 담긴 요소 하나하나를 뿌려주기
          <div className="item" key={todo.id}>
            <div className="checkbox">
              <div className={todo.isDone ? "checked" : "unchecked"} onClick={() => changeDoneHandler(todo)}></div>
              {todo.isDone && (
                <div>Done!</div>
              )}
            </div>
            <div className="todo_title">{todo.title}</div>
            <div className="todo_contents">{todo.contents}</div>
            <div className="button_box">
              <button className="delete"
                onClick={() => deleteHandler(todo)}>DELETE</button>
              {/* 1. 어떤 item의 버튼을 클릭했는지 확인 => 인자로 넘겨받은 todo를 활용하여 id 값으로 확인
                  2. 해당 item의 isDone key의 값을 반대로 변경 (true <-> false) */}
              <button
                className={todo.isDone ? "cancel" : "done"} // isDone이 true라면 className을 cancel로 준다
                onClick={() => {
                  changeDoneHandler(todo)
                }}
              >
                {/* isDone이 true라면, 버튼 내용을 "CANCEL"로 노출 */}
                {todo.isDone ? "CANCEL" : "DONE"}
                </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
