import { FunctionComponent, useState } from "react";

// Components
import SearchInput from "./components/searchInput/Input";
import List from "./components/List";
import { useSearch } from "./components/searchInput/useSearch";

export type DummyList = Array<Record<'id' | 'name', string>>


const dummyList: DummyList = [
  { id: '1', name: "John Doe" },
  { id: '2', name: "Alice Smith" },
  { id: '3', name: "Bob Johnson" },
  { id: '4', name: "Eva Williams" },
  { id: '5', name: "Michael Brown" },
  { id: '6', name: "Sarah Wilson" },
  { id: '7', name: "David Lee" },
  { id: '8', name: "Linda Clark" },
  { id: '9', name: "Chris Adams" },
  { id: '10', name: "Emma Taylor" },
  { id: '11', name: "James Anderson" },
  { id: '12', name: "Olivia White" },
  { id: '13', name: "William Martinez" },
  { id: '14', name: "Sophia Moore" },
  { id: '15', name: "Daniel Harris" }
];

const Task2: FunctionComponent = () => {

  const [listItems, setListItems] = useState<DummyList>(dummyList);

  const {
    searchTerm,
    handleSearch
  } = useSearch({
    list: listItems,
    setList: setListItems,
    filterKey: 'name',
    initialList: dummyList
  })

  return (
    <div>
      <SearchInput searchTerm={searchTerm} onSearchTermChange={handleSearch} placeholder="name" name="name" />
      <br />
      {listItems.length > 0 ? <List items={listItems} /> : <div>No Data Was Found</div>}
    </div>
  );
};

export default Task2;
