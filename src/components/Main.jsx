import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';
import Homepage from './Homepage';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </main>
  );
};

export default Main;
