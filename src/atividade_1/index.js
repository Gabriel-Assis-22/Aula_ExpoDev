import { View, Text, Image } from 'react-native'; 

import Ola from './ola';

import styles from './styles';

import logo from '../../assets/002-1-react-native.png';

export default function Atividade1 () { 
    
    return(

        <View style={styles.container}>

            <Image source={logo} style={styles.Image}/>
            
            <Text style={styles.titulo}>
                Atividade1
            </Text>
            
           <Ola nomePessoa={'Gabriel'} />
           <Ola nomePessoa={'Roberto'} />

        </View>
    );
    }
