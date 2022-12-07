import styles from "./TodoCard.module.scss";
import cn from "classnames";

import { useCallback, useMemo, useState } from "react";

import useForm from "hooks/useForm";

import Checkbox from "components/core/Checkbox";
import Input from "components/core/Input";
import Button, {
  BUTTON_COLOR_RED,
  BUTTON_COLOR_WHITE,
} from "components/core/Button";
import TodoModel from "model/TodoModel";

const TodoCard = (props) => {
  const { id, todo, isCompleted, setTodos } = props;

  const todoModel = useMemo(() => new TodoModel(), []);

  const { form, setValue, validation } = useForm("todo-card", {
    todo,
    isCompleted,
  });

  const [isEdit, setIsEdit] = useState(false);

  const deleteTodo = useCallback(async () => {
    const response = await todoModel.deleteTodo(id);

    if (todoModel.isSuccess(response)) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  }, [id, setTodos, todoModel]);

  const updateTodo = useCallback(async () => {
    const response = await todoModel.updateTodo(id, form);

    if (todoModel.isSuccess(response)) {
      setTodos((prev) =>
        prev.map((_todo) => (_todo.id === id ? { ..._todo, ...form } : _todo))
      );
    }
  }, [form, id, setTodos, todoModel]);

  const updateSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      await updateTodo(id, form);
      setIsEdit(false);
    },
    [form, id, updateTodo]
  );

  return isEdit ? (
    <form
      id="todo-card"
      className={styles["todo-card"]}
      onSubmit={updateSubmit}
    >
      <div className={styles["edit-input-box"]}>
        <Checkbox
          name={"isCompleted"}
          onChange={setValue}
          defaultChecked={isCompleted}
        />
        <Input
          name={"todo"}
          onChange={setValue}
          defaultValue={todo}
          autoFocus
          required
          full
        />
      </div>
      <Button type={"submit"} disabled={!validation}>
        완료
      </Button>
      <Button
        type={"button"}
        disabled={!validation}
        color={BUTTON_COLOR_RED}
        onClick={() => setIsEdit(false)}
      >
        취소
      </Button>
    </form>
  ) : (
    <div
      className={cn(styles["todo-card"], {
        [styles["is-completed"]]: isCompleted,
      })}
    >
      <p>{todo}</p>
      <div className={styles["card-button-box"]}>
        <Button color={BUTTON_COLOR_WHITE} onClick={() => setIsEdit(true)}>
          수정
        </Button>
        <Button color={BUTTON_COLOR_RED} onClick={deleteTodo}>
          삭제
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
