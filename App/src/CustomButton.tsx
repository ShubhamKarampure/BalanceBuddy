import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ButtonProps } from '../types'
import React from 'react'

const getBgVariantStyle=(variant:ButtonProps['bgVariant'])=>{
    switch(variant){
        case "secondary":
            return "bg-gray-500"
        case "danger":
            return  "bg-red-500"
        case "success":
            return  "bg-green-500"
        case "outline":
            return "bg-white"
        default:
            return  "bg-blue-500"
    }
}

const getTextVariantStyle=(variant:ButtonProps['textVariant'])=>{
    switch(variant){
        case "secondary":
            return "text-gray-500"
        case "danger":
            return  "text-red-500"
        case "success":
            return  "text-green-500"
        case "primary":
            return "text-black"
        default:
            return "text-white"
    }
}

export default function CustomButton({onPress,title,bgVariant='primary',textVariant,IconLeft,IconRight,className}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} className={`w-full p-1 rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}>
        {IconLeft && <IconLeft/>}
        <Text className={` text-xl font-bold ${getTextVariantStyle(textVariant)}`}>{title}</Text>
        {IconRight && <IconRight/>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})