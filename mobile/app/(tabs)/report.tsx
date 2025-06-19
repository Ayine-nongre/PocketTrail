import FocusAwareStatusBar from '@/components/FocusAwareStatusBar';
import { CHART_COLORS, lighttheme } from '@/constants/colors';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as d3 from 'd3-shape';
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import Svg, { G, Path, Text as SvgText } from 'react-native-svg';

export default function Report() {
  const data = [
    { value: 120, text: 'Food', label: 'Food', showTooltip: true },
    { value: 50, text: 'Transport', label: 'Transport', showTooltip: true },
    { value: 80, text: 'Shopping', label: 'Shopping', showTooltip: true },
    { value: 90, text: 'Utilities', label: 'Utilities', showTooltip: true },
    { value: 70, text: 'Entertainment', label: 'Entertainment', showTooltip: true },
    { value: 100, text: 'Other', label: 'Other', showTooltip: true },
  ];

  const weeklyComparisonData = [
    { value: 1200, frontColor: lighttheme.PRIMARY, label: 'Week 1', spacing: 2, labelWidth: 45 },
    { value: 800, frontColor: '#f16666' },
    { value: 950, frontColor: lighttheme.PRIMARY, label: 'Week 2', spacing: 2, labelWidth: 45 },
    { value: 1100, frontColor: '#f16666' },
    { value: 1350, frontColor: lighttheme.PRIMARY, label: 'Week 3', spacing: 2, labelWidth: 45 },
    { value: 1100, frontColor: '#f16666' },
    { value: 950, frontColor: lighttheme.PRIMARY, label: 'Week 4', spacing: 2, labelWidth: 45 },
    { value: 400, frontColor: '#f16666' },
  ];

  const applyChartColors = (data: any) => {
  return data.map((item: any, index: number) => ({
    ...item,
    color: CHART_COLORS[index % CHART_COLORS.length],
  }));
};

const pieData = applyChartColors(data);

const barData = pieData.map((item: { value: any; color: any; label: any; }) => ({
  value: item.value,
  frontColor: item.color,
  label: item.label,
}));

const { width } = Dimensions.get('window');
const radius = width / 3.5;

const total = pieData.reduce((sum: number, item: any) => sum + item.value, 0);
const maxValue = Math.max(...pieData.map((d: any) => d.value));

const pieGen = d3.pie().value((d: any) => d.value)(pieData);
  const arcGen = d3.arc()
    .outerRadius(radius)
    .innerRadius(75);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: lighttheme.BACKGROUND }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: lighttheme.BACKGROUND, borderBottomWidth: 1, borderBottomColor: lighttheme.BORDER, elevation: 1 }}>
            <View>
                <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold", }}>Monthly Report</Text>
                <Text style={{ fontSize: 12, color: lighttheme.MUTED_FOREGROUND, fontFamily: 'Inter_400Regular' }}>Financial summary and insights</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                <Feather name="download" size={20} color="black" />
                <Feather name="share-2" size={20} color="black" />
            </View>
        </View>

        <ScrollView style={{ flex: 1, padding: 16 }} contentContainerStyle={{ paddingBottom: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <Ionicons name="chevron-back" size={24} color="black" />
            <Text style={{ fontSize: 18, fontFamily: 'Inter_500SemiBold', marginVertical: 16 }}>January 2024</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
            <View style={{ padding: 16, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, width: '48%' }}>
              <Text style={{ fontFamily: 'Inter_400Regular' }}>Total Income</Text>
              <Text style={{ fontSize: 22, fontWeight: 'bold', fontFamily: 'Inter_700Bold', marginTop: 5, color: 'green' }}>$4,650.00</Text>
            </View>
            <View style={{ padding: 16, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, width: '48%' }}>
              <Text style={{ fontFamily: 'Inter_400Regular' }}>Total Expense</Text>
              <Text style={{ fontSize: 22, fontWeight: 'bold', fontFamily: 'Inter_700Bold', marginTop: 5, color: 'red' }}>$1,400.00</Text>
            </View>
          </View> 

          <View style={{ padding: 16, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginBottom: 16 }}>
            <Text style={{ fontSize: 20, fontFamily: 'Inter_700Bold' }}>Expense Breakdown</Text>
            <Text style={{ fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND, marginBottom: 10 }}>Where your money went this month.</Text>
            <View style={{ alignItems: 'center', width: '80%', marginHorizontal: 'auto' }}>
              <Svg width={width} height={width}>
                <G x={width / 2} y={width / 2}>
                  {pieGen.map((slice: any, index: number) => {
                    const percentage = ((slice.data.value / total) * 100).toFixed(0);
                    const path = arcGen(slice);
                    const [labelX, labelY] = arcGen.centroid(slice);
                    const midAngle = (slice.startAngle + slice.endAngle) / 2;
                    const tooltipX = labelX * 1.12;
                    const tooltipY = labelY * 1.4;
                    const lineX = Math.cos(midAngle) * 1.2;
                    const lineY = Math.sin(midAngle) * 2;

                    return (
                      <G key={index}>
                        {/* Slice */}
                        <Path d={path} fill={slice.data.color} />

                        {/* Tooltip label */}
                        <SvgText
                          x={tooltipX}
                          y={tooltipY}
                          textAnchor={tooltipX > 0 ? 'start' : 'end'}
                          alignmentBaseline="middle"
                          fontSize={10}
                          fontWeight="bold"
                          fill={slice.data.color}
                        >
                          {`${slice.data.label} ${percentage}%`}
                        </SvgText>
                      </G>
                    );
                  })}
                </G>
              </Svg>
            </View>

            <View>
              {pieData.map((item: any, index: number) => {
                const barWidth = (item.value / maxValue) * 100 + '%';

                return (
                  <View key={index}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', width: '100%', padding: 8, borderRadius: 4 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 10, height: 10, backgroundColor: item.color, borderRadius: 5, marginRight: 8 }} />
                        <Text>{item.label}</Text>
                      </View>
                      <Text style={{ marginLeft: 8 }}>${item.value}</Text>
                    </View>
                    <View style={{ height: 10, backgroundColor: lighttheme.MUTED, borderRadius: 8 }}>
                      <View style={{ width: barWidth, height: '100%', backgroundColor: item.color, borderRadius: 8 }} />
                    </View>
                  </View>
                )
              })}
            </View>
          </View>

          <View style={{ padding: 16, borderWidth: 1, borderRadius: 8, borderColor: lighttheme.BORDER, marginBottom: 16 }}>
            <Text style={{ fontSize: 20, fontFamily: 'Inter_700Bold' }}>Weekly Comparison</Text>
            <Text style={{ fontFamily: 'Inter_400Regular', color: lighttheme.MUTED_FOREGROUND, marginBottom: 10 }}>Income vs. Expense by week</Text>
            <BarChart
            data={weeklyComparisonData}
            adjustToWidth
            spacing={12}
            barBorderTopLeftRadius={6}
            barBorderTopRightRadius={6}
            isAnimated
            hideRules
            xAxisThickness={0}
            yAxisThickness={0}
            yAxisLabelPrefix='$'
            yAxisLabelWidth={45}
            />
          </View>
        </ScrollView>
        <FocusAwareStatusBar backgroundColor={lighttheme.BACKGROUND} barStyle="dark-content"/>
    </SafeAreaView>
  )
}