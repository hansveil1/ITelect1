// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';

import ChatApp from './ChatApp';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ChatApp/>
    </SafeAreaView>
  );
}