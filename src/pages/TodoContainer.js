import Button from "components/core/Button";
import Input from "components/core/Input";
import useForm from "hooks/useForm";
import { useMount } from "hooks/useMount";
import TodoModel from "model/TodoModel";
import { useCallback, useMemo, useState } from "react";
import TodoCard from "./components/TodoCard";
import styles from "./TodoContainer.module.scss";

const INIT_FORM = {
  todo: "",
};

const TodoContainer = () => {
  const todo = useMemo(() => new TodoModel(), []);

  const { form, setForm, setValue, validation } = useForm(
    "todo-form",
    INIT_FORM
  );

  const [todos, setTodos] = useState([]);

  const createTodo = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await todo.createTodo(form);

      if (todo.isSuccess(response)) {
        setTodos((prev) => [...prev, response.data]);
        setForm(INIT_FORM);
      }
    },
    [form, setForm, todo]
  );

  useMount(async () => {
    const response = await todo.getTodos();

    if (todo.isSuccess(response)) {
      setTodos(response.data);
    }
  });

  return (
    <div>
      <h1 className="common-title">투두리스트</h1>

      <form
        id={"todo-form"}
        className={styles["todo-form"]}
        onSubmit={createTodo}
      >
        <Input name={"todo"} onChange={setValue} value={form.todo} required />

        <Button disabled={!validation}>등록</Button>
      </form>

      <div className={styles["todo-list"]}>
        {todos.map((todo) => {
          return <TodoCard key={todo.id} {...todo} setTodos={setTodos} />;
        })}
      </div>
    </div>
  );
};

export default TodoContainer;
