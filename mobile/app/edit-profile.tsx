import FocusAwareStatusBar from '@/components/FocusAwareStatusBar';
import { lighttheme } from '@/constants/colors';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Image, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EditProfile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: lighttheme.BACKGROUND, padding: 16 }}>
        <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold", textAlign: 'center', marginTop: '30%' }}>Edit Profile</Text>
        <Text style={{ color: lighttheme.MUTED_FOREGROUND, fontFamily: "Inter_400Regular", textAlign: 'center' }}>Make changes to your profile here. Click save when you're done.</Text>

        <KeyboardAvoidingView>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
            <View style={{ height: 60, width: 60, borderRadius: 40, backgroundColor: lighttheme.SECONDARY, justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
                <Image />
                <Feather name="camera" size={24} color="black" />
            </View>
            <View style={{ width: '100%', gap: 16 }}>
                <View>
                    <Text style={{ fontFamily: 'Inter_500Medium', marginBottom: 6 }}>Full name</Text>
                    <View style={{ borderWidth: 1, borderColor: lighttheme.BORDER, borderRadius: 8, paddingHorizontal: 12 }}>
                        <TextInput
                            placeholder="Enter name"
                            placeholderTextColor={lighttheme.MUTED_FOREGROUND}
                            style={{ fontFamily: 'Inter_400Regular', fontSize: 16 }}
                        />
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily: 'Inter_500Medium', marginBottom: 6 }}>Email</Text>
                    <View style={{ borderWidth: 1, borderColor: lighttheme.BORDER, borderRadius: 8, paddingHorizontal: 12 }}>
                        <TextInput
                            placeholder="Enter email"
                            placeholderTextColor={lighttheme.MUTED_FOREGROUND}
                            style={{ fontFamily: 'Inter_400Regular', fontSize: 16 }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 12 }}>
                    <TouchableOpacity style={{ backgroundColor: lighttheme.PRIMARY, borderRadius: 8, paddingVertical: 14, alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontFamily: 'Inter_700Bold', fontSize: 16 }}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </KeyboardAvoidingView>
        <FocusAwareStatusBar backgroundColor={lighttheme.BACKGROUND} barStyle="dark-content"/>
    </SafeAreaView>
  )
}