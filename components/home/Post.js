import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {firebase, db} from '../../firebase';

const postFooterIcons = [
  {
    name: 'Like',
    imgUrl: require('../../assets/footerIcons/like.png'),
    likedImageUrl: require('../../assets/footerIcons/liked.png'),
  },
  {
    name: 'Comment',
    imgUrl: require('../../assets/footerIcons/comment.png'),
  },
  {
    name: 'Share',
    imgUrl: require('../../assets/footerIcons/share.png'),
  },
  {
    name: 'Save',
    imgUrl: require('../../assets/footerIcons/save.png'),
  },
];

const Post = ({post}) => {
  const handleLike = post => {
    const currentLikeStatus = !post.likes_by_users.includes(
      firebase.auth().currentUser.email,
    );

    db.collection('users')
      .doc(post.owner_email)
      .collection('posts')
      .doc(post.id)
      .update({
        likes_by_users: currentLikeStatus
          ? firebase.firestore.FieldValue.arrayUnion(
              firebase.auth().currentUser.email,
            )
          : firebase.firestore.FieldValue.arrayRemove(
              firebase.auth().currentUser.email,
            ),
      })
      .then(() => {
        console.log('Document successfully update');
      })
      .catch(error => {
        console.error('Error update document: ', error);
      });
  };
  return (
    <View style={{marginBottom: 30}}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={styles.postFooterView}>
        <PostFooter post={post} handleLike={handleLike} />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};
// https://i.imgur.com/jlFgGpe.jpeg
// https://i.imgur.com/LMJaZZX.jpeg

const PostHeader = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      alignItems: 'center',
    }}>
    <View style={styles.posts}>
      <Image source={{uri: post.profile_picture}} style={styles.story} />
      <Text style={styles.postsText}>{post.user}</Text>
    </View>
    <Text style={styles.dots}>...</Text>
  </View>
);

const PostImage = ({post}) => (
  <View style={styles.postView}>
    <Image source={{uri: post.imageUrl}} style={styles.postImage} />
  </View>
);

const PostFooter = ({handleLike, post}) => (
  <View style={styles.postFooterContainer}>
    <View style={styles.leftFooterIconsContainer}>
      <TouchableOpacity onPress={() => handleLike(post)}>
        <Image
          style={styles.footerIcon}
          source={
            post.likes_by_users.includes(firebase.auth().currentUser.email)
              ? postFooterIcons[0].likedImageUrl
              : postFooterIcons[0].imgUrl
          }
        />
      </TouchableOpacity>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imgUrl} />
      <Icon
        imgStyle={[styles.footerIcon, styles.shareIcon]}
        imgUrl={postFooterIcons[2].imgUrl}
      />
    </View>
    <View style={styles.rightFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imgUrl} />
    </View>
  </View>
);

const Icon = ({imgStyle, imgUrl}) => (
  <TouchableOpacity>
    <Image source={imgUrl} style={imgStyle} />
  </TouchableOpacity>
);

const Likes = ({post}) => (
  <View style={styles.likesView}>
    <Text style={{color: 'white', fontWeight: '600'}}>
      {post.likes_by_users.length.toLocaleString('en')} likes
    </Text>
  </View>
);

const Caption = ({post}) => (
  <View style={{marginTop: 5}}>
    <Text style={{color: 'white'}}>
      <Text style={{fontWeight: '600', marginRight: 5}}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({post}) => (
  <View style={{marginTop: 5}}>
    {!!post.comments.length && (
      <Text style={{color: 'white'}}>
        View{post.comments.length > 1 ? ' all ' : ''} {post.comments.length}{' '}
        {post.comments.length > 1 ? 'comments' : 'comment'}
      </Text>
    )}
  </View>
);

const Comments = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{flexDirection: 'row', marginTop: 5}}>
        <Text style={{color: 'white'}}>
          <Text style={{fontWeight: '600'}}>{comment.user}</Text>{' '}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

export default Post;

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  },
  posts: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postsText: {
    color: 'white',
    marginLeft: 5,
    fontWeight: '700',
  },
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#684551',
  },
  dots: {
    color: 'white',
    fontWeight: '900',
  },
  postView: {
    width: '100%',
    height: 450,
  },
  postImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  postFooterView: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  postFooterContainer: {
    flexDirection: 'row',
  },
  leftFooterIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '32%',
  },
  rightFooterIconsContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  shareIcon: {
    transform: [{rotate: '420deg'}],
    marginTop: -3,
  },
  likesView: {
    flexDirection: 'row',
    marginTop: 4,
  },
});
