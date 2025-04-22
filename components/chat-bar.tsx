import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from "react-native-reanimated";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Icon from "./icon";

const BAR_WIDTH = 292;
const BAR_HEIGHT = 88;

const ChatBar = () => {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const [showMedias, setShowMedias] = useState(false);

  const addButtonRotation = useSharedValue(0);
  const containerRotation = useSharedValue(0);
  const optionsRotation = useSharedValue(0);

  const handlePress = () => {
    setShowMedias((prev) => !prev);

    addButtonRotation.value = withTiming(showMedias ? 0 : -135);
    optionsRotation.value = withTiming(showMedias ? 0 : -90);
    containerRotation.value = withSequence(
      withTiming(showMedias ? 5 : -5),
      withTiming(0)
    );
  };

  const rAddButtonStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${addButtonRotation.value}deg` }],
  }));

  const rContainerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: -BAR_WIDTH / 2 },
      { rotate: `${containerRotation.value}deg` },
      { translateX: BAR_WIDTH / 2 },
    ],
  }));

  const rOptionsStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: -BAR_WIDTH / 2 },
      { rotate: `${optionsRotation.value}deg` },
      { translateX: BAR_WIDTH / 2 },
    ],
  }));

  return (
    <Animated.View style={[styles.container, rContainerStyle]}>
      <Animated.View style={[styles.optionsContainer, rOptionsStyle]}>
        <View style={styles.message}>
          <View style={styles.textInput}>
            <Text style={styles.text}>Message</Text>
          </View>
        </View>
        <View style={styles.medias}>
          <Icon name="videocam-outline" />
          <Icon name="camera-outline" />
          <Icon name="image-outline" />
        </View>
      </Animated.View>
      <AnimatedPressable onPress={handlePress} style={rAddButtonStyle}>
        <Icon name="add-outline" />
      </AnimatedPressable>
    </Animated.View>
  );
};

export default ChatBar;

const styles = StyleSheet.create({
  container: {
    height: BAR_HEIGHT,
    width: BAR_WIDTH,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    padding: 20,
    borderRadius: 44,
    backgroundColor: "#633dfe",
  },
  message: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    paddingLeft: 88,
  },
  optionsContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  textInput: {
    backgroundColor: "#8264ff",
    height: BAR_HEIGHT - 40,
    justifyContent: "center",
    paddingLeft: 20,
    borderRadius: 24,
  },
  medias: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    paddingLeft: 88,
    flexDirection: "row",
    justifyContent: "space-between",
    transform: [
      { translateX: -BAR_WIDTH / 2 },
      { rotate: "90deg" },
      { translateX: BAR_WIDTH / 2 },
    ],
  },
  text: {
    color: "#ad9afd",
  },
});
