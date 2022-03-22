import * as React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    Button,
} from 'react-native';
import styles from './containStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from "@react-native-picker/picker";

const ContainMain = ({ navigation }) => {
    const [awal, setAwal] = React.useState('');
    const [akhir, setAkhir] = React.useState('');
    const [kelas, setKelas] = React.useState('');
    const [jam, setJam] = React.useState('');
    const [tanggal, setTanggal] = React.useState('');
    return (
        <View>
            <Text style={styles.textKatalog}>Pelabuhan Awal</Text>
            <View style={styles.enter20} />
            <View style={styles.row}>
                <MaterialCommunityIcons name='sail-boat' size={24} style={{ marginRight: 10, color: '#206378' }} />

                <View stle={styles.pickerView}>

                    <Picker
                        selectedValue={awal}
                        onValueChange={(value, index) => setAwal(value)}
                        mode="dropdown" // Android only
                        style={styles.picker}

                    >
                        <Picker.Item label="Tanjung Priok" value="Tanjung Priok" />
                        <Picker.Item label="Tanjung Perak" value="Tanjung Perak" />
                        <Picker.Item label="Ketapang" value="Ketapang" />
                        <Picker.Item label="Harbour Bay" value="Harbour Bay" />
                        <Picker.Item label="Tanjung Mas" value="Tanjung Mas" />
                    </Picker>
                    {/* <Text style={styles.text}>Your conuntry: {country}</Text> */}
                </View>



            </View>

            <View style={styles.enter30} />

            <Text style={styles.textKatalog}>Pelabuhan Tujuan</Text>
            <View style={styles.enter20} />
            <View style={styles.row}>
                <MaterialCommunityIcons name='sail-boat' size={24} style={{ marginRight: 10, color: '#206378' }} />

                <View stle={styles.pickerView}>

                    <Picker
                        selectedValue={akhir}
                        onValueChange={(value, index) => setAkhir(value)}
                        mode="dropdown" // Android only
                        style={styles.picker}

                    >

                        <Picker.Item label="Tanjung Priok" value="Tanjung Priok" />
                        <Picker.Item label="Tanjung Perak" value="Tanjung Perak" />
                        <Picker.Item label="Ketapang" value="Ketapang" />
                        <Picker.Item label="Harbour Bay" value="Harbour Bay" />
                        <Picker.Item label="Tanjung Mas" value="Tanjung Mas" />
                    </Picker>
                    {/* <Text style={styles.text}>Your conuntry: {country}</Text> */}
                </View>

            </View>
            <View style={styles.enter30} />
            <Text style={styles.textKatalog}>Kelas Pelayaran</Text>
            <View style={styles.enter20} />
            <View style={styles.row}>
                <MaterialCommunityIcons name='sofa-single' size={24} style={{ marginRight: 10, color: '#206378' }} />

                <View stle={styles.pickerView}>

                    <Picker
                        selectedValue={kelas}
                        onValueChange={(value, index) => setKelas(value)}
                        mode="dropdown" // Android only
                        style={styles.picker}

                    >
                        <Picker.Item label="Bisnis" value="Bisnis" />
                        <Picker.Item label="Ekomomis" value="Ekonomis" />
                    </Picker>
                    {/* <Text style={styles.text}>Your conuntry: {country}</Text> */}
                </View>
            </View>

            <View style={styles.enter30} />
            <Text style={styles.textKatalog}>Waktu Keberangkatan</Text>
            <View style={styles.enter20} />
            <View style={styles.row}>
                <MaterialCommunityIcons name='calendar-month' size={24} style={{ marginRight: 10, color: '#206378' }} />

                <View stle={styles.pickerView}>

                    <Picker
                        selectedValue={tanggal}
                        onValueChange={(value, index) => setTanggal(value)}
                        mode="dropdown" // Android only
                        style={styles.picker}

                    >
                        <Picker.Item label="01-01-2022" value="7" />
                        <Picker.Item label="02-01-2022" value="9" />
                        <Picker.Item label="03-01-2022" value="13" />
                        <Picker.Item label="04-01-2022" value="15" />
                        <Picker.Item label="05-01-2022" value="17" />
                    </Picker>
                    {/* <Text style={styles.text}>Your conuntry: {country}</Text> */}
                </View>
            </View>

            <View style={styles.enter40} />


            <Button
                title="Right button"
                // onPress={ }
                color={'#206378'}

            />


        </View>
    )

}

export default ContainMain;