import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    display: { 
        flex: 2,
        padding: 60,
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        alignItems: 'flex-end',
        
    },
     displayValue: {
         fontSize:60,
         color: '#8B0000',
     }
})

export default props => 
<View style={styles.display}>
    <Text style={styles.displayValue}
    numberOfLines={1}> {props.value} </Text>
</View>
