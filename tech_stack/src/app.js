import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';  // implies index.js
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    // props are passed in to <Provider as a prop
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;

// Notes:
// Provider is a React component that aids communication between
// React and Redux