// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';

import CommentSection from './CommentSection';
import ChatScreen from './ChatScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     
       <ChatScreen/>
        <CommentSection/>
    </SafeAreaView>
  );
}