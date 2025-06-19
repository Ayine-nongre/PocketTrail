import FocusAwareStatusBar from '@/components/FocusAwareStatusBar';
import { lighttheme } from '@/constants/colors';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function security() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: lighttheme.BACKGROUND, padding: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: '30%', justifyContent: 'center' }}>
            <Feather name="shield" size={22} color="black" />
            <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold", }}>Security Settings</Text>
        </View>
        <Text style={{ color: lighttheme.MUTED_FOREGROUND, fontFamily: "Inter_400Regular", textAlign: 'center' }}>Manage your account security and privacy settings.</Text>

        <KeyboardAvoidingView>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
            <View style={{ width: '100%', gap: 16 }}>
                <View>
                    <Text style={{ fontFamily: 'Inter_500Medium', marginBottom: 6 }}>Current Password</Text>
                    <View style={{ borderWidth: 1, borderColor: lighttheme.BORDER, borderRadius: 8, paddingHorizontal: 12 }}>
                        <TextInput
                            placeholder="Enter current password"
                            placeholderTextColor={lighttheme.MUTED_FOREGROUND}
                            secureTextEntry
                            style={{ fontFamily: 'Inter_400Regular', fontSize: 16 }}
                        />
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily: 'Inter_500Medium', marginBottom: 6 }}>New Password</Text>
                    <View style={{ borderWidth: 1, borderColor: lighttheme.BORDER, borderRadius: 8, paddingHorizontal: 12 }}>
                        <TextInput
                            placeholder="Enter new password"
                            placeholderTextColor={lighttheme.MUTED_FOREGROUND}
                            secureTextEntry
                            style={{ fontFamily: 'Inter_400Regular', fontSize: 16 }}
                        />
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily: 'Inter_500Medium', marginBottom: 6 }}>Confirm Password</Text>
                    <View style={{ borderWidth: 1, borderColor: lighttheme.BORDER, borderRadius: 8, paddingHorizontal: 12 }}>
                        <TextInput
                            placeholder="Confirm new password"
                            placeholderTextColor={lighttheme.MUTED_FOREGROUND}
                            secureTextEntry
                            style={{ fontFamily: 'Inter_400Regular', fontSize: 16 }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 12 }}>
                    <TouchableOpacity style={{ backgroundColor: lighttheme.PRIMARY, borderRadius: 8, paddingVertical: 14, alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontFamily: 'Inter_700Bold', fontSize: 16 }}>Change Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </KeyboardAvoidingView>
        <FocusAwareStatusBar backgroundColor={lighttheme.BACKGROUND} barStyle="dark-content"/>
    </SafeAreaView>
  )
}