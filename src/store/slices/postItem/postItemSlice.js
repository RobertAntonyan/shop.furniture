import { createSlice } from "@reduxjs/toolkit"

// export const initialPostItem = [
//   {
//     id: '1',
//     month: 'May',
//     day: Math.round(Math.random() * 31).toString(),
//     post: 'Lorem Ipsum is simply dummy text.',
//   },
//   {
//     id: '2',
//     month: 'Jun',
//     day: Math.round(Math.random() * 31).toString(),
//     post: 'Lorem Ipsum is simply dummy text.',
//   },
//   {
//     id: '3',
//     month: 'Sept',
//     day: Math.round(Math.random() * 31).toString(),
//     post: 'Lorem Ipsum is simply dummy text.',
//   },
//   {
//     id: '4',
//     month: 'Dec',
//     day: Math.round(Math.random() * 31).toString(),
//     post: 'Lorem Ipsum is simply dummy text.',
//   },
//   {
//     id: '5',
//     month: 'Apr',
//     day: Math.round(Math.random() * 31).toString(),
//     post: 'Lorem Ipsum is simply dummy text.',
//   },
// ]

// export const postItemReducer = (state = initialPostItem, action) => {
//       switch(action.type) {
//           default:
//               return state
//       }
// }

export const postItemSlice = createSlice({
  name: 'postItem',
  initialState: [
    {
      id: '1',
      month: 'May',
      day: Math.round(Math.random() * 31).toString(),
      post: 'Lorem Ipsum is simply dummy text.',
    },
    {
      id: '2',
      month: 'Jun',
      day: Math.round(Math.random() * 31).toString(),
      post: 'Lorem Ipsum is simply dummy text.',
    },
    {
      id: '3',
      month: 'Sept',
      day: Math.round(Math.random() * 31).toString(),
      post: 'Lorem Ipsum is simply dummy text.',
    },
    {
      id: '4',
      month: 'Dec',
      day: Math.round(Math.random() * 31).toString(),
      post: 'Lorem Ipsum is simply dummy text.',
    },
    {
      id: '5',
      month: 'Apr',
      day: Math.round(Math.random() * 31).toString(),
      post: 'Lorem Ipsum is simply dummy text.',
    },
  ],
  reducers: {
    setPostItem(state, { payload }) {
      return payload
    }
  }
})

export const selectPostItem = state => state.postItem

export const postItemReducer = postItemSlice.reducer