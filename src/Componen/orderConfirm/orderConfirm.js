import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    Image,
    TextInput,
} from "react-native";
import styles from "./orderconfirmStyle";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import { PELABUHANAWAL, PELABUHANTUJUAN, KELAS, Waktu, ALL } from '../../data/data'
import { Picker } from "@react-native-picker/picker";

const OrderConfirm = ({ navigation }) => {

    const route = useRoute();

    let check = false;

    const toOrder = () => {
        navigation.navigate("Pesanan", {
            awal: route.params.awal,
            akhir: route.params.akhir,
            tanggal: route.params.tanggal,
            jam: route.params.jam,
            layanan: route.params.layanan,
            nama: nama,
            kelamin: kelamin,
            harga: route.params.harga,
            kondisi: 'true',
        })
    }

    const [nama, onChangeNama] = React.useState('');
    const [kelamin, onChangeKelamin] = React.useState('Perempuan');

    return (
        <SafeAreaView style={styles.color}>
            <View style={styles.margin}>
                <View style={styles.row}>
                    <MaterialCommunityIcons name='chevron-left' size={30} style={{ color: '#DDA106' }} onPress={() => navigation.goBack()} />
                    <Text style={styles.textKatalog}>Order Ticket</Text>
                </View>
                <View style={styles.enter40} />
                <View style={styles.center}>
                    <Text style={styles.textKatalog}>Your Order</Text>
                    <View style={styles.enter30} />
                    <View style={styles.Viee}>
                        <View style={styles.rowbetwen}>
                            <Text style={styles.textSub}>{route.params.awal}</Text>
                            <MaterialCommunityIcons name='arrow-right' size={16} style={{ color: '#DDA106' }} />
                            <Text style={styles.textSub}>{route.params.akhir}</Text>
                        </View>
                        <View style={styles.enter10} />
                        <View style={styles.row}>
                            <Text style={styles.textSub}>Tanngal    : </Text>
                            <View style={{ padding: 10 }} />
                            <Text style={styles.textSub}>{route.params.tanggal}</Text>
                        </View>
                        <View style={styles.enter10} />
                        <View style={styles.row}>
                            <Text style={styles.textSub}>Jam    : </Text>
                            <View style={{ padding: 10 }} />
                            <Text style={styles.textSub}>{route.params.jam}</Text>
                        </View>
                        <View style={styles.enter10} />
                        <View style={styles.row}>
                            <Text style={styles.textSub}>Layanan   : </Text>
                            <View style={{ padding: 10 }} />
                            <Text style={styles.textSub}>{route.params.layanan}</Text>
                        </View>
                        <View style={styles.enter10} />
                        <View style={styles.rowend}>
                            <Text style={styles.textharga}>{route.params.harga}</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.enter10} />
                        <Text style={styles.textSub}>Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNama}
                            value={nama}
                            placeholder="Input your name"

                        />
                    </View>
                    <View>
                        <View style={styles.enter10} />
                        <Text style={styles.textSub}>Gender</Text>
                        <View stle={styles.pickerView}>

                            <Picker
                                selectedValue={kelamin}
                                onValueChange={(value, index) => onChangeKelamin(value)}
                                mode="dropdown" // Android only
                                style={styles.picker}

                            >
                                <Picker.Item label="Perempuan" value="Perempuan" />
                                <Picker.Item label="Laki-laki" value="Laki-laki" />
                            </Picker>
                        </View>

                    </View>


                </View>

                <View style={styles.enter30} />

                <TouchableOpacity
                    style={styles.touch}

                    onPress={toOrder}
                >
                    <Text style={styles.textSubmit}>Deal Order</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );



}
export default OrderConfirm;