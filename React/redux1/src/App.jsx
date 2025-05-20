import React from 'react';
import Counter from './features/counter/Counter';
import UsersList from './Components/UsersList';

const App = () => {
  return (
    <div>
      <h1>Fetch example using redux toolkit</h1>
      {/* <Counter /> */}
      <UsersList />
    </div>
  );
};

export default App;
