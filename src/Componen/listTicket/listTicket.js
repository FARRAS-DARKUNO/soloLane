import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    Image,
} from "react-native";
import styles from "./listTicketStyle";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import { PELABUHANAWAL, PELABUHANTUJUAN, KELAS, Waktu, ALL } from '../../data/data'
import { useNavigation } from '@react-navigation/native';

const ListTicket = () => {

    const route = useRoute();
    const navigation = useNavigation();

    // const toOrder = () => {
    //     navigation.navigate("OrderConfirm", {
    //         awal : 
    //     })
    //}

    return (
        <SafeAreaView style={styles.color}>
            <View style={styles.margin}>
                <View style={styles.row}>
                    <MaterialCommunityIcons name='chevron-left' size={30} style={{ color: '#DDA106' }} onPress={() => navigation.goBack()} />
                    <Text style={styles.textKatalog}>Ticket List</Text>
                </View>
                <View style={styles.enter40} />

                <FindData />
            </View>
        </SafeAreaView>
    );

    function NoHaveData() {
        return (

            <View style={styles.tengah}>
                <Image

                    source={require('../../assets/images/tidakAda.png')}
                />
            </View>

        );
    }

    function DataGet(hasil) {
        return (
            <FlatList
                data={hasil}
                renderItem={({ item }) => (
                    <View style={{ paddingBottom: 10 }}>
                        <TouchableOpacity
                            style={styles.touchable}
                            onPress={() => {
                                navigation.navigate("OrderConfirm", {
                                    awal: (PELABUHANAWAL.find(sub => sub.awal_id === item.awal_id).awal_nama).toString(),
                                    akhir: (PELABUHANTUJUAN.find(sub => sub.tujuan_id === item.tujuan_id).tujuan_nama).toString(),
                                    tanggal: (Waktu.find(sub => sub.waktu_id === item.waktu_id).waktu_nama).toString(),
                                    jam: (ALL.find(sub => sub.all_id === item.all_id).jam).toString(),
                                    layanan: (KELAS.find(sub => sub.kelas_id === item.kelas_id).kelas_nama).toString(),
                                    harga: (ALL.find(sub => sub.all_id === item.all_id).harga).toString(),

                                })
                            }}
                        >
                            <View style={styles.rowbetwen}>
                                <Text style={styles.textsubtitle}>{PELABUHANAWAL.find(sub => sub.awal_id === item.awal_id).awal_nama}</Text>
                                <MaterialCommunityIcons name='arrow-right' size={16} style={{ color: '#DDA106' }} />
                                <Text style={styles.textsubtitle}>{PELABUHANTUJUAN.find(sub => sub.tujuan_id === item.tujuan_id).tujuan_nama}</Text>
                            </View>
                            <View style={styles.enter20} />
                            <View style={styles.rowbetwen}>
                                <Text style={styles.textsubtitle}>{Waktu.find(sub => sub.waktu_id === item.waktu_id).waktu_nama}</Text>
                                <Text style={styles.textsubtitle}>{KELAS.find(sub => sub.kelas_id === item.kelas_id).kelas_nama}</Text>
                                <Text style={styles.textsubtitle}>{ALL.find(sub => sub.all_id === item.all_id).jam}</Text>
                            </View>
                            <View style={styles.enter40} />
                            <View style={styles.rowend}>
                                <Text style={styles.textsubuang}>{ALL.find(sub => sub.all_id === item.all_id).harga}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.all_id}
            />
        );
    }

    function FindData() {
        const awalID = PELABUHANAWAL.find(id => id.awal_nama.toLowerCase() === route.params.awal.toLowerCase()).awal_id;
        const tujuanID = PELABUHANTUJUAN.find(id => id.tujuan_nama.toLowerCase() === route.params.akhir.toLowerCase()).tujuan_id;
        const kelasID = KELAS.find(id => id.kelas_nama.toLowerCase() === route.params.kelas.toLowerCase()).kelas_id;
        const waktuID = Waktu.find(id => id.waktu_nama.toLowerCase() === route.params.tanggal).waktu_id;

        const hasil = ALL.filter(id => id.awal_id.toLowerCase() === awalID.toLowerCase() && id.tujuan_id.toLowerCase() === tujuanID.toLowerCase() && id.kelas_id.toLowerCase() === kelasID.toLowerCase() && id.waktu_id.toLowerCase() === waktuID.toLowerCase());

        let findALL = (hasil.length >= 1) ? DataGet(hasil) : NoHaveData();

        return findALL;
    }
}
export default ListTicket;