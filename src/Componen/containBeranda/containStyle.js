import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textKatalog: {
        fontSize: 16,

        color: 'black',
    },
    enter40: {
        height: 40,
    },
    enter30: {
        height: 30,
    },
    enter20: {
        height: 20,
    },
    viewMain: {
        height: 500,
        width: '100%',
        backgroundColor: '#FCFEFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 24,
        fontFamily: 'Ubuntu-Bold',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    picker: {
        height: 10,
        width: 300,
        backgroundColor: '#BDDDE3',

        //width: 300,
        padding: 10,
        borderWidth: 1,
        borderColor: "#BDDDE3",
    },
    pickerView: {
        height: 10,
        borderRadius: 30,
    },
    botton: {
        //height: 20,
        //width: '100%',
        borderRadius: 10,
    },
    touch: {
        backgroundColor: '#DDA106',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 10,

    },
    textSubmit: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Bold',
        color: '#FCFEFF',
    },

})

export default styles;