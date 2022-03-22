import * as React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    Image,
} from 'react-native';
import styles from '../style/pembatalan';

const PembatalanPage = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.color}>
            <View style={styles.texttitleView}>
                <Image

                    source={require('../assets/images/pembatalan.png')}
                />
            </View>
        </SafeAreaView>
    )

}

export default PembatalanPage;