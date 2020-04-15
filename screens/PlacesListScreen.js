import React,{useEffect} from 'react';
import { View,Text,StyleSheet, Platform,FlatList } from 'react-native';
import {HeaderButtons , Item} from 'react-navigation-header-buttons';
import { useSelector,useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';
import * as placesAction from '../store/places-action';

const PlacesListScreen = props =>{
    const placesList = useSelector(state=> state.places.places)
    
    const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch(placesAction.loadPlaces());
    }, [dispatch]);
    
    return(
        <FlatList data={placesList} keyExtractor={item=>item.id}
            renderItem={ itemdata =>
                <PlaceItem 
                    image={itemdata.item.imageUri}
                    title={itemdata.item.title}
                    address={"abc"}
                    onSelect={()=>{
                        props.navigation.navigate('PlaceDetail',{
                            placeTitle: itemdata.item.title,
                            placeId: itemdata.item.id
                        })
                    }}
                /> }
        />
    )
}

PlacesListScreen.navigationOptions = navData =>{
    return {
        headerTitle: 'All Places',
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="Add Place" 
                iconName={Platform.OS ==='android' ? 'md-add': 'ios-add'}
                onPress={()=>{
                    navData.navigation.navigate('NewPlace');
                }}
                />
        </HeaderButtons>
    }
}
const syles=StyleSheet.create({

});

export default  PlacesListScreen;