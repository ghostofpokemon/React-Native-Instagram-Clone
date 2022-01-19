import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import {POSTS} from '../data/posts';
import BottomTabs, {bottomTabIcons} from '../components/home/BottomTabs';
import {db} from '../firebase';
// https://i.imgur.com/J19pvTn.png
const HomeScreen = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collectionGroup('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(post => ({id: post.id, ...post.data()})));
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CEA0AE',
    flex: 1,
  },
});
