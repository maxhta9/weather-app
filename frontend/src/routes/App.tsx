import React from 'react';
import CardComponent from '../components/card.component';
import NavigationBar from '../containers/navigation_bar.container';
import MainPage from '../containers/main_page.container';
import SideBar from '../containers/side_bar.container';
import logo from './logo.svg';

function App() {
  return (
    <div className='flex h-screen w-screen bg-gray-50'>
      <NavigationBar/>
      <MainPage/>
      <SideBar/>
    </div>
  );
}

export default App;
