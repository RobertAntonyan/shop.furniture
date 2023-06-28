// export const initialFormInfo = {
//   firstName: '',
//   lastName: '',
//   password: ''
// }

import { createSlice } from "@reduxjs/toolkit";

// export const registrReducer = (state = initialFormInfo, action) => {
//   switch (action.type) {
//     case 'set_Form_Info':
//       const { firstName, lastName, password } = action.payload
//       return {
//         // ...state,
//           firstName: firstName,
//           lastName: lastName,
//           password: password
//       }

//     default:
//       return state
//   }
// }
// export const selectFormInfo = state => state.formInfo

// export const setFormInfo = (value) => {

//   return {
//     type: 'set_Form_Info',
//     payload: value
//   }
// }

const formInfoSlice = createSlice({
  name: 'formInfo',
  initialState: {
    firstName: '',
    lastName: '',
    password: ''
  },
  reducers: {
    set_Form_Info(state, { payload }) {
      const { firstName, lastName, password } = payload
      return {
        ...state,
        firstName: firstName,
        lastName: lastName,
        password: password
      }
    }
  }
})
export const selectFormInfo = state => state.formInfo

export const { set_Form_Info } = formInfoSlice.actions

export const formInfoReducer = formInfoSlice.reducer