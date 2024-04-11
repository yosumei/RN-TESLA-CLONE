import { View, Text ,Pressable} from 'react-native'
import React from 'react'
import styles from './styles'

const StyledButton = (props) => {
    
    
    

    const {type,content,onPress} =props;


const backgroundColor=type==="primary"?"#171A20CC":"white";

const textColor=type==="primary"?"white":"#171A20";

  return (
    <View style={styles.container}>
        <Pressable style={[styles.button,{backgroundColor:backgroundColor}]}
        onPress={()=>onPress()}>

            <Text style={[styles.text,{color:textColor}]}>{content}</Text>
            
        </Pressable>
      
    </View>
  )
}

export default StyledButton