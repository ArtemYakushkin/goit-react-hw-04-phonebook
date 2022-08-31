import PropTypes from "prop-types";
import { FilterLabel, FilterInput } from "./Filter.styled";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        name="filter"
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </FilterLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;