
    import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const flatListRef = useRef(null);

  // Send message
  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: Date.now().toString(),
      text: input,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");

    // Auto scroll to the bottom when new message is sent
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  // Render each chat bubble
  const renderItem = ({ item }) => (
    <View style={styles.messageWrapper}>
      <TouchableOpacity style={styles.messageBubble}>
        <Text style={styles.messageText}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.chatContainer}
      />

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#777"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6f8c5", // Light green background
  },
  chatContainer: {
    padding: 10,
  },
  messageWrapper: {
    alignItems: "flex-end", // Aligns messages to the right
    marginBottom: 10,
  },
  messageBubble: {
    backgroundColor: "#3cc7f3", // Blue bubble
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    maxWidth: "70%",
  },
  messageText: {
    fontSize: 16,
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    marginRight: 10,
    color: "#000",
  },
  sendButton: {
    backgroundColor: "#3cc7f3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ChatApp;