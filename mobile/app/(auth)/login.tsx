import FocusAwareStatusBar from "@/components/FocusAwareStatusBar";
import { lighttheme } from "@/constants/colors";
import { images } from "@/constants/images";
import React from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Login() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: lighttheme.BACKGROUND }}>
            <ScrollView
                style={{ flex: 1, padding: 16 }}
                contentContainerStyle={{ paddingBottom: 40 }}
            >
                <View
                    style={{
                        marginTop: 40,
                        marginBottom: 20,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image 
                        source={typeof images.logo_bg === "string" ? { uri: images.logo_bg } : images.logo_bg}
                        style={{
                            width: 80,
                            height: 80,
                            alignSelf: "center"
                        }}
                    />
                </View>
                <Text
                    style={{
                        fontFamily: "Inter_700Bold",
                        textAlign: "center",
                        fontSize: 20
                    }}
                >
                    PocketTrail
                </Text>
                <Text
                    style={{
                        fontFamily: "Inter_400Regular",
                        textAlign: "center",
                        fontSize: 16,
                        marginTop: 5,
                        color: lighttheme.MUTED_FOREGROUND,
                    }}
                >
                    Sign in to your account
                </Text>

                <View style={{ marginTop: '15%' }}>
                    <Text style={{ fontFamily: "Inter_500Medium", marginBottom: 6 }}>
                        Current Password
                    </Text>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: lighttheme.BORDER,
                            borderRadius: 8,
                            paddingHorizontal: 12,
                        }}
                    >
                        <TextInput
                            placeholder="Enter current password"
                            placeholderTextColor={lighttheme.MUTED_FOREGROUND}
                            secureTextEntry
                            style={{ fontFamily: "Inter_400Regular", fontSize: 16 }}
                        />
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily: "Inter_500Medium", marginBottom: 6 }}>
                        New Password
                    </Text>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: lighttheme.BORDER,
                            borderRadius: 8,
                            paddingHorizontal: 12,
                        }}
                    >
                        <TextInput
                            placeholder="Enter new password"
                            placeholderTextColor={lighttheme.MUTED_FOREGROUND}
                            secureTextEntry
                            style={{ fontFamily: "Inter_400Regular", fontSize: 16 }}
                        />
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily: "Inter_500Medium", marginBottom: 6 }}>
                        Confirm Password
                    </Text>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: lighttheme.BORDER,
                            borderRadius: 8,
                            paddingHorizontal: 12,
                        }}
                    >
                        <TextInput
                            placeholder="Confirm new password"
                            placeholderTextColor={lighttheme.MUTED_FOREGROUND}
                            secureTextEntry
                            style={{ fontFamily: "Inter_400Regular", fontSize: 16 }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 12 }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: lighttheme.PRIMARY,
                            borderRadius: 8,
                            paddingVertical: 14,
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                color: "#fff",
                                fontFamily: "Inter_700Bold",
                                fontSize: 16,
                            }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <FocusAwareStatusBar
                backgroundColor={lighttheme.BACKGROUND}
                barStyle="dark-content"
            />
        </SafeAreaView>
    );
}
