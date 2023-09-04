import * as React from "react";
import SearchInput from "../2/components/searchInput/Input";
import { useSearch } from "../2/components/searchInput/useSearch";
import ToDoItem from "./components/item";
import { v4 as uuidv4 } from 'uuid';

// Style
import "./index.scss";



// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 2
 */

const Task3: React.FunctionComponent = () => {
  const [todoItems, setTodoItems] = React.useState<Array<Record<string, string>>>([])
  const [newTask, setNewTask] = React.useState<string>('');
  const [filteredList, setFilteredList] = React.useState<Array<Record<string, string>>>([...todoItems]);


  const { handleSearch, searchTerm } = useSearch({
    list: filteredList,
    setList: setFilteredList,
    filterKey: 'task',
    initialList: todoItems
  });


  const handleOnAddTask = () => {
    setTodoItems(prevState => [...prevState, { state: 'todo', task: newTask, id: uuidv4() }])
    setFilteredList(prevState => [...prevState, { state: 'todo', task: newTask, id: uuidv4() }])
    setNewTask('');
  }

  const handleTaskStateChange = (isChecked: boolean, id: string) => {
    const updatedList = todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, state: isChecked ? 'done' : 'todo' };
      }
      return item;
    });

    setTodoItems(updatedList);
  }


  const handleDeleteTask = (id: string) => {
    const updatedList = todoItems.filter((item) => item.id !== id);
    setTodoItems(updatedList);
  };


  return (
    <div id="task-3">

      <div className="todo-title">
        Todo - List
      </div>

      <div className="todo-header">
        <SearchInput searchTerm={searchTerm} onSearchTermChange={handleSearch} placeholder="Search For A Task" name="task" />

        <div>
          <input value={newTask} onChange={(event) => setNewTask(event.target.value)} className='add-task-input' placeholder="Add Task" />
          <button onClick={handleOnAddTask} className="add-task-btn">Add</button>

        </div>
      </div>
      {filteredList.map((item) => {
        return <ToDoItem task={item.task} state={item.state} key={item.id} handleTaskStateChange={handleTaskStateChange} handleDeleteTask={handleDeleteTask} taskId={item.id} />
      })}

    </div>
  );
};

export default Task3;
