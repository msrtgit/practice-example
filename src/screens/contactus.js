import React from 'react';
import { Image, StyleSheet, Text, View,Button } from 'react-native';









export default function contact({navigation}) {

    return(
        <View style={styles.container}>
         
            <Text style={styles.mainheader}><h1>తెలుగు బైబిల్</h1></Text>
            <View style={styles.innercontainer}>
            <Text> Devoleped by:{"spondias Pvt. Limited"}</Text>
           <View>
                     <Text>Send Feedback </Text>
                    <Text>Tell Us what You Think</Text>
            </View>
            <View>
                <Text>Report a Problem</Text>
                <Text> Let Us know About a Bug or Problem</Text>
            </View>
                   <Text>Privacy Policy</Text>
                   <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
            </View>
        </View>


    );
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      textAlign: "center",
     
    },
    innercontainer : {
      flex:5,
     fontSize:20,
     justifyContent:'center',
      alignItems: 'center',
       backgroundColor: 'lightblue',


    }
});