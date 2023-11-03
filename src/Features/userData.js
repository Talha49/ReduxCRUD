import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


//get action
export const createUser = createAsyncThunk(
   "createUser",
   async (data, {rejectWithValue}) => {
      const response = await fetch("https://653eb17e9e8bd3be29dfa3f0.mockapi.io/crud",{
         method: "POST",
         headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        
      });
      try{
         const result = await response.json();
         return result;
      }catch(error){
      return rejectWithValue(error);
      }
   }
)
//read actions
export const showuser = createAsyncThunk("showuser", async (_, { rejectWithValue }) => {
   try {
     const response = await fetch("https://653eb17e9e8bd3be29dfa3f0.mockapi.io/crud");
     if (!response.ok) {
       throw new Error("Network response was not ok");
     }
 
     const result = await response.json();
     return result;
   } catch (error) {
     return rejectWithValue(error.message);
   }
 });
 
 //delete User
 export const deleteuser = createAsyncThunk("deleteuser", async (id, { rejectWithValue }) => {
   try {
     const response = await fetch(`https://653eb17e9e8bd3be29dfa3f0.mockapi.io/crud/${id}`,
     {method : "DELETE"}
     );
     if (!response.ok) {
       throw new Error("Network response was not ok");
     }
 
     const result = await response.json();
     return result;
   } catch (error) {
     return rejectWithValue(error.message);
   }
 });
 

 //Update data
 export const updateUser = createAsyncThunk(
   "updateUser",
   async (data, {rejectWithValue}) => {
      const response = await fetch(`https://653eb17e9e8bd3be29dfa3f0.mockapi.io/crud/${data.id}`,{
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        
      });
      try{
         const result = await response.json();
         return result;
      }catch(error){
      return rejectWithValue(error);
      }
   }
)





export const userData = createSlice({

     name: 'User',
     initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: [],
     }, 
     reducers: {
      searchUser : (state,action) => {
      state.searchData = action.payload;
      } ,
     },
     extraReducers: {
      [createUser.pending]: (state) => {
         state.loading = true;
      },
      [createUser.fulfilled]: (state, action) => {
         state.loading = false;
         state.users.push(action.payload);
      },
      [createUser.rejected]: (state, action) => {
         state.loading = false;
         state.error = action.payload.message;
      },
      [showuser.pending]: (state) => {
         state.loading = true;
      },
      [showuser.fulfilled]: (state, action) => {
         state.loading = false;
         state.users = action.payload;
      },
      [showuser.rejected]: (state, action) => {
         state.loading = false;
         state.error = action.payload;
      },
      [deleteuser.pending]: (state) => {
         state.loading = true;
      },
      [deleteuser.fulfilled]: (state, action) => {
         state.loading = false;
         const {id} = action.payload;
         if(id){
            state.users = state.users.filter((user) => user.id !== id);
         }
      },
      [deleteuser.rejected]: (state, action) => {
         state.loading = false;
         state.error = action.payload;
      },
      [updateUser.pending]: (state) => {
         state.loading = true;
      },
      [updateUser.fulfilled]: (state, action) => {
         state.loading = false;
         state.users = state.users.map((user) => user.id === action.payload.id ? action.payload : user);
      },
      [updateUser.rejected]: (state, action) => {
         state.loading = false;
         state.error = action.payload.message;
      },
     }
});
export default userData.reducer;

export const  {searchUser} = userData.actions;