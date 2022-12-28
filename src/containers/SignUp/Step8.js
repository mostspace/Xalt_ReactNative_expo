import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/Header/index';
import Slider from '@react-native-community/slider';

function Step8Screen({ navigation }) {
    const [sliderValue, setSliderValue] = useState(1);

    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Header pressLogo={() => navigation.navigate('home')} />
                <View style={styles.step1Content}>

                    <Text style={styles.t20bold}>What level of intensity do you expect</Text>
                    <Text style={styles.t20bold}>from your coach?</Text>

                    <View style={styles.rangeView}>
                        <Text style={[styles.t18, styles.textCenter,
                        { fontWeight: '300', marginTop: 30 }]}>Not intense</Text>
                        <Text style={{ width: '30%' }} />
                        <Text style={[styles.t18, styles.textCenter, { fontWeight: '300', marginTop: 30 }]}>Extremely Intense</Text>
                    </View>

                    <Slider style={{ width: "35%", height: '2%', marginTop: -14, marginLeft: -43 }}
                        maximumValue={5}
                        minimumValue={1}
                        thumbTintColor="#E6447D"
                        minimumTrackTintColor="#F50057"
                        maximumTrackTintColor="#000000"
                        step={1}
                        value={sliderValue}
                        onValueChange={
                            (sliderValue) => setSliderValue(sliderValue)} />

                    <TouchableOpacity style={[styles.dayButton, styles.bgPink]}>
                        <Text style={[styles.t18, styles.textCenter, styles.colorPink, { fontWeight: '500' }]}>
                            {sliderValue} day
                        </Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ paddingTop: 130, alignSelf: 'flex-start',}}>
                            <TouchableOpacity style={styles.previousButton} onPress={() =>
                                navigation.navigate('step7')}>
                                <Text style={[styles.t15, styles.colorPink, { fontWeight: '700' }]}>
                                    PREVIOUS
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style = {{width: "20%"}}/>
                        <View style={{ paddingTop: 130, alignSelf: 'flex-end',  }}>
                            <TouchableOpacity style={styles.signButton} onPress={() =>
                                navigation.navigate('step11')}>
                                <Text style={[styles.t15, styles.colorWhite, { fontWeight: '700' }]}>
                                    NEXT
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    step1Content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    rangeView: {
        flexDirection: "row",
    },
    t18: {
        fontSize: 16,
    },
    t20bold: {
        fontWeight: '700',
        fontSize: 21,
    },
    signButton: {
        paddingVertical: 13,
        paddingHorizontal: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E6447D',
        backgroundColor: '#E6447D'
    },
    dayButton: {
        marginTop: 30,
        paddingVertical: 13,
        paddingHorizontal: 40,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#E6447D',
        backgroundColor: '#E6447D'
    },
    previousButton: {
        paddingVertical: 13,
        paddingHorizontal: 30,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#E6447D',
        backgroundColor: '#FEF9FB'
    },
    bgPink: {
        backgroundColor: '#FEF9FB'
    },
    textCenter: {
        textAlign: 'center'
    },
    colorPink: {
        color: '#E6447D'
    },
    colorWhite: {
        color: '#fff'
    },
});

export default Step8Screen;