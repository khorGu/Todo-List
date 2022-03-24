import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ todos, setToDos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            completed={todo.completed}
            todos={todos}
            todo={todo}
            setToDos={setToDos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
