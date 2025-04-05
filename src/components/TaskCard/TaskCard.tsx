import React from "react";
import { cardProps } from "../../types/cardType";

import "./TaskCard.scss";

const TaskCard: React.FC<cardProps> = ({
  title,
  completed,
  id,
  onComplete,
}) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <span>{completed ? "done" : "in progress"}</span>
      <button disabled={completed} onClick={() => onComplete(id)}>
        Complete
      </button>
    </div>
  );
};

export default TaskCard;
