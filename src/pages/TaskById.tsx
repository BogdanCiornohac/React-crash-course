import React, { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard/TaskCard";
import axios from "axios";
import { cardProps } from "../types/cardType";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";

const TaskById: React.FC = () => {
  const [task, setTask] = useState<cardProps>();
  let { taskId } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
      .then((res) => setTask(res.data));
  }, []);
  return (
    <Layout>
      <div>
        {task === undefined ? (
          <h2>No such task</h2>
        ) : (
          <TaskCard title={task!.title} completed={task!.completed} />
        )}
      </div>
    </Layout>
  );
};

export default TaskById;
