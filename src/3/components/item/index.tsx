import { FunctionComponent } from "react";
import DeleteIcon from '../../assets/icons/delete-icon.svg';
import "./index.scss";
/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

interface ItemProps {
    task: string;
    state: string;
    handleTaskStateChange: (isChecked: boolean, id: string) => void;
    handleDeleteTask: (id: string) => void;
    taskId: string
}

const ToDoItem: FunctionComponent<ItemProps> = (props) => {
    const { task, state, handleTaskStateChange, taskId, handleDeleteTask } = props
    return (
        <div className="todo-item-container">

            <div className="todo-item-infos">
                <input type="checkbox" className="todo-checkbox" onChange={(event) => handleTaskStateChange(event.target.checked, taskId)} />
                <span> {task}</span>
            </div>

            <div className="todo-item-state-container">
                <div className="task-state" data-state={state}>{state}</div>
                <img src={DeleteIcon} className="todo-delete-icon" alt="Delete todo item" onClick={() => handleDeleteTask(taskId)} />
            </div>

        </div>
    );
};

export default ToDoItem;