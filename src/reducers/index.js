// import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions/index';
import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF } from '../actions';

export const initialState = {
    smurfs: [
        {
            id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
            name: "Jessie",
            position: "Mami",
            nickname: "Moonbeam",
            description: "A majestic being, identifiable easily by her sparkling eyes, glowing skin and flowing, golden-ruby hair. Her voice is said to have the ability to calm any ails and tame ferocious beasts."
        }
    ],
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            console.log("FETCH_START")
            return {
                ...state,
                smurfs: [],
                isLoading: true,
                error: ''
            }
        case FETCH_SUCCESS:
            console.log("FETCH_SUCCESS")
            return {
                ...state,
                smurfs: [],
                isLoading: false,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                smurfs: [],
                isLoading: false,
                error: action.payload
            }
        case ADD_SMURF:
            const newSmurf = {
                ...action.payload,
                id: Date.now()
            }
            return {
                ...state,
                smurfs: [...state.smurfs, newSmurf]
            }
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.