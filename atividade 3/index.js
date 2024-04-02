import { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade_3() {

    const [numero, setNumero] = useState(0);


    function Incrementar() {

        setNumero(numero + 1);
    }

    function descrementar() {

        setNumero(numero - 1);
    }

    function Zerar() {

        setNumero(numero * 0);
    }

    return (
        <View style={styles.container}>


            <View style={styles.box}>
            <Text style={styles.titulo}>Exemplo_3</Text>
            <View style={styles.operacao}>

            <TouchableOpacity style={styles.botao_operacao} onPress={() => descrementar()}>
                <Text style={styles.txtBotao}>-</Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>{numero}</Text>

            <TouchableOpacity style={styles.botao_operacao} onPress={() => Incrementar()}>
                <Text style={styles.txtBotao}>+</Text>
            </TouchableOpacity>

            
            </View>
            <TouchableOpacity style={styles.botao} onPress={() => Zerar()}>
                <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}
