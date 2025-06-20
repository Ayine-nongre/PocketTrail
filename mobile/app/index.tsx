import FocusAwareStatusBar from '@/components/FocusAwareStatusBar';
import { animations } from '@/constants/animation';
import { lighttheme } from '@/constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import LottieView from 'lottie-react-native';
import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [currentStep, setCurrentStep] = React.useState(0);

  const onboardingSteps = [
    {
      title: "Welcome to Pocket-trail",
      description: "Track your expenses automatically by analyzing your SMS notifications",
      animation: animations.SMS,
    },
    {
      title: "SMS Parsing",
      description: "We automatically detect transactions from your bank SMS messages and categorize them.",
      animation: animations.PARSING,
    },
    {
      title: "Transaction History",
      description: "View all your transactions in one place with powerful filtering and search options.",
      animation: animations.HISTORY,
    },
    {
      title: "Insightful Reports",
      description: "Get detailed reports and visualizations to understand your spending habits.",
      animation: animations.REPORT,
    }

  ]

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push('/(auth)/login');
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push('/(tabs)/dashboard');
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: lighttheme.BACKGROUND }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
        <LottieView source={ onboardingSteps[currentStep].animation }
        style={{
          width: 200,
          height: 200,
        }}
        autoPlay/>
        
        <View style={{ marginTop: 20, width: '100%' }}>
          <Text style={{ fontFamily: "Inter_700Bold", fontSize: 20, textAlign: "center", marginBottom: 15 }}>{onboardingSteps[currentStep].title}</Text>
          <Text style={{ fontFamily: "Inter_400Regular", textAlign: "center", fontSize: 14, color: lighttheme.MUTED_FOREGROUND }}>{onboardingSteps[currentStep].description}</Text>
        </View>

        <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 'auto' }}>
          {onboardingSteps.map((_, index) => <View key={index} style={{ borderRadius: 8, backgroundColor: `${currentStep == index ? lighttheme.PRIMARY : '#a5efde' }`, height: 10, width: `${currentStep == index ? 38 : 10}` }}></View>)}
        </View>

        <View style={{ marginTop: 20, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={handleBack}
          style={{ marginTop: 20, padding: 10, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#000', width: '45%', flexDirection: 'row', gap: 5, justifyContent: 'center',}}>
            {currentStep == 0 && <Text style={{ fontFamily: "Inter_400Regular" }}>Skip</Text>}
            {currentStep > 0 && <Ionicons name="chevron-back" size={18} color="black" />}
            {currentStep > 0 && <Text style={{ fontFamily: "Inter_400Regular" }} >Back</Text>}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext}
          style={{ marginTop: 20, padding: 10, borderRadius: 8, alignItems: 'center', width: '45%', flexDirection: 'row', gap: 5, justifyContent: 'center', backgroundColor: lighttheme.PRIMARY }}>
            {currentStep < onboardingSteps.length - 1 && <Text style={{ fontFamily: "Inter_400Regular", color: '#fff' }}>Next</Text>}
            {currentStep == onboardingSteps.length - 1 && <Text style={{ fontFamily: "Inter_400Regular", color: '#fff' }}>Get started</Text>}
            {currentStep < onboardingSteps.length - 1 && <MaterialIcons name="navigate-next" size={24} color="#fff" />}
          </TouchableOpacity>
        </View>
      </ScrollView>

      <FocusAwareStatusBar backgroundColor={lighttheme.BACKGROUND} barStyle="dark-content"/>
    </SafeAreaView>
  );
}
