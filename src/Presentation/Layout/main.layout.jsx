
import React from 'react';
import { Outlet} from 'react-router-dom';
// import Navbar from '../Components/Navbar'

const MainLayout= () => {

  return (
    <>
      {/* <Navbar /> */}
      <main className="flex w-full flex-col">
        <div className="mx-auto w-full">
          {/* <div className='bg-white w-10 h-10 rounded-full fixed z-100'></div> */}
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
