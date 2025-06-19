import FocusAwareStatusBar from '@/components/FocusAwareStatusBar';
import { lighttheme } from '@/constants/colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

export default function Setting() {
  const [smsToggle, setSmsToggle] = React.useState(false);
  const [pushToggle, setPushToggle] = React.useState(false);
  const [biometricToggle, setBiometricToggle] = React.useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: lighttheme.BACKGROUND }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: lighttheme.BACKGROUND, borderBottomWidth: 1, borderBottomColor: lighttheme.BORDER, elevation: 1 }}>
            <View>
                <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold", }}>Settings</Text>
                <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>Manage your preferences</Text>
            </View>
        </View>

        <ScrollView style={{ flex: 1, padding: 16 }} contentContainerStyle={{ paddingBottom: 40 }}>
          <View style={{ padding: 16, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER }}>
            <View>
                <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold" }}>Profile</Text>
                <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>Your account information and preferences</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 16 }}>
              <View style={{ height: 60, width: 60, borderRadius: 40, backgroundColor: lighttheme.SECONDARY, justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
                <Image />
              </View>
              <View>
                <Text style={{ fontSize: 16, fontFamily: 'Inter_500SemiBold', marginTop: 16 }}>test</Text>
                <Text style={{ fontSize: 14, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>test@gmail.com</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => router.push('/edit-profile')} style={{ padding: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <AntDesign name="user" size={22} color="black" />
                <Text style={{ fontSize: 14, fontFamily: 'Inter_400Regular' }}>Edit Profile</Text>
              </View>
              <Ionicons name="chevron-forward" size={22} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/security')} style={{ padding: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Feather name="shield" size={22} color="black" />
                <Text style={{ fontSize: 14, fontFamily: 'Inter_400Regular' }}>Security & Privacy</Text>
              </View>
              <Ionicons name="chevron-forward" size={22} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{ padding: 16, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 20 }}>
            <View>
                <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold" }}>App Preferences</Text>
                <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>Customize your app experience</Text>
            </View>
            
            <View style={{ padding: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ backgroundColor: "#ccf1e1", height: 40, width: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                  <Feather name="message-square" size={24} color={lighttheme.PRIMARY} />
                </View>
                <View style={{ width: "65%" }}>
                  <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', fontWeight: 'bold' }}>SMS Sync</Text>
                  <Text style={{ fontSize: 12, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Automatically parse SMS transactions</Text>
                </View>
              </View>
              <ToggleSwitch
                isOn={smsToggle}
                onColor={lighttheme.PRIMARY}
                offColor={lighttheme.SECONDARY}
                size="medium"
                onToggle={() => setSmsToggle(!smsToggle)}
              />
            </View>
            
            <View style={{ padding: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <View style={{ backgroundColor: "#ccf1e1", height: 40, width: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <EvilIcons name="bell" size={28} color={lighttheme.PRIMARY} />
                  </View>
                  <View style={{ width: "65%" }}>
                    <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', fontWeight: 'bold' }}>Push Notifications</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Get notified about new transactions</Text>
                  </View>
                </View>
                <ToggleSwitch
                  isOn={pushToggle}
                  onColor={lighttheme.PRIMARY}
                  offColor={lighttheme.SECONDARY}
                  size="medium"
                  onToggle={() => setPushToggle(!pushToggle)}
                />
            </View>

            <View style={{ padding: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <View style={{ backgroundColor: "#ccf1e1", height: 40, width: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome name="mobile-phone" size={24} color={lighttheme.PRIMARY} />
                  </View>
                  <View style={{ width: "65%" }}>
                    <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', fontWeight: 'bold' }}>Biometric Authentication</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Use fingerprint or face recognition</Text>
                  </View>
              </View>
                <ToggleSwitch
                  isOn={biometricToggle}
                  onColor={lighttheme.PRIMARY}
                  offColor={lighttheme.SECONDARY}
                  size="medium"
                  onToggle={() => setBiometricToggle(!biometricToggle)}
                />
            </View>
          </View>

          <View style={{ padding: 16, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 20 }}>
            <View>
                <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold" }}>Data & Privacy</Text>
                <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>Manage your data and privacy settings</Text>
            </View>
            
            <View style={{ padding: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Feather name="trash-2" size={22} color={lighttheme.DESTRUCTIVE} />
                <Text style={{ fontSize: 14, fontFamily: 'Inter_400Regular', color: lighttheme.DESTRUCTIVE }}>Delete Account</Text>
              </View>
              <Ionicons name="chevron-forward" size={22} color={lighttheme.DESTRUCTIVE} />
            </View>
          </View>

          <View style={{ padding: 16, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 20 }}>
            <View>
                <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold" }}>Support</Text>
                <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>Get help and learn more about the app</Text>
            </View>
            
            <View style={{ padding: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Feather name="help-circle" size={22} color="black" />
                <Text style={{ fontSize: 14, fontFamily: 'Inter_400Regular' }}>Help Center</Text>
              </View>
              <Ionicons name="chevron-forward" size={22} color="black" />
            </View>
          </View>

          <View style={{ paddingHorizontal: 16, paddingVertical: 12, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 20, backgroundColor: lighttheme.DESTRUCTIVE, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
            <MaterialIcons name="logout" size={22} color="white" />
            <Text style={{ fontSize: 14, fontFamily: "Inter_400Regular", color: "white" }}>Sign Out</Text>
          </View>
          <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular', textAlign: 'center', marginTop: 20 }}>Version 1.0.0</Text>
        </ScrollView>
        <FocusAwareStatusBar backgroundColor={lighttheme.BACKGROUND} barStyle="dark-content"/>
    </SafeAreaView>
  )
}