import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class CurrentTime extends React.Component {
  render() {
    return (
      <View style={styles.container}>
               
     
      <Text style={styles.paragraph}>
          {this.props.hora}: {this.props.minutos}: {this.props.segundos}
      </Text>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,  
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  }, 
});