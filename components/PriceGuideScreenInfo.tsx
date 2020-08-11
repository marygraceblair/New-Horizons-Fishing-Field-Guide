import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
const price = 0;

import { RadioButton, TextInput, Button} from 'react-native-paper';
export default function PriceGuideScreenInfo({ path }: { path: string }) {
    const [ text, setText] = React.useState('');
    const [value, setValue] = React.useState('bug');
    
    return (
        <View style={{flexDirection: 'column'}}>
            <View style={styles.getStartedContainer}>
                <img src='https://vignette.wikia.nocookie.net/animalcrossing/images/4/44/NH-Icon-Nook_Phone-Critterpedia.png/revision/latest/scale-to-width-down/340?cb=20200430155808'></img>
            
                <View style={styles.priceFormContainer}>
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

                    <Button mode="contained" disabled= {text==''} onPress={ () => handleSubmitPress(value, text)}>
                        Find Price
                    </Button>
                </View>
            </View>

            <View style={{ flex:1, justifyContent: "center", alignItems: "center"}}>
                <h4>{price} Bells</h4>
            </View>
            
        </View>
    );
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
      );
    }

    //using the airbnb style guide for javascript
function handleSubmitPress(critterType, critterName) {
    
    var apiUrl = 'http://acnhapi.com/v1/';

    //react-native cannot use ajax because react-native uses it's own DOM
    return fetch(apiUrl + critterType + '/' + critterName)
    .then((response) =>  {
        if (!response.ok)
        {
            throw new Error('Critter Not Found');
        }
        return response.json() 
    })
    .then((json) => {
        var responseInfo = json; 
        console.log(responseInfo);
        var price = responseInfo.price;
        console.log({price});
        return responseInfo;
    })
    .catch((error) => console.log(error));
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
        flex: 1, 
        flexDirection: 'row'
    },
    priceFormContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 70,
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
