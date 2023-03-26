import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { styles } from './styles'

type Task = {
  description: string
  checked: boolean
  remove: () => void
  check: () => void
}

export function Task({ check, remove, checked, description }: Task) {
  return (
    <View style={[styles.container, checked && { borderColor: 'transparent' }]}>
      <TouchableOpacity
        style={checked ? styles.checkedButton : styles.uncheckedButton}
        onPress={check}
      >
        {checked && <Feather name='check' size={12} color='#F2F2F2' />}
      </TouchableOpacity>
      <Text
        style={checked ? styles.descriptionChecked : styles.descriptionUnchecked}
        numberOfLines={2}
        ellipsizeMode='tail'
      >
        {description}
      </Text>
      <TouchableOpacity onPress={remove}>
        <Feather name='trash-2' size={14} color='#808080' />
      </TouchableOpacity>
    </View>
  )
}