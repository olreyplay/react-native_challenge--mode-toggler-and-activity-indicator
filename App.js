import React, { useState } from "react";
import {
  View,
  Switch,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  StyleSheet,
} from "react-native";

// Define the main component
const App = () => {
  // State variables to manage dark mode, duration input, and loading indicator
  const [darkMode, setDarkMode] = useState(false);
  const [duration, setDuration] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to handle changes in duration input
  const handleDurationChange = (text) => {
    // Validate if input is numeric
    if (/^\d+$/.test(text)) {
      setDuration(text);
    } else {
      setDuration("");
    }
  };

  // Function to show activity indicator for the specified duration
  const handleShowActivityIndicator = () => {
    if (duration !== "") {
      setIsLoading(true); // Show loading indicator
      setDuration(""); // Clear duration input
      setTimeout(() => {
        setIsLoading(false); // Hide loading indicator after specified duration
      }, duration * 1000);
    }
  };

  // JSX to render the component
  return (
    <View style={[styles.container, darkMode && styles.darkMode]}>
      {/* Toggle switch for dark mode */}
      <View style={styles.toggleContainer}>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
      {/* Input field for duration and button to show activity indicator */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Duration (seconds)"
          keyboardType="numeric"
          onChangeText={handleDurationChange}
          value={duration}
        />
        <TouchableOpacity onPress={handleShowActivityIndicator}>
          <Text style={styles.buttonText}>Show Activity Indicator</Text>
        </TouchableOpacity>
      </View>
      {/* Loading indicator */}
      {isLoading && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

export default App;

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  darkMode: {
    backgroundColor: "#333",
    color: "#fff",
  },
  toggleContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "bold",
  },
  activityIndicator: {
    marginTop: 20,
  },
});
