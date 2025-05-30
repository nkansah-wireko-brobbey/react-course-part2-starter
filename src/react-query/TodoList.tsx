import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {


  const queryFunction = ()=>axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').then((res)=>res.data)

  const {data: todos, error} = useQuery<Todo[], Error>({
    queryKey: [],
    queryFn: queryFunction
  })



  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
