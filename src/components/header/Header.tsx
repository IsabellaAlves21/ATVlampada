import { Text, View } from 'react-native';
import { headerStyle } from './HeaderStyle';


export default function Header(){
    return (
        <View style={headerStyle.container}>
            <Text style={headerStyle.text}>Turn On/Off</Text>
        </View>
    )
}
    