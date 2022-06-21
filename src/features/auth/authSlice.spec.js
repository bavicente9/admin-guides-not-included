//TODO: this


import authReducer, {changeConnexionStatus} from './authSlice'

describe('auth reducer', () => {
  
    const initialState = {
        connexionStatus: false
    }

    it('should handle initial state', () => {
        expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    })

    it('should change the state', () => {
        const actual = authReducer(initialState, changeConnexionStatus(true));
        expect(actual.connexionStatus).toBeTruthy();
    })
})