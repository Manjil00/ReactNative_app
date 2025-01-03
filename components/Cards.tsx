import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
label: string;
value: string | number;
};

const Cards: React.FC<Props> = ({ label, value }) => {
return (
    <View style={styles.cardContainer}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.label}>{label}</Text>
    </View>
);
};

const styles = StyleSheet.create({
cardContainer: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    width: 100,
},
value: {
    fontSize: 18,
    fontWeight: 'bold',
},
label: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
},
});

export default Cards;
