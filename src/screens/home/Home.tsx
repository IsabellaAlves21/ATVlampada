import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from '../../components/header/Header';
import Lampada from '../../components/lampada/Lampada';
import Footer from '../../components/footer/Footer';
import { homestyle } from './HomeStyle';


export default function Home() {
    return(
        <View style={homestyle.container}>
            <StatusBar style="light" />
            <Header/>
            {/* Meu Primeiro Comentario */}
            <Lampada/>
            <Text style={homestyle.text}>Hello World Home</Text>
            <Footer/>
        </View>
        
    )}

    