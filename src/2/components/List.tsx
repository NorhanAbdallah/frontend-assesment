import { FunctionComponent } from "react";
import { DummyList } from "..";

// Components
import Item from "./Item";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  items: DummyList
}

const List: FunctionComponent<ListProps> = (props) => {
  const { items } = props;
  return (
    <div>
      {items.map(({ id, name }) => {
        return <Item key={id} name={name} />
      })}
    </div>
  );
};

export default List;
