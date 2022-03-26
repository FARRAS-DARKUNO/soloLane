import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    color: {
        backgroundColor: '#206378',
        flex: 1,
    },
    margin: {
        margin: 20,

    },
    texttitleView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textKatalog: {
        fontSize: 24,
        fontFamily: 'Ubuntu-Bold',
        color: '#DDA106',

        //alignItems: 'center',
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
    row: {
        flexDirection: 'row'
    },
    touchable: {
        height: 170,
        width: '100%',
        backgroundColor: "#FCFEFF",
        padding: 30,
        borderRadius: 10,
    },
    rowbetwen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textsubtitle: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Bold',
        color: 'black',

        //alignItems: 'center',
    },
    rowend: {
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    textsubuang: {
        fontSize: 18,
        fontFamily: 'Ubuntu-Bold',
        color: '#DDA106',

        //alignItems: 'center',
    },
    tengah: {
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'red',
        height: 600,
    }

})

export default styles;