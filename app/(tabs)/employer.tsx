import { Pressable, SafeAreaView, Text, View } from "react-native";

import { LoginModal } from "@/components/LoginModal";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const insets = useSafeAreaInsets();

  const [isPayrollBtnVisible, setPayrollBtnVisible] = useState<boolean>(false);

  const onLoginClose = () => {
    setPayrollBtnVisible(true);
    console.log("onLoginClose");
    console.log(isPayrollBtnVisible);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      {!isPayrollBtnVisible && <LoginModal onClose={onLoginClose} />}

      {isPayrollBtnVisible && (
        <View className="mt-10 mx-6  p-6 rounded-xl flex flex-col flex-1 pb-12">
          <View className="my-auto">
            <View className="mx-12">
              <Pressable onPress={() => {}} style={{ opacity: 0.9 }}>
                <Text className="text-white font-bold mt-6 p-4 w-full h-fit bg-slate-500 self-center justify-center text-center align-middle rounded-lg">
                  Upload Payroll
                </Text>
              </Pressable>
            </View>
            <View className="mx-12">
              <Pressable onPress={() => {}} style={{ opacity: 0.9 }}>
                <Text className="text-white font-bold mt-6 p-4 w-full h-fit bg-slate-500 self-center justify-center text-center align-middle rounded-lg">
                  BACK
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    //   headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Explore</ThemedText>
    //   </ThemedView>
    //   <ThemedText>This app includes example code to help you get started.</ThemedText>
    //   <Collapsible title="File-based routing">
    //     <ThemedText>
    //       This app has two screens:{' '}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
    //     </ThemedText>
    //     <ThemedText>
    //       The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
    //       sets up the tab navigator.
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/router/introduction">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Android, iOS, and web support">
    //     <ThemedText>
    //       You can open this project on Android, iOS, and the web. To open the web version, press{' '}
    //       <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
    //     </ThemedText>
    //   </Collapsible>
    //   <Collapsible title="Images">
    //     <ThemedText>
    //       For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
    //       <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
    //       different screen densities
    //     </ThemedText>
    //     <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
    //     <ExternalLink href="https://reactnative.dev/docs/images">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Custom fonts">
    //     <ThemedText>
    //       Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
    //       <ThemedText style={{ fontFamily: 'SpaceMono' }}>
    //         custom fonts such as this one.
    //       </ThemedText>
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Light and dark mode components">
    //     <ThemedText>
    //       This template has light and dark mode support. The{' '}
    //       <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
    //       what the user's current color scheme is, and so you can adjust UI colors accordingly.
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Animations">
    //     <ThemedText>
    //       This template includes an example of an animated component. The{' '}
    //       <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
    //       the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library
    //       to create a waving hand animation.
    //     </ThemedText>
    //     {Platform.select({
    //       ios: (
    //         <ThemedText>
    //           The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
    //           component provides a parallax effect for the header image.
    //         </ThemedText>
    //       ),
    //     })}
    //   </Collapsible>
    // </ParallaxScrollView>
  );
}
