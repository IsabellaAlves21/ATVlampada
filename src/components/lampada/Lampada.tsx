import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useState } from 'react';
import lampadaOff from '../../../assets/lampadaOff.png';
import lampadaOn from '../../../assets/lampadaOn.png';
import { lampadaStyle } from './LampadaStyle';
 
export default function Lampada() {
    // área de código / lógica do componente
    const [apagada, setApagada] = useState(true);
 
    function TurnOnOff() {
        setApagada(!apagada);
    }
 
    return (
        <View style={[lampadaStyle.container, { backgroundColor: apagada ? 'grey' : 'white' }]}>
            <TouchableOpacity onPress={TurnOnOff}>
                <Image source={apagada ? lampadaOff : lampadaOn} style={lampadaStyle.image} />
            </TouchableOpacity>
            <Text style={[lampadaStyle.text, { color: apagada ? 'white' : 'black' }]}>
                {apagada ? 'Clique aqui para ligar a luz' : 'Clique aqui para apagar a luz'}
            </Text>
        </View>
    );
}
 
