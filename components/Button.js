import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: (Dimensions.get('window').width / 4),
        padding: 20,
        backgroundColor: '#F0F0F0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        color: '#000000',
        borderRadius: 500,
        
    },

    operationButton: {
        color: '#fff',
        backgroundColor: '#8B0000',
        
    },
    
    buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
    color: '#fff',
    backgroundColor: '#8B0000',
    },
  
    buttonTriple: {
        width: (Dimensions.get('window').width /4) * 3,
    }
})



export default props => {
    
const styleButton = [styles.button]

 if (props.double) styleButton.push(styles.buttonDouble)
 if (props.triple) styleButton.push(styles.buttonTriple)
 if (props.operation) styleButton.push(styles.operationButton)


    return (
        <TouchableHighlight  onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}