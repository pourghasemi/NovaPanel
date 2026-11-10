
import { FiSearch } from 'react-icons/fi';

import {
  SearchContainer,
  SearchField,
} from './SearchInput.styles';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = ({
  placeholder,
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <SearchContainer>
      <FiSearch size={18} />

      <SearchField
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchInput;
