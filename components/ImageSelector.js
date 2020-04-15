import React,{useState} from 'react';
import { View,Button,Text,StyleSheet,Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Colors from '../constants/Colors';

const ImageSelector = props => {
    const [pickimage, setPickImage] = useState();

    const verifyPermission = async() =>{
       const result =await Permissions.askAsync(Permissions.CAMERA,Permissions.CAMERA_ROLL);
       if(result.status !== 'granted') {
           Alert.alert(
               'Insufficient permissions!',
               'Yu need to grant camera permissions to use this app.',
               [{text:'Okay'}]
           );
           return false;
       }
       return true;
    }

    const takeImageHandler = async() =>{
        const hasPermission = await verifyPermission();
        if(!hasPermission){
            return;
        }
       const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality:0.5
        });
        console.log(image);
        setPickImage(image.uri);
        props.onImageTaken(image.uri);
    }
    return(
        <View style={styles.imageSelector}>
            <View style={styles.imagePreview}>
               { !pickimage ? <Text>No Image Picked Yet</Text>
                :<Image style={styles.image} source={{uri:pickimage}}/>
                }
                </View>
            <Button title="Take Image" color={Colors.primary} onPress={takeImageHandler}/>
        </View>
    )
} 

const styles= StyleSheet.create({
    imageSelector:{
        alignItems:'center',
    },
    imagePreview:{
        width:'100%',
        height:200,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#ccc',
        borderWidth:1
    },  
    image:{
        width: '100%',
        height:'100%'
    },
});

export default ImageSelector;
