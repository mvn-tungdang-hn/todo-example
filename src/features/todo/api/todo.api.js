import api from "api/axios";
import { TodoEndpoints } from "../constants/todo.endpoints";

const getTodoListApi = () => {
  return api.get(TodoEndpoints.LIST, {
    params: {
      page: 1,
      limit: 10,
    },
  });
};

export const todoApi = {
  getTodoListApi,
};
