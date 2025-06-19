import FocusAwareStatusBar from '@/components/FocusAwareStatusBar'
import { lighttheme } from '@/constants/colors'
import React from 'react'
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'

export default function SmsPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: lighttheme.BACKGROUND }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: lighttheme.BACKGROUND, borderBottomWidth: 1, borderBottomColor: lighttheme.BORDER, elevation: 1 }}>
            <View>
                <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold", }}>SMS Parser</Text>
                <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>Automatically detected messages</Text>
            </View>
        </View>

        <View style={{ paddingBottom: 10, marginHorizontal: 16 }}>
          <View style={{ paddingHorizontal: 2, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 10 }}>
            <TextInput
            placeholder='Search messages...'
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
          <View style={{ paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
            <View style={{ borderBottomColor: lighttheme.BORDER, borderBottomWidth: 1, paddingBottom: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} >
                <View>
                  <Text style={{ fontSize: 14, fontFamily: 'Inter_600SemiBold' }}>BANK-ALERT</Text>
                  <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>12th June 2025</Text>
                </View>
                <View style={{ backgroundColor: '#f5bebe', paddingVertical: 2, paddingHorizontal: 4, borderRadius: 4 }}>
                  <Text style={{ fontFamily: 'Inter_400Regular', color: lighttheme.DESTRUCTIVE }}>Expense</Text>
                </View>
              </View>
              <Text style={{ fontSize: 12, fontFamily: 'Inter_400Regular', marginTop: 8 }}>You have spent $150.00 on groceries at SuperMart.</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <View>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Amount</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.DESTRUCTIVE }}>-$150.00</Text>
              </View>
              <View>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Merchant</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular' }}>Grocery store</Text>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Category</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_600SemiBold' }}>Food</Text>
              </View>
          </View>

          <View style={{ paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
            <View style={{ borderBottomColor: lighttheme.BORDER, borderBottomWidth: 1, paddingBottom: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} >
                <View>
                  <Text style={{ fontSize: 14, fontFamily: 'Inter_600SemiBold' }}>BANK-ALERT</Text>
                  <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>12th June 2025</Text>
                </View>
                <View style={{ backgroundColor: '#ccf1e1', paddingVertical: 2, paddingHorizontal: 4, borderRadius: 4 }}>
                  <Text style={{ fontFamily: 'Inter_400Regular', color: lighttheme.PRIMARY }}>Income</Text>
                </View>
              </View>
              <Text style={{ fontSize: 12, fontFamily: 'Inter_400Regular', marginTop: 8 }}>You have spent $150.00 on groceries at SuperMart.</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <View>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Amount</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.PRIMARY }}>+$150.00</Text>
              </View>
              <View>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Merchant</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular' }}>Company</Text>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Category</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_600SemiBold' }}>Salary</Text>
              </View>
          </View>

          <View style={{ paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
            <View style={{ borderBottomColor: lighttheme.BORDER, borderBottomWidth: 1, paddingBottom: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} >
                <View>
                  <Text style={{ fontSize: 14, fontFamily: 'Inter_600SemiBold' }}>BANK-ALERT</Text>
                  <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>12th June 2025</Text>
                </View>
                <View style={{ backgroundColor: '#ccf1e1', paddingVertical: 2, paddingHorizontal: 4, borderRadius: 4 }}>
                  <Text style={{ fontFamily: 'Inter_400Regular', color: lighttheme.PRIMARY }}>Income</Text>
                </View>
              </View>
              <Text style={{ fontSize: 12, fontFamily: 'Inter_400Regular', marginTop: 8 }}>You have spent $150.00 on groceries at SuperMart.</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <View>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Amount</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.PRIMARY }}>+$150.00</Text>
              </View>
              <View>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Merchant</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular' }}>Company</Text>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Category</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_600SemiBold' }}>Salary</Text>
              </View>
          </View>

          <View style={{ paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
            <View style={{ borderBottomColor: lighttheme.BORDER, borderBottomWidth: 1, paddingBottom: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} >
                <View>
                  <Text style={{ fontSize: 14, fontFamily: 'Inter_600SemiBold' }}>BANK-ALERT</Text>
                  <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>12th June 2025</Text>
                </View>
                <View style={{ backgroundColor: '#ccf1e1', paddingVertical: 2, paddingHorizontal: 4, borderRadius: 4 }}>
                  <Text style={{ fontFamily: 'Inter_400Regular', color: lighttheme.PRIMARY }}>Income</Text>
                </View>
              </View>
              <Text style={{ fontSize: 12, fontFamily: 'Inter_400Regular', marginTop: 8 }}>You have spent $150.00 on groceries at SuperMart.</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <View>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Amount</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.PRIMARY }}>+$150.00</Text>
              </View>
              <View>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Merchant</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular' }}>Company</Text>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Category</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_600SemiBold' }}>Salary</Text>
              </View>
          </View>
        </ScrollView>
        <FocusAwareStatusBar backgroundColor={lighttheme.BACKGROUND} barStyle="dark-content"/>
    </SafeAreaView>
  )
}