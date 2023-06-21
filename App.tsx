/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { Chair as BlackChair } from './Chair'
import * as greetings from './helpers'
import Table from './Tables';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const [theme, setTheme] = useState('light')

  return (
    <SafeAreaView>
      <Text style={style.headerDark} onPress={() => setTheme('dark')}>Make theme dark</Text>
      <Text style={{marginStart: 16,  marginTop: 5, fontSize: 16}} onPress={() => setTheme('light')}>Make theme Light</Text>
      <View>

        { /* Chair */}
        <BlackChair theme={theme} />

        { /* Table */}
        <Table />
      </View>
    </SafeAreaView>

  );
}


const style = StyleSheet.create( {
  headerDark: {marginStart: 16, marginTop: 16,  fontSize: 16}
})


export default App;
