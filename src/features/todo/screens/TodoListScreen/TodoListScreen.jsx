import React, { useEffect, useState } from "react";
import { getTodoList } from "features/todo/redux/todo.slice";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "features/todo/components/TodoItem/TodoItem";

const TodoListScreen = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getTodoList()).finally(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {todoList.map((item) => (
        <TodoItem key={item.id} />
      ))}
    </div>
  );
};

export default TodoListScreen;
