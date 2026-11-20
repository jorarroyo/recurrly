import { SplashScreen, Stack } from "expo-router";
import '@/global.css';
import { useEffect } from "react";

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
    useEffect(() => {
        SplashScreen.hideAsync().then();
    }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}
