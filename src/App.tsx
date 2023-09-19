import TodoListState from "./views/TodoListState";
import Counter from "./views/Counter";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/todos">Todo List</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/todos" element={<TodoListState />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
