import { SafeAreaView, StyleSheet, Text } from "react-native";
import { COR_PADRAO } from "../utils/constants";
import { View } from "react-native";
import { FONT_SIZE_16, FONT_SIZE_48 } from "../Theme/tipografia";
import { useTranslation } from "react-i18next";

export default function Header() {

    const { t } = useTranslation();

    return(
        <SafeAreaView style={styles.header}>
            <Text style={styles.titulo}>HELP<Text style={styles.textLogo}>TE</Text></Text>
            <View style={styles.sloganView}>
                <Text style={styles.slogan}>{t('slogan1')}</Text>
                <Text style={styles.slogan}>{t('slogan2')}</Text>
            </View>
        </SafeAreaView>
    );   
}

const styles = StyleSheet.create({
    textLogo : {
        fontWeight : "700",
        fontSize: 50,
        fontStyle : "italic"
    },
    titulo : {
        fontSize : FONT_SIZE_48,
        textAlign : 'center',
        fontWeight : '300',
        paddingVertical : 25
    },
    logoImg : {
        width : 150,
        height : 150,
        borderRadius : 999,
    },
    header : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        width : '100%',
        backgroundColor : COR_PADRAO,
        borderBottomLeftRadius : 50,
        borderBottomRightRadius : 50,
        elevation : 10,
        borderWidth : 1
    },
    slogan : {
        paddingVertical : 5,
        textAlign : 'center',
        fontSize : FONT_SIZE_16,
        fontWeight : '300'
    },
     sloganView : {

     }
})