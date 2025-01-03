import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = () => {
return (
    <View style={styles.headerContainer}>
    <Image source={require('../assets/images/icon.png')} style={styles.image} />
    <Text style={styles.title}>Gajendra Nursery</Text>
    <Text style={styles.subtitle}>Your One-Stop Shop for All Botanist Needs</Text>
    </View>
);
};

const styles = StyleSheet.create({
headerContainer: {
    alignItems: 'center',
    padding: 20,
},
image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
},
subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
},
});

export default Header;