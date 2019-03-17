import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import CurrentTime from './components/CurrentTime'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

 constructor(props) {
    super(props);
    this.state = { upDating: true };
    setInterval(() => (
      this.setState(previousState => (
        { upDating: !previousState.upDating}
      ))
    ), 10);
  }
  render() {  
    let hora = new Date().getHours().toString();
    let minutos = new Date().getMinutes().toString();
    let segundos = new Date().getSeconds().toString();
    return (
      <View style={styles.container}>      
        <Card>
            <View style={{alignItems: 'center'}}>            
                <CurrentTime hora = {hora} minutos = {minutos} segundos = {segundos}/>
            </View>                
        </Card>         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'yellow',
    padding: 8,
  }, 
});
