import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const movies = [
  { id: 1, title: 'Inception', poster: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
  { id: 2, title: 'Interstellar', poster: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg' },
  { id: 3, title: 'The Batman', poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg' },
];

export default function index() {
   const [movieList,setMovieList] = useState([])
  
      
  
      useEffect(()=>{
          fetch('https://api.themoviedb.org/3/discover/movie?api_key=2daceb1790a06df3b0146ca831c34f24')
          .then(res => res.json())
         .then(res => setMovieList(res.results))
         },[])
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🎬 Featured Movies</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollSection}>
        {movieList.map(movie => (
          <TouchableOpacity key={movie.id} style={styles.card}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }} style={styles.image} />
            <Text style={styles.movieTitle}>{movie.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.header}>🔥 Trending Now</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollSection}>
        {movies.map(movie => (
          <TouchableOpacity key={movie.id} style={styles.card}>
            <Image source={{ uri: movie.poster }} style={styles.image} />
            <Text style={styles.movieTitle}>{movie.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E2F',
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  header: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  scrollSection: {
    marginBottom: 30,
  },
  card: {
    marginRight: 16,
    width: 140,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 8,
  },
  movieTitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});
