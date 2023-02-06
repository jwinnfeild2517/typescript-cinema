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

const Filter = styled.button`
  background: #fe7f2d;
  color: white;
  border-radius: 5px;
  padding: 0.3rem 1rem;
  font-weight: bold;
  width: 100px;
  margin-bottom: 1.5rem;
  /* margin-right: 1rem; */

  &:hover {
    background-color: #003049;
  }


  @media (min-width: 680px) {
    width: 135px;
  }

  @media (min-width: 1024px) {
    width: 175px;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const FilterButtons = () => {
  const dispatch = useDispatch();
  const filterKeys = Object.keys(FilterOptions);

  const handleClick = async (type: string) => {
    dispatch(changeQuery(type));
  };
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      {filterKeys.map((i: string) => (
        <Filter
          type="button"
          value={i}
          key={i}
          onClick={(e) => handleClick(e.currentTarget.value)}
        >
          {FilterOptions[i as Category]}
        </Filter>
      ))}
    </div>
  );
};
