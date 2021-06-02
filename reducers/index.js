
import {combineReducers} from 'redux';
import gameReducer from './game.reducer'
import userReducer from './user.reducer'
export default combineReducers({
    user: userReducer,
    game: gameReducer
})

