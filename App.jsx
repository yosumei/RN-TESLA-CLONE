import { View, Text, StyleSheet,ImageBackground, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CarsList from './components/CarsList'
import Header from './components/Header'




const App = () => {
  return (


    <View style={styles.container}>

      <Header />
  
<CarsList/>

     
    </View>


  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  
})

export default App