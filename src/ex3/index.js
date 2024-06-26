import { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo_3() {

    const [numero, setNumero] = useState(0);

    function mensagem() {
        alert('Aula de React-Native');
    }

    function Incrementar() {

        setNumero(numero + 1)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo_3</Text>
            <TouchableOpacity style={styles.botao} onPress={() => mensagem()}>
                <Text style={styles.txtBotao}>BOTÃO</Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>{numero}</Text>

            <TouchableOpacity style={styles.botao} onPress={() => Incrementar()}>
                <Text style={styles.txtBotao}>Incrementar N°</Text>
            </TouchableOpacity>
        </View>
    );
}
