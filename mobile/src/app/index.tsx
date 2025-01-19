import { View, Image, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

import { Input } from "@/components/input";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { api } from "@/server/api";
import axios from "axios";

export default function Home() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleAccessCredential() {
    try {
      if (!code.trim()) {
        return Alert.alert("Ingresso", "Informe o código do ingresso");
      }

      setIsLoading(true);

      const responseCheckIn = await api.get(`/attendees/${code}/check-in`);

      if (responseCheckIn.status === 201) {
        setIsLoading(false);
        Alert.alert("Ingresso", "Check-in realizado com sucesso!", [
          { text: "OK", onPress: () => router.push("/ticket") },
        ]);
      }
    } catch (error) {
      console.log(error);

      setIsLoading(false);

      if (axios.isAxiosError(error)) {
        if (
          String(error.response?.data.message).includes("already checked in")
        ) {
          return Alert.alert(
            "Ingresso",
            "Este ingresso já foi utilizado para check-in.",
          );
        }
      }
      Alert.alert("Ingresso", "Ingresso não encontrado!");
    }
  }

  return (
    <View
      className="
    flex-1 
    bg-green-500 
    items-center 
    justify-center 
    p-8
    "
    >
      <StatusBar style="light" />

      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />
      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="Código do ingresso"
            onChangeText={setCode}
          />
        </Input>
        <Button title="Acessar credencial" onPress={handleAccessCredential} />
        <Link
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Ainda não possui ingresso ?
        </Link>
      </View>
    </View>
  );
}
