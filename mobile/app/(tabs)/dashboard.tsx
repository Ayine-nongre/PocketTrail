import FocusAwareStatusBar from '@/components/FocusAwareStatusBar'
import { lighttheme } from '@/constants/colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { CurveType, LineChart } from 'react-native-gifted-charts'

export default function Dashboard() {
  const data=[ 
    {value:120, label: 'Sun'},
    {value:50, label: 'Mon'},
    {value:80, label: 'Tue'},
    {value:90, label: 'Wed'},
    {value:70, label: 'Thu'},
    {value:100, label: 'Fri'},
    {value:60, label: 'Sat'},
    
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: lighttheme.BACKGROUND }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: lighttheme.BACKGROUND, borderBottomWidth: 1, borderBottomColor: lighttheme.BORDER, elevation: 1 }}>
            <View>
                <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold", }}>Dashboard</Text>
                <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>Welcome back, test</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
                <Ionicons name="notifications-outline" size={22} color="black" />
                <View style={{ backgroundColor: 'gray', borderRadius: '50%', width: 35, height: 35 }}>
                  {/* <Image source={images.user_pfp} style={{ width: 30, height: 30 }} resizeMethod='fill'/> */}
                </View>
            </View>
        </View>

        <ScrollView style={{ flex: 1, padding: 16 }} contentContainerStyle={{ paddingBottom: 40 }}>
          <View style={{ padding: 16, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER }}>
            <Text style={{ fontSize: 14, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Total Balance</Text>
            <Text style={{ fontSize: 26, fontWeight: 'bold', fontFamily: 'Inter_700Bold' }}>$1,234.56</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center',  borderRadius: 8, marginTop: 8, gap: 5 }}>
              <Feather name="trending-down" size={22} color="red" />
              <Text style={{ color: 'red' }}>-2.5%</Text>
              <Text style={{ fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>from this month</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16, gap: 10 }}>
            <View style={{ borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, width: '48%', padding: 12 }}>
              <Text style={{ fontSize: 12, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Income</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'Inter_700Bold' }}>$800.56</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center',  borderRadius: 8, marginTop: 8, gap: 5 }}>
                <AntDesign name="arrowup" size={20} color="green" />
                <Text style={{ color: 'green' }}>+2.5%</Text>
              </View>
            </View>
            <View style={{ borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, width: '48%', padding: 12 }}>
              <Text style={{ fontSize: 12, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Expense</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'Inter_700Bold' }}>$700.56</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center',  borderRadius: 8, marginTop: 8, gap: 5 }}>
                <AntDesign name="arrowdown" size={20} color="red" />
                <Text style={{ color: 'red' }}>-2.5%</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 16, padding: 16, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER  }}>
            <Text style={{ fontSize: 18, fontFamily: 'Inter_700Bold' }}>Weekly Spending</Text>
            <Text style={{ color: lighttheme.MUTED_FOREGROUND }}>Your spending activity over the last 7 days</Text>
            <LineChart 
            data = {data}
            color={ lighttheme.PRIMARY }
            dataPointsColor={ lighttheme.PRIMARY }
            hideAxesAndRules
            curveType={CurveType.CUBIC}
            isAnimated
            adjustToWidth
            spacing={40}
            yAxisTextStyle={{ width: 0 }}
            yAxisLabelWidth={0}
            />
          </View>
          
          <View style={{ marginTop: 16 }}>
            <Text style={{ fontSize: 18, fontFamily: 'Inter_700Bold' }}>Recent Transactions</Text>
            <Text style={{ color: lighttheme.MUTED_FOREGROUND }}>Your latest spending activity</Text>
            {/* Transaction List Placeholder */}
            {/* <View style={{ marginTop: 30 }}>
              <Text style={{ fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND, textAlign: 'center' }}>No recent transactions</Text>
            </View> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ alignItems: 'center', backgroundColor: '#ccf1e1', padding: 14, borderRadius: '50%', width: '25%', alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Inter_700Bold', color: lighttheme.PRIMARY, fontSize: 20 }}>$</Text>
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

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ alignItems: 'center', backgroundColor: '#ccf1e1', padding: 14, borderRadius: '50%', width: '25%', alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Inter_700Bold', color: lighttheme.PRIMARY, fontSize: 20 }}>$</Text>
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
          </View>
        </ScrollView>
        <FocusAwareStatusBar backgroundColor={lighttheme.BACKGROUND} barStyle="dark-content"/>
    </SafeAreaView>
  )
}