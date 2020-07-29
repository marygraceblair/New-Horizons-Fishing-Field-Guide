import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import { TextInput } from 'react-native';
import { Input, CheckBox, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
export default function PriceGuideScreenInfo({ path }: { path: string }) {
    const [value, onChangeText] = React.useState('Critter Name:');
    const [checked, setChecked]= React.useState(false);
    return (
        <View>
            <View style={styles.getStartedContainer}>
            </View>
            <Input
                label='Name'
                placeholder='Critter Name'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID NAME'
            />
            <CheckBox
                title='Bug'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={checked}
                onPress={() => setChecked(!checked)}
            />
            <CheckBox
                title='Fish'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={checked}
                onPress={() => setChecked(!checked)}
            />
            <Button
                title='Find Price'
                type='outline'
            />
        </View>
    );
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
      );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    developmentModeText: {
        marginBottom: 20,
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    },
});