import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Card = ({id,title,photo}) => {    
  return (
    <View key={id} style={styles.card}>
      <Text style={styles.text}>{title}</Text>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${photo}` }} style={{ width: '100%', height: '100%' }} />
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    text:{
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold'
    },
  card: {
    width: '48%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden', // important to clip image corners
    backgroundColor: '#BBB'
  },
})