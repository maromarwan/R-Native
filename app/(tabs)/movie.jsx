import { ThemedView } from '@/components/ThemedView'
import React, { useEffect, useState } from 'react'
import { Alert, Button, SafeAreaView, ScrollView, StatusBar, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Card from '../../components/Card'

export default function movie() {
    const [movieList,setMovieList] = useState([])

    

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=2daceb1790a06df3b0146ca831c34f24')
        .then(res => res.json())
       .then(res => setMovieList(res.results))
       },[])
// console.log(movieList);
     const message=()=>{
        Alert.alert('Hello !',movieList[1].original_title)
        
     }

  return (
    <SafeAreaProvider>
    <SafeAreaView style={style.container}>
    <ScrollView>
          <ThemedView style={style.titleContainer}>
            {movieList.map((m)=>(
              <Card id={m.id} title={m.original_title} photo={m.backdrop_path} />
            ))}
          </ThemedView>
    </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

const style = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
    titleContainer: {
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between', // or 'space-around'
    padding: 10,
  }
})