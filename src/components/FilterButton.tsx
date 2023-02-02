import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeQuery } from '../store/actions';

export const FilterOptions: object = {
  top_rated: 'Top Rated',
  upcoming: 'Up Coming',
  popular: 'Popular',
  now_playing: 'Now Playing',
};

const Filter = styled.button`
  background: #fe7f2d;
  color: white;
  border-radius: 5px;
  padding: 0.3rem 1rem;
  font-weight: bold;
  width: 100%;
  margin-bottom: 1.5rem;

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
    <div>
      {filterKeys.map((i: string) => (
        <Filter
          type="button"
          value={i}
          key={i}
          onClick={(e) => handleClick(e.currentTarget.value)}
        >
          {FilterOptions[i]}
        </Filter>
      ))}
    </div>
  );
};
