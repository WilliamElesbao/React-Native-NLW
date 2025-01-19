import { ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <ActivityIndicator className="flex-1 bg-color-500 items-center justify-center text-orange-500" />
  );
}
