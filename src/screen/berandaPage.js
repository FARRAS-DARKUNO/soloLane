import * as React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
} from 'react-native';
import styles from '../style/berandaStyle';
import ContainMain from '../Componen/containBeranda/containPelabukan';

const BerandaPage = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.color}>
            <View style={styles.margin}>
                <View style={styles.viewMain}>
                    <View style={styles.margin}>
                        <View style={styles.texttitleView}>
                            <Text style={styles.textKatalog}>KAPALZ</Text>
                        </View>
                        <View style={styles.enter40} />

                        <View style={styles.container}>
                            <ContainMain />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )

}

export default BerandaPage;