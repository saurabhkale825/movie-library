import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchFilteredMovies } from '../Redux/MovieReducer/action'; // Import the action to fetch data

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const ratings = [1, 2, 3, 4, 5];
  const selectedRatings = params.getAll('rating');
  const sortOrder = params.get('order');

  // Initialize the Redux store with filtered and sorted data
  useEffect(() => {
    dispatch(fetchFilteredMovies({ ratings: selectedRatings, order: sortOrder }));
  }, [selectedRatings, sortOrder, dispatch]);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    const params = new URLSearchParams(location.search);

    if (event.target.checked) {
      params.append('rating', value);
    } else {
      const ratings = params.getAll('rating').filter((rating) => rating !== value);
      params.delete('rating');
      ratings.forEach((rating) => params.append('rating', rating));
    }

    navigate({ search: params.toString() });

    // Dispatch action to update movies based on new filter
    dispatch(fetchFilteredMovies({ ratings: params.getAll('rating'), order: params.get('order') }));
  };

  const handleSortChange = (event) => {
    const params = new URLSearchParams(location.search);
    params.set('order', event.target.value);

    navigate({ search: params.toString() });

    // Dispatch action to update movies based on new sort order
    dispatch(fetchFilteredMovies({ ratings: params.getAll('rating'), order: event.target.value }));
  };

  return (
    <div className='sidebar'>
      <h2>Filter by Rating</h2>
      {ratings.map((rating) => (
        <div key={rating}>
          <input
            type="checkbox"
            value={rating}
            checked={selectedRatings.includes(rating.toString())}
            onChange={handleFilterChange}
          />
          <label>{rating}</label>
        </div>
      ))}
      <h2>Sort by Year</h2>
      <div>
        <input
          type="radio"
          name="order"
          value="asc"
          checked={sortOrder === 'asc'}
          onChange={handleSortChange}
        />
        <label>Ascending</label>
      </div>
      <div>
        <input
          type="radio"
          name="order"
          value="desc"
          checked={sortOrder === 'desc'}
          onChange={handleSortChange}
        />
        <label>Descending</label>
      </div>
    </div>
  );
};

export default SideBar;
