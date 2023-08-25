import "./App.css";

function App() {
  return (
    <div> /* 모든 컨텐츠를 다 담는 큰 태그는 무조건 1개 있어야 함 */


      <div id="header">
        <h1>Todo-list</h1>
      </div>
      

      <div id="inputbox">

        <div id="title">
          <h3>Title</h3>
          <input type="text" id="title" />
        </div>

        <div id="contents">
          <h3>Contents</h3>
          <input type="text" id="contents" />
        </div>
    
        <button className="addbutton">add</button>

      </div>

      <div id="listbox">
        <div class="item">
          {/* item 내부 구조 작성 */}
        </div>
      </div>

    </div>
  );
}

export default App;
