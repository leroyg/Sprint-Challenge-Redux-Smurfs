/*
  Be sure to import in all of the action types from `../actions`
*/
import { GETTING_SMURFS, ADDING_SMURF, UPDATING_SMURF, DELETING_SMURF, ERROR } from '../actions';

const initialState = {
   smurfs: [],
   gettingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

 export const reducer = (state - initialState, action) => {
   switch (action.type) {
     case GETTING_SMURFS: {
       console.log(`we've got smurfs`);
       return {
         ...state,
         gettingSmurfs: true,
         addingSmurf: false,
         updatingSmurf: false,
         deletingSmurf: false,
       };
     }

    

   }
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
