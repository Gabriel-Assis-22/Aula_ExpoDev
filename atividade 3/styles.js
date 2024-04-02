
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 3,
        backgroundColor: '#fafafa',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 20,
        // flexDirection: 'row',

    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    botao: {
        width: '70%',
        padding: 10,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#000'
    },

    botao_operacao: {
        width:'50px',
        padding:10,
        margin: 20,
        backgroundColor: '#000',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    txtBotao: {
        fontSize: 25,
        color: '#fafafa',
    },

    box: {
        width: '300px',
        height: '250px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        padding: 5
    },

    operacao: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'

    }
});

export default styles;