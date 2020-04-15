import * as placeAction from './places-action';
import Place from '../models/place';

const initialState = {
    places:[]
};

export default (state=initialState,action) => {
    switch(action.type){
        case placeAction.SET_PLACES:
            return{
                places: action.places.map( pl => 
                        new Place(
                            pl.id.toString(),
                            pl.title,
                            pl.imageUri)
                        )
            }
         break; 
        case placeAction.ADD_PLACE:
            const newPlace = new Place(
                action.placeData.id.toString(), 
                action.placeData.title,
                action.placeData.image
                );
            return{
                places: state.places.concat(newPlace)
            }
        break;
        default:
            return state;
    }
}