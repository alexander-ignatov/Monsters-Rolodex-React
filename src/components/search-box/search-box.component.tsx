import './search-box.styles.css';
import { ChangeEventHandler } from 'react';


type SearchBoxProps = {
  className: string;
  placeholder?: string; // | null
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <div>
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
