import { Dimensions,Image, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Swiper from 'react-native-swiper'
import CustomButton from '../CustomButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import { onboarding } from '../../constants/onboarding'

export default function Home() {
  const swiperRef=useRef<Swiper>(null)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [activeIndex, setActiveIndex] = useState<Number>(0);
  const { height } = Dimensions.get('window');
  const isLastSlide=activeIndex===onboarding.length-1
  return (
    <View className='w-full h-full p-3'>
      <Text className='w-full text-right font-bold text-xl'>Skip</Text>
      <Swiper
          ref={swiperRef}
          loop={false}
          dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full' />}
          activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full' />}
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          {onboarding.map((item, index) => (
            <View key={index} className='items-center mt-14 justify-center'>
              <Text className='text-center font-bold text-2xl text-black mb-[20px]'>{item.title}</Text>
              <Image
                className='w-96 h-[400px]'
                source={item.image}
                resizeMode='contain'
              />
              <Text className='font-bold text-lg text-center mt-3 text-[#858585]'>{item.description}</Text>
            </View>
          ))}
        </Swiper>
        <CustomButton 
        title={isLastSlide?'Get Started':'Next'} 
        onPress={(()=> isLastSlide?navigation.navigate('Register'):swiperRef.current?.scrollBy(1))}
        className="w-11/12 mt-5"/>
    </View>
  )
}

const styles = StyleSheet.create({})