import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import Cards from '@/components/Cards';
import Header from '@/components/Header';
import Services from '@/components/Services';

type Props = {
    label: string;
    value: string | number;
};

const Index = () => {
return (
    <ScrollView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Header />
    <View style={styles.statsContainer}>
        <Cards label="Years of Service" value="25+" />
        <Cards label="Years of Experience" value="30+" />
        <Cards label="Satisfied Customers" value="40+" />
    </View>
    <Services />
    </ScrollView>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},
statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
},
});

export default Index;