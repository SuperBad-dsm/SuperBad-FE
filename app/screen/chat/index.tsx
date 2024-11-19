import { BackIcon, People } from "@/assets/icons";
import SearchInput from "@/components/common/searchInput";
import { font, theme } from "@/utils/function/color/constant";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { changeEventType } from "../login";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Message = {
  id: number;
  text: string;
};

export const SuperChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleChange = ({ text }: changeEventType) => {
    setNewMessage(text);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const savedMessages = await AsyncStorage.getItem("messages");
        if (savedMessages) {
          setMessages(JSON.parse(savedMessages));
        }
      } catch (error) {
        console.error("Failed to load messages", error);
      }
    };
    fetchMessages();
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMessageObject = {
      id: messages.length + 1,
      text: newMessage,
    };

    const updatedMessages = [...messages, newMessageObject];
    setMessages(updatedMessages);
    setNewMessage("");

    AsyncStorage.setItem("messages", JSON.stringify(updatedMessages));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.top}>
          <BackIcon />
          <View style={{ width: 38, height: 38, marginLeft: 10 }}>
            <People Fill={theme.color.GRAY[300]} />
          </View>
          <View>
            <Text
              style={[font.subTitle["18-bold"], { color: theme.color.white }]}
            >
              이나경
            </Text>
            <Text
              style={[
                font.caption["12-regular"],
                { color: theme.color.GRAY[300] },
              ]}
            >
              chojang0124
            </Text>
          </View>
        </View>

        <ScrollView style={styles.chatContainer}>
          {messages.map((message) => (
            <View key={message.id} style={styles.chat}>
              <Text
                style={[font.body["16-medium"], { color: theme.color.black }]}
              >
                {message.text}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View
          style={{ width: "100%", bottom: 16, position: "absolute", left: 30 }}
        >
          <SearchInput
            value={newMessage}
            onChange={handleChange}
            onClick={handleSendMessage}
            type="send"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.black,
    height: "100%",
    paddingHorizontal: 26,
    paddingVertical: 20,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 80,
    marginTop: 60,
  },
  chat: {
    backgroundColor: theme.color.YELLOW,
    color: theme.color.black,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginVertical: 5,
    alignSelf: "flex-end",
    maxWidth: "80%",
    flexWrap: "wrap",
  },
  top: {
    flexDirection: "row",
    gap: 14,
    position: "absolute",
    top: 0,
    paddingHorizontal: 26,
    paddingVertical: 20,
    alignItems: "center",
  },
});
