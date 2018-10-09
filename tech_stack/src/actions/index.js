// Action creator:
// function - takes a library id (libraryId)
// and returns:
//  - the type
//  - the id of the library list item (libraryId)
export const selectLibrary = (libraryId) => {  
  return{        // action
    type: 'select_library',
    payload: libraryId
  };
};