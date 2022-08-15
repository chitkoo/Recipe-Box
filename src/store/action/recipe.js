import {
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  SAVE_RECIPE,
  UNSAVE_RECIPE,
} from '../type';

export const createRecipe = data => {
  return {
    type: CREATE_RECIPE,
    createRecipe: data,
  };
};

export const updateRecipe = data => {
  return {
    type: UPDATE_RECIPE,
    updateRecipe: data,
  };
};

export const deleteRecipe = id => {
  return {
    type: DELETE_RECIPE,
    recipeId: id,
  };
};

export const saveRecipe = data => {
  return {
    type: SAVE_RECIPE,
    saveRecipe: data,
  };
};

export const unSaveRecipe = id => {
  return {
    type: UNSAVE_RECIPE,
    unsaveRecipeId: id,
  };
};
