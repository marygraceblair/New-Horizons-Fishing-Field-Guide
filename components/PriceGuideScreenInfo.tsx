import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import { RadioButton, TextInput, Button} from 'react-native-paper';
export default function PriceGuideScreenInfo({ path }: { path: string }) {
    const [ text, setText ] = React.useState('');
    const [value, setValue] = React.useState('bug');
    return (
        <View>
            <View style={styles.getStartedContainer}>
            </View>
            <TextInput
                label='Name'
                value={text}
                mode='outlined'
                onChangeText={text => setText(text)}
            />
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <View>
                    <Text>Bug</Text>
                    <RadioButton value="bug" />
                    <Text>Fish</Text>
                    <RadioButton value="fish" />
                </View>
            </RadioButton.Group>
            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Find Price
            </Button>
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
