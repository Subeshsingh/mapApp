import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const NewPlaceScreen = props =>{
    return(
        <View>
            <Text>New Place</Text>
        </View>
    )
}

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place',
}
const syles=StyleSheet.create({

});

export default  NewPlaceScreen;