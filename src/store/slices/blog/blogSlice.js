
import { createSlice } from '@reduxjs/toolkit'
import Images from '../../../Images/index'

// export const initialBlogData = [{
//     id: '1',
//     date: '25.06.2021',
//     title: 'HEAVE A LOOK AT OUR NEW PROJECTS!',
//     description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
//     img: Images.blog1,
//   },
//   {
//     id: '2',
//     date: '25.06.2021',
//     title: 'HEAVE A LOOK AT OUR NEW PROJECTS!',
//     description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
//     img: Images.blog2,
//   },
//   {
//     id: '3',
//     date: '25.06.2021',
//     title: 'HEAVE A LOOK AT OUR NEW PROJECTS!',
//     description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
//     img: Images.blog3,
//   },
//   {
//     id: '4',
//     date: '25.06.2021',
//     title: 'HEAVE A LOOK AT OUR NEW PROJECTS!',
//     description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
//     img: Images.blog4,
//   },
//   {
//     id: '5',
//     date: '25.06.2021',
//     title: 'HEAVE A LOOK AT OUR NEW PROJECTS!',
//     description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
//     img: Images.blog5,
//   },]

  // export const blogReducer = (state = initialBlogData, action) => {
  //       switch(action.type) {
  //           default:
  //               return state
  //       }
  // }
  //  export const selectBlogData = state => state.blogData

export const blogDataSlice = createSlice({
  name: 'blogData',
  initialState: [{
    id: '1',
    date: '25.06.2021',
    title: 'HEAVE A LOOK AT OUR NEW PROJECTS!',
    description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
    img: Images.blog1,
  },
  {
    id: '2',
    date: '25.06.2021',
    title: 'HEAVE A LOOK AT OUR NEW PROJECTS!',
    description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
    img: Images.blog2,
  },
  {
    id: '3',
    date: '25.06.2021',
    title: 'HEAVE A LOOK AT OUR NEW PROJECTS!',
    description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
    img: Images.blog3,
  },
  {
    id: '4',
    date: '25.06.2021',
    title: 'HEAVE A LOOK AT OUR NEW PROJECTS!',
    description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
    img: Images.blog4,
  },
  {
    id: '5',
    date: '25.06.2021',
    title: 'HEAVE A LOOK AT OUR NEW PROJECTS!',
    description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
    img: Images.blog5,
  }],
  reducers: {
      setBlogData(state, {payload}) {
          return payload
      }
  }
})

export const selectBlogData = state => state.blogData

export const blogDataReducer = blogDataSlice.reducer