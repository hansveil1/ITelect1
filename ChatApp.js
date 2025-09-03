import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ChatApp = () => {
  const [messages, setMessages] = useState([]); // Store messages
  const [input, setInput] = useState(""); // Store input text

  // Function to send a message
  const sendMessage = () => {
    if (input.trim() === "") return; // Prevent empty messages

    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages([...messages, newMessage]); // Add to list
    setInput(""); // Clear input
  };

  // Render each message bubble
  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === "user" ? styles.userBubble : styles.otherBubble,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Messages List */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageContainer}
      />

      {/* Input Field & Send Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#999"
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

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1f7c4", // Light green background like in the image
    padding: 10,
  },
  messageContainer: {
    flexGrow: 1,
    justifyItem: "center",
  },
  messageBubble: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    maxWidth: "75%",
  },
  userBubble: {
    backgroundColor: "#4CAF50", // Green bubble for sent messages
    alignSelf: "flex-end",
  },
  otherBubble: {
    backgroundColor: "#2196F3", // Blue bubble for received messages
    alignSelf: "flex-start",
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 30,
    elevation: 3,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#000",
  },
  sendButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  sendText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ChatApp;