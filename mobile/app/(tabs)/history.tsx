import FocusAwareStatusBar from '@/components/FocusAwareStatusBar'
import { lighttheme } from '@/constants/colors'
import React from 'react'
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'

export default function History() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: lighttheme.BACKGROUND }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: lighttheme.BACKGROUND, borderBottomWidth: 1, borderBottomColor: lighttheme.BORDER, elevation: 1 }}>
            <View>
                <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold", }}>Transaction History</Text>
                <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>View and search your transactions</Text>
            </View>
        </View>

        <View style={{ paddingBottom: 10, marginHorizontal: 16 }}>
          <View style={{ paddingHorizontal: 2, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 10 }}>
            <TextInput
            placeholder='Search transactions...'
            placeholderTextColor={lighttheme.MUTED_FOREGROUND}
            style={{
              padding: 12,
              fontFamily: 'Inter_400Regular',
              color: lighttheme.FOREGROUND,
            }}
            />
          </View>
        </View>

        <ScrollView style={{ flex: 1, padding: 16, paddingTop: 0 }} contentContainerStyle={{ paddingBottom: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ alignItems: 'center', backgroundColor: '#ccf1e1', padding: 14, borderRadius: '50%', width: '25%', alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Inter_700Bold', color: lighttheme.PRIMARY, fontSize: 20 }}>G</Text>
                </View>
                <View>
                  <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 15}}>Grocery store</Text>
                  <Text style={{ color: lighttheme.MUTED_FOREGROUND }}>Sep 20, 2023</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: 'red', fontFamily: 'Inter_700Bold', fontSize: 15}}>-$64.20</Text>
                <Text style={{ color: lighttheme.MUTED_FOREGROUND, textAlign: 'right' }}>Food</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ alignItems: 'center', backgroundColor: '#ccf1e1', padding: 14, borderRadius: '50%', width: '25%', alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Inter_700Bold', color: lighttheme.PRIMARY, fontSize: 20 }}>S</Text>
                </View>
                <View>
                  <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 15}}>Salary deposit</Text>
                  <Text style={{ color: lighttheme.MUTED_FOREGROUND }}>Sep 20, 2023</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: 'green', fontFamily: 'Inter_700Bold', fontSize: 15}}>+$2164.20</Text>
                <Text style={{ color: lighttheme.MUTED_FOREGROUND, textAlign: 'right' }}>Income</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ alignItems: 'center', backgroundColor: '#ccf1e1', padding: 14, borderRadius: '50%', width: '25%', alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Inter_700Bold', color: lighttheme.PRIMARY, fontSize: 20 }}>S</Text>
                </View>
                <View>
                  <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 15}}>Salary deposit</Text>
                  <Text style={{ color: lighttheme.MUTED_FOREGROUND }}>Sep 20, 2023</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: 'green', fontFamily: 'Inter_700Bold', fontSize: 15}}>+$2164.20</Text>
                <Text style={{ color: lighttheme.MUTED_FOREGROUND, textAlign: 'right' }}>Income</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ alignItems: 'center', backgroundColor: '#ccf1e1', padding: 14, borderRadius: '50%', width: '25%', alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Inter_700Bold', color: lighttheme.PRIMARY, fontSize: 20 }}>S</Text>
                </View>
                <View>
                  <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 15}}>Salary deposit</Text>
                  <Text style={{ color: lighttheme.MUTED_FOREGROUND }}>Sep 20, 2023</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: 'green', fontFamily: 'Inter_700Bold', fontSize: 15}}>+$2164.20</Text>
                <Text style={{ color: lighttheme.MUTED_FOREGROUND, textAlign: 'right' }}>Income</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ alignItems: 'center', backgroundColor: '#ccf1e1', padding: 14, borderRadius: '50%', width: '25%', alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Inter_700Bold', color: lighttheme.PRIMARY, fontSize: 20 }}>S</Text>
                </View>
                <View>
                  <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 15}}>Salary deposit</Text>
                  <Text style={{ color: lighttheme.MUTED_FOREGROUND }}>Sep 20, 2023</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: 'green', fontFamily: 'Inter_700Bold', fontSize: 15}}>+$2164.20</Text>
                <Text style={{ color: lighttheme.MUTED_FOREGROUND, textAlign: 'right' }}>Income</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ alignItems: 'center', backgroundColor: '#ccf1e1', padding: 14, borderRadius: '50%', width: '25%', alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Inter_700Bold', color: lighttheme.PRIMARY, fontSize: 20 }}>S</Text>
                </View>
                <View>
                  <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 15}}>Salary deposit</Text>
                  <Text style={{ color: lighttheme.MUTED_FOREGROUND }}>Sep 20, 2023</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: 'green', fontFamily: 'Inter_700Bold', fontSize: 15}}>+$2164.20</Text>
                <Text style={{ color: lighttheme.MUTED_FOREGROUND, textAlign: 'right' }}>Income</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ alignItems: 'center', backgroundColor: '#ccf1e1', padding: 14, borderRadius: '50%', width: '25%', alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Inter_700Bold', color: lighttheme.PRIMARY, fontSize: 20 }}>S</Text>
                </View>
                <View>
                  <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 15}}>Salary deposit</Text>
                  <Text style={{ color: lighttheme.MUTED_FOREGROUND }}>Sep 20, 2023</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: 'green', fontFamily: 'Inter_700Bold', fontSize: 15}}>+$2164.20</Text>
                <Text style={{ color: lighttheme.MUTED_FOREGROUND, textAlign: 'right' }}>Income</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ alignItems: 'center', backgroundColor: '#ccf1e1', padding: 14, borderRadius: '50%', width: '25%', alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Inter_700Bold', color: lighttheme.PRIMARY, fontSize: 20 }}>S</Text>
                </View>
                <View>
                  <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 15}}>Salary deposit</Text>
                  <Text style={{ color: lighttheme.MUTED_FOREGROUND }}>Sep 20, 2023</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: 'green', fontFamily: 'Inter_700Bold', fontSize: 15}}>+$2164.20</Text>
                <Text style={{ color: lighttheme.MUTED_FOREGROUND, textAlign: 'right' }}>Income</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ alignItems: 'center', backgroundColor: '#ccf1e1', padding: 14, borderRadius: '50%', width: '25%', alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Inter_700Bold', color: lighttheme.PRIMARY, fontSize: 20 }}>S</Text>
                </View>
                <View>
                  <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 15}}>Salary deposit</Text>
                  <Text style={{ color: lighttheme.MUTED_FOREGROUND }}>Sep 20, 2023</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: 'green', fontFamily: 'Inter_700Bold', fontSize: 15}}>+$2164.20</Text>
                <Text style={{ color: lighttheme.MUTED_FOREGROUND, textAlign: 'right' }}>Income</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ alignItems: 'center', backgroundColor: '#ccf1e1', padding: 14, borderRadius: '50%', width: '25%', alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Inter_700Bold', color: lighttheme.PRIMARY, fontSize: 20 }}>S</Text>
                </View>
                <View>
                  <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 15}}>Salary deposit</Text>
                  <Text style={{ color: lighttheme.MUTED_FOREGROUND }}>Sep 20, 2023</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: 'green', fontFamily: 'Inter_700Bold', fontSize: 15}}>+$2164.20</Text>
                <Text style={{ color: lighttheme.MUTED_FOREGROUND, textAlign: 'right' }}>Income</Text>
              </View>
            </View>
        </ScrollView>
        <FocusAwareStatusBar backgroundColor={lighttheme.BACKGROUND} barStyle="dark-content"/>
    </SafeAreaView>
  )
}