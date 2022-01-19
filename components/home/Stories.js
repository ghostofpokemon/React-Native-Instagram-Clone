import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {USERS} from '../../data/users';

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={styles.storyView}>
            <Image source={story.image} style={styles.story} />
            <Text style={styles.storyText}>
              {story.user.length > 11
                ? story.user.slice(0, 6).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 18,
    borderWidth: 3,
    borderColor: '#684551',
  },
  storyText: {
    color: 'white',
  },
  storyView: {
    alignItems: 'center',
  },
});
