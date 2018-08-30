import React from 'react';
import { View, Text } from 'react-native';

// Functional component

const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail;