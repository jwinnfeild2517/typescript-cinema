import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeQuery } from '../store/actions';

const categories = [
  "top_rated",
  "upcoming",
  "popular",
  "now_playing",
] as const

type Category = typeof categories[number]

export const FilterOptions: Record<Category, string> = {
  top_rated: 'Top Rated',
  upcoming: 'Up Coming',
  popular: 'Popular',
  now_playing: 'Now Playing',
};

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

`

const Filter = styled.button`
  background: #fe7f2d;
  color: white;
  border-radius: 5px;
  padding: 0.3rem 1rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  flex: 1;
  margin-right: 15px;

  a {
    color: inherit;
  }

  &:hover {
    background-color: #003049;
  }

`;

export const FilterButtons = () => {
  const dispatch = useDispatch();
  const filterKeys = Object.keys(FilterOptions);

  const handleClick = async (type: string) => {
    dispatch(changeQuery(type));
  };
  return (
    <FilterContainer>
      {filterKeys.map((i: string) => (
        <Filter
          type="button"
          value={i}
          key={i}
          onClick={(e) => handleClick(e.currentTarget.value)}
        >
          <a href='#current-filter'>{FilterOptions[i as Category]}</a>
        </Filter>
      ))}
    </FilterContainer>
  );
};
