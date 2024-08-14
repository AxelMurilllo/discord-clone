import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './shared/store';
import MainComponent from './components/MainComponent';
import React from 'react';
import MainDisplay from './components/main-subs/MainDisplay';
import SubDisplay from './components/server-sub/SubDisplay';


const App = React.memo(() => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" 
          element={<MainComponent />} 
          children = {[
            <Route 
              path="server/:serverId"
              element={<MainDisplay />}
              children={[
                <Route 
                  path="channel/:channelId"
                  element={<SubDisplay />}
                />
              ]}
             />
            ]}
          />
        </Routes>
      </Router>
    </Provider>
  );
})


export default App