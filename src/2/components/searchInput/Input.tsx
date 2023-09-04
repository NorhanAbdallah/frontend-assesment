import { FunctionComponent } from "react";
import "./index.scss";
/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  searchTerm?: string;
  onSearchTermChange: (searchTerm: string) => void;
  placeholder: string;
  name: string;
}

const SearchInput: FunctionComponent<InputProps> = (props) => {
  const { onSearchTermChange, searchTerm, placeholder, name } = props


  return (
    <input
      name={name}
      placeholder={placeholder}
      value={searchTerm}
      onChange={(event) => onSearchTermChange(event.target.value)}
      className="search-input"
    />
  );
};

export default SearchInput;
