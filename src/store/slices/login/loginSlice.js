// export const initialCurrentUser = []

import { createSlice } from "@reduxjs/toolkit";

// export const loginReducer = (state = initialCurrentUser, action) => {
//         switch(action.type) {
//             case 'toggleUser': 
//                 return [

//                  ...state,
//                 {
//                   ...action.payload
//                 }
//               ]

//             default: 
//             return state
//         }

// }
// export const selectCurrentUser = state => state.currentUser
// export const toggleUser = (value) => {
//       return {
//         type: 'toggleUser',
//         payload: value
//       }
//     }

export const loginSlice = createSlice({
  name: 'currentUser',
  initialState: [],
  reducers: {
    toggleUser(state, { payload }) {
      return [

        ...state,
        {
          ...payload
        }
      ]
    }
  }
})

export const selectCurrentUser = state => state.currentUser

export const loginReducer = loginSlice.reducer

export const { toggleUser } = loginSlice.actions