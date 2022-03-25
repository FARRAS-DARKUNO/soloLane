import * as React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    Image,
    TouchableOpacity,

} from 'react-native';
import styles from '../style/pesananStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import { CHECK } from '../data/data';

const PesananPage = ({ navigation }) => {

    const route = useRoute();

    let check = false;

    return (
        <CheckHaveData />
    )

    function CheckHaveData() {
        try {
            check = route.params.kondisi;
        } catch (err) {
            check = false;
        }

        let hasil = check ? HaveData() : NoHaveData();

        return hasil;
    }

    function NoHaveData() {

        return (
            <SafeAreaView style={styles.color}>
                <View style={styles.texttitleView}>
                    <Image

                        source={require('../assets/images/pesanan.png')}
                    />
                </View>
            </SafeAreaView>
        );

    }
    function HaveData() {
        return (
            <SafeAreaView style={styles.color}>
                <View style={styles.margin}>
                    <View style={styles.center}>
                        <Text style={styles.textKatalog}>Your Order</Text>
                        <View style={styles.enter40} />
                        <View style={styles.ViewAll}>
                            <View style={styles.padding}>
                                <View style={styles.rowbetwen}>
                                    <Text style={styles.textsubtitle}>{route.params.awal}</Text>
                                    <MaterialCommunityIcons name='arrow-right' size={16} style={{ color: '#DDA106' }} />
                                    <Text style={styles.textsubtitle}>{route.params.akhir}</Text>
                                </View>
                                <View style={styles.enter40} />
                                <Text style={styles.textsubtitle}>Tanggal : {route.params.tanggal}</Text>
                                <View style={styles.enter10} />
                                <Text style={styles.textsubtitle}>Jam : {route.params.jam}</Text>
                                <View style={styles.enter10} />
                                <Text style={styles.textsubtitle}>Layanan : {route.params.layanan}</Text>

                                <View style={styles.enter30} />
                                <Text style={styles.textsubtitle}>Pelanggan :</Text>
                                <View style={styles.enter10} />
                                <Text >{route.params.nama}</Text>
                                <Text >{route.params.kelamin}</Text>

                                <View style={styles.enter30} />
                                <View style={styles.rowend}>
                                    <Text style={styles.textuang}>{route.params.harga}</Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.enter30} />

                        <TouchableOpacity
                            style={styles.touch}
                            onPress={() => NoHaveData()}

                        >
                            <Text style={styles.textSubmit}>Cancel</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
        );
    }


}

export default PesananPage;