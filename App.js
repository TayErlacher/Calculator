import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Button from './components/Button'
import Display from './components/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false, 
  operation: true,
  values: [0, 0],
  current: 0,
}

export default class App extends Component {
  state = { ...initialState }

  addDigit = n => { //digitos 1 2 3 4 etc e ponto ( ex: 0.2)
     const clearDisplay = this.state.displayValue === '0'
     || this.state.clearDisplay

    if (n == '.' && !clearDisplay
    && this.state.displayValue.includes('.')) {
      return
    } 

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }
  }


  clearMemory = () => { //limpar memoria
    this.setState({ ...initialState })
  }

  setOperation = operation => { //dividir, somar, igual 
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true }) //quando digitar um novo numero apos um ato, ele iniciara o novo chamado
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try {
        values[0] =
        eval(`${values[0]} ${this.state.operation} ${values[1]}`) //pega o valor 1 do array +valor do operation +o valor 2
        //pode acontecer de dar erro por valores invalidos, então:
      } catch (e) {
        values[0] = this.state.values[0] // apenas garante que essa variavel estará com o valor correto
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values, //implementação da calculadora pronta
      })
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}> 
             
          <Button label='AC'triple onClick={this.clearMemory} />
          <Button label='/' operation onClick={this.setOperation} />
          <Button label='7' onClick={this.addDigit} />
          <Button label='8' onClick={this.addDigit} />
          <Button label='9' onClick={this.addDigit} />
          <Button label='*' operation onClick={this.setOperation} />
          <Button label='4' onClick={this.addDigit} />
          <Button label='5' onClick={this.addDigit} />
          <Button label='6' onClick={this.addDigit} />
          <Button label='-' operation onClick={this.setOperation} />
          <Button label='1' onClick={this.addDigit} />
          <Button label='2' onClick={this.addDigit} />
          <Button label='3' onClick={this.addDigit} />
          <Button label='+' operation onClick={this.setOperation} />
          <Button label='0' onClick={this.addDigit} /> 
          <Button label='.' onClick={this.addDigit} />
          <Button label='=' double onClick={this.setOperation} />
        </View>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'row', 
   flexWrap: 'wrap',
  },

  buttons: {
    
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  }
});
