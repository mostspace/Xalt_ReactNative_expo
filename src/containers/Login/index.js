import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/Header/index';
import { FontAwesome } from '@expo/vector-icons';

function LoginScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Header pressLogo={() =>
          navigation.navigate('home')} />
        <View style={styles.loginContent}>
          <Text style={styles.t35}>Login</Text>
          <Text style={[styles.t20, { fontWeight: '300', paddingTop: 20 }]}>Stay updated on your health and fitness.</Text>
          <View style={{ width: '88%', marginTop: 40 }}>
            <TextInput placeholder="UserName" style={[styles.loginInput]} />
          </View>
          <View style={{ width: '88%', marginTop: 20, display: 'flex', flexDirection: 'row' }}>
            <TextInput placeholder="Password" style={[styles.loginInput]} />
            <TouchableOpacity style={{ position: 'absolute', right: 10, top: 10 }}>
              <FontAwesome name="eye-slash" size={24} color="#999999" />
            </TouchableOpacity>
          </View>
          <View style={{ width: '80%', marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity>
              <Text style={{ color: '#E6447D' }}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 50 }}>
            <TouchableOpacity style={styles.signButton} onPress={() =>
              navigation.navigate('main')}>
              <Text style={[styles.t15, styles.textCenter, styles.colorWhite, { fontWeight: '700' }]}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 50, width: '100%', display: 'flex', flexWrap: "wrap", flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={[styles.t15, styles.textCenter, { fontWeight: '300' }]}>
              If you don't have an account,
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
              <Text style={[styles.t15, styles.textCenter, styles.colorPink, { fontWeight: '300' }]}>Sign Up as Member</Text>
            </TouchableOpacity>
            <Text style={[styles.t15, styles.textCenter, { fontWeight: '300' }]}> or </Text>
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
              <Text style={[styles.t15, styles.textCenter, styles.colorPink, { fontWeight: '300' }]}>Sign Up as Coach</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginInput: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#505d68',
    borderBottomColor: '#505d68',
    borderBottomWidth: 2,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
  },
  loginContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  t35: {
    fontWeight: '700',
    fontSize: 35
  },
  t25: {
    fontSize: 25
  },
  t20: {
    fontSize: 20,
  },
  t15: {
    fontSize: 15,
  },
  colorWhite: {
    color: '#fff'
  },
  colorPink: {
    color: '#E6447D'
  },
  bgPink: {
    backgroundColor: '#fff'
  },
  mainImage: {
    height: 560,
    width: 300,
  },
  signContainner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
    paddingTop: 50,
  },
  signButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6447D',
    backgroundColor: '#E6447D'
  },
  textCenter: {
    textAlign: 'center'
  }
});

export default LoginScreen;