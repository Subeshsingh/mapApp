import React,{ useState } from 'react';
import { View,Text,StyleSheet,ScrollView,TextInput,Button } from 'react-native';
import  Colors  from '../constants/Colors';

import {useDispatch} from 'react-redux'
import * as placeAction from '../store/places-action';
import ImageSelector from '../components/ImageSelector';

const NewPlaceScreen = props =>{
    const [titleValue, setTitleValue] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const dispatch =useDispatch(); 
    
    const titleChangeHandler = text =>{
        //set some valid identifier
        setTitleValue(text);
    }

    const imageTakenHandler = (imagePath) =>{
            setSelectedImage(imagePath);
    }

    const addPlaceHandler = () =>{
        dispatch(placeAction.addPlace( titleValue, selectedImage ));
        props.navigation.goBack();
    } 
    return(
        <ScrollView>
            <View style={styles.formConatiner}>
                <View style={styles.form}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.textInput} onChangeText={titleChangeHandler} value={titleValue}/>
                    <ImageSelector onImageTaken={imageTakenHandler}/>
                </View>
                <Button title="Save Place" color={Colors.primary} onPress={addPlaceHandler}/>
            </View>
        </ScrollView>
    )
}

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place',
}
const styles=StyleSheet.create({
    form:{
        flex:1,
        width:"100%",
        marginBottom: 10
    },
    textInput:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 1,
        marginBottom:10 
    },
    formConatiner:{
        margin:20
    }
});

export default  NewPlaceScreen;