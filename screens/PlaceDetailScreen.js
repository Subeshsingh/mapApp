import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const PlaceDetailsScreen = props =>{
    return(
        <View>
            <Text>Place Details</Text>
        </View>
    )
}

PlaceDetailsScreen.navigationOptions = navData =>{
    return{
        headerTitle: navData.navigation.getParam('placeTitle')
    }
}
const syles=StyleSheet.create({

});

export default  PlaceDetailsScreen;