import TodoListState from "./views/TodoListState";
import TodoListStateComplete from "./views/TodoListStateComplete";
import TodoListReducerComplete from "./views/TodoListReducerComplete";
import TodoListReducer from "./views/TodoListReducer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/todosusestatecomplete">
                  Todo List with useState using 1 component
                </Link>
              </li>
              <li>
                <Link to="/todosusestatein3">
                  Todo List with useState using 3 components
                </Link>
              </li>
              <li>
                <Link to="/todosusereducercomplete">
                  Todo List with useReducer using 1 component
                </Link>
              </li>
              <li>
                <Link to="/todosusereducerin3">
                  Todo List with useReducer using 3 components
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/todosusestatein3" element={<TodoListState />} />
            <Route
              path="/todosusestatecomplete"
              element={<TodoListStateComplete />}
            />
            <Route
              path="/todosusereducercomplete"
              element={<TodoListReducerComplete />}
            />
            <Route path="/todosusereducerin3" element={<TodoListReducer />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
