import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CONTAINER_CENTER } from "../../Theme/styles";

export default function DetalhesHistorico(props) {
    const { data, hora, frase, traducao } = props.route.params;
    
    return(
        <SafeAreaView style={styles.container}>
            <Text>Data da tradução: {data} - {hora}</Text>

            <View style={styles.viewFrase}>
                <Text style={styles.texto}><Text style={styles.titulo}>DIÁLOGO:</Text> {frase}</Text>
            </View>

            <View style={styles.viewTraducao}>
                <Text style={styles.texto}><Text style={styles.titulo}>TRADUÇÃO:</Text> {traducao}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : CONTAINER_CENTER,
    viewFrase : {
        backgroundColor : '#ddd',
        padding : 10,
        width : '90%',
        borderRadius : 10,
        marginVertical : 10,
        elevation : 5
    },
    viewTraducao : {
        backgroundColor : '#ADD8E6',
        padding : 10,
        width : '90%',
        borderRadius : 10,
        marginVertical : 10,
        elevation : 5
    },
    titulo : {
        fontWeight : '500'
    },
    texto: {
        fontWeight : '300'
    }
})