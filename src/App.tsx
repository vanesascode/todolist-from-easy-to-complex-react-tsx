import TodoListState from "./views/TodoListState";
import TodoListStateComplete from "./views/TodoListStateComplete";
import TodoListReducerComplete from "./views/TodoListReducerComplete";
import TodoListReducerCompleteMoreComplex from "./views/TodoListReducerCompleteMoreComplex";
import TodoListReducer from "./views/TodoListReducer";
import TodoListRedux from "./views/TodoListRedux";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* LIST OF TODOLISTS */}

          <nav>
            <ul>
              <li>
                <Link to="/todosusestatecomplete">
                  1 - Todo List with useState using 1 component
                </Link>
              </li>
              <li>
                <Link to="/todosusestatein3">
                  2 - Todo List with useState using 3 components
                </Link>
              </li>
              <li>
                <Link to="/todosusereducercomplete">
                  3 - Todo List with useReducer using 1 component
                </Link>
              </li>
              <li>
                <Link to="/todosusereducerin3">
                  4 - Todo List with useReducer using 3 components
                </Link>
              </li>
              <li>
                <Link to="/todosusereducercomplexcomplete">
                  5 - Todo List with useReducer more complex in 1
                </Link>
              </li>
              <li>
                <Link to="/todosredux">6 - Todo List with Redux</Link>
              </li>
            </ul>
          </nav>

          {/* ROUTES */}

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
            <Route
              path="/todosusereducercomplexcomplete"
              element={<TodoListReducerCompleteMoreComplex />}
            />
            <Route path="/todosredux" element={<TodoListRedux />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
