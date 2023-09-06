import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COR_PADRAO } from "../utils/constants";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BotaoAudio() {
  
  return(
        <View>
            <Pressable>
                <View style={styles.triangulo} >
                  <Icon style={{alignSelf : 'center', paddingTop : '25%', color : '#3498db'}} name="microphone" size={20}/>
                </View>
            </Pressable>
        </View>
    )}

const styles = StyleSheet.create({
    
    triangulo: {
      width: 150,
      height : 100,
      backgroundColor: COR_PADRAO,
      borderStyle: 'solid',
      borderTopWidth: 30,
      borderRightWidth: 30,
      borderBottomWidth: 30,
      borderLeftWidth: 30,
      borderColor: '#3498db',
      borderRadius: 999, 
      elevation : 10,
    },
  });