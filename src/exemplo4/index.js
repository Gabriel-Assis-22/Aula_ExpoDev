import { View, Text, TextInput, Pressable } from "react-native";
import styles from '../exemplo4/styles';
import { useState } from 'react';

export default function Exemplo4() {

    const [txtDigitado, settxtDigitado] = useState('Texto Digitado');
    const [txt2, setTxt2] = useState('');
    const [txtTela, setTxtTela] = useState('');

    function atualizaTextoHandle(txt) {
        settxtDigitado(txt);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo_4</Text>

            <Text style={styles.texto}>{txtDigitado}</Text>

            <TextInput
                style={styles.input}
                onChangeText={(valor) => atualizaTextoHandle(valor)}
            />

            <View style={styles.linha} />

            <TextInput
                style={styles.input}
                onChangeText={(vlr) => setTxt2(vlr)}
                value={txt2}
            />

            <Pressable
                style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}>
                <Text style={styles.txtBotao}>Exibir texto</Text>
            </Pressable>

        </View>
    );
}

