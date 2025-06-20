import FocusAwareStatusBar from '@/components/FocusAwareStatusBar';
import { lighttheme } from '@/constants/colors';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HelpCenter() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const faqs = [
        {
            question: "How does SMS parsing work?",
            answer: "Our app automatically scans your SMS messages for transaction notifications from banks and financial institutions. It extracts key information like amount, merchant, and date to create transaction records.",
        },
        {
            question: "Is my financial data secure?",
            answer: "Yes, we use bank-level encryption to protect your data. We only read SMS messages locally on your device and never store sensitive banking information on our servers.",
        }
    ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: lighttheme.BACKGROUND, padding: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                <Feather name="help-circle" size={22} color="black" />
                <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold", }}>Help Center</Text>
            </View>
            <Text style={{ color: lighttheme.MUTED_FOREGROUND, fontFamily: "Inter_400Regular", textAlign: 'center' }}>Find answers to common questions and learn how to use ExpenseTracker.</Text>

            <View style={{ paddingBottom: 10, marginTop: '5%' }}>
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
        <ScrollView style={{ flex: 1,  }} showsVerticalScrollIndicator={false}>
            <Text style={{ fontFamily: 'Inter_600SemiBold', marginTop: 10, marginBottom: 5, fontSize: 16 }}>Browse by categories</Text>

            <View style={{ padding: 10, paddingVertical: 20, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 5, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ backgroundColor: "#ccf1e1", height: 40, width: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                  <Feather name="credit-card" size={24} color={lighttheme.PRIMARY} />
                </View>
                <View style={{ width: "65%" }}>
                  <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', fontWeight: 'bold' }}>Transactions</Text>
                  <Text style={{ fontSize: 12, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Managing your income and expenses</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ backgroundColor: lighttheme.SECONDARY, height: 30, width: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', fontWeight: 'bold' }}>5</Text>
                </View>
                <Feather name="chevron-right" size={24} color={lighttheme.MUTED_FOREGROUND} />
              </View>
            </View>
            <View style={{ padding: 10, paddingVertical: 20, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ backgroundColor: "#ccf1e1", height: 40, width: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                  <Feather name="message-square" size={24} color={lighttheme.PRIMARY} />
                </View>
                <View style={{ width: "65%" }}>
                  <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', fontWeight: 'bold' }}>SMS Parsing</Text>
                  <Text style={{ fontSize: 12, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>How automatic transaction detection works</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ backgroundColor: lighttheme.SECONDARY, height: 30, width: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', fontWeight: 'bold' }}>3</Text>
                </View>
                <Feather name="chevron-right" size={24} color={lighttheme.MUTED_FOREGROUND} />
              </View>
            </View>
            <View style={{ padding: 10, paddingVertical: 20, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ backgroundColor: "#ccf1e1", height: 40, width: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                  <Feather name="shield" size={22} color={lighttheme.PRIMARY} />
                </View>
                <View style={{ width: "65%" }}>
                  <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', fontWeight: 'bold' }}>Security & Privacy</Text>
                  <Text style={{ fontSize: 12, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Keeping your data safe</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ backgroundColor: lighttheme.SECONDARY, height: 30, width: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', fontWeight: 'bold' }}>4</Text>
                </View>
                <Feather name="chevron-right" size={24} color={lighttheme.MUTED_FOREGROUND} />
              </View>
            </View>
            <View style={{ padding: 10, paddingVertical: 20, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ backgroundColor: "#ccf1e1", height: 40, width: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                  <FontAwesome name="mobile-phone" size={24} color={lighttheme.PRIMARY} />
                </View>
                <View style={{ width: "65%" }}>
                  <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', fontWeight: 'bold' }}>App Features</Text>
                  <Text style={{ fontSize: 12, fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND }}>Getting the most out of PocketTrail</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ backgroundColor: lighttheme.SECONDARY, height: 30, width: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13, fontFamily: 'Inter_400Regular', fontWeight: 'bold' }}>6</Text>
                </View>
                <Feather name="chevron-right" size={24} color={lighttheme.MUTED_FOREGROUND} />
              </View>
            </View>

            <Text style={{ fontFamily: 'Inter_600SemiBold', marginTop: 20, fontSize: 16 }}>Frequently Asked Questions</Text>
            

            <View style={{ marginTop: 10 }}>
                {faqs.map((faq, idx) => (
                    <View key={faq.question} style={{ marginBottom: 8, backgroundColor: lighttheme.CARD, overflow: 'hidden', }}
                    >
                        <TouchableOpacity onPress={() => setOpenIndex(openIndex === idx ? null : idx)} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: lighttheme.BORDER, justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: 'Inter_500Medium', fontSize: 15, color: lighttheme.FOREGROUND, flexDirection: 'row', alignItems: 'center' }}
                            >
                                {faq.question}
                            </Text>
                            <Feather name={openIndex === idx ? "chevron-up" : "chevron-down"} size={18} color={lighttheme.MUTED_FOREGROUND} style={{ marginLeft: 8 }} />
                        </TouchableOpacity>
                        {openIndex === idx && (
                            <View style={{ paddingBottom: 12 }}>
                                <Text style={{ color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular', fontSize: 14 }}>
                                    {faq.answer}
                                </Text>
                            </View>
                        )}
                    </View>
                ))}
            </View>
        </ScrollView>
        <FocusAwareStatusBar backgroundColor={lighttheme.BACKGROUND} barStyle="dark-content"/>
    </SafeAreaView>
  )
}