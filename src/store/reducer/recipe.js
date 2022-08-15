import {
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  SAVE_RECIPE,
  UNSAVE_RECIPE,
} from '../type';

const initialState = {
  recipes: [],
  saveRecipes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RECIPE:
      let newData = action.createRecipe;
      let updateData;

      const newRecipe = {
        id: state.recipes.length + 1,
        name: newData.name,
        cuisine: newData.cuisine,
        meat: newData.meat,
        date: newData.date,
        month: newData.month,
        year: newData.year,
        image: newData.image,
      };

      updateData = [...state.recipes, newRecipe];
      return {...state, recipes: updateData};

    case UPDATE_RECIPE:
      let currentData = action.updateRecipe;
      let recipeIndex = state.recipes.findIndex(
        item => item.id === currentData.id,
      );

      const updateRecipe = [...state.recipes];
      updateRecipe[recipeIndex] = currentData;

      return {
        ...state,
        recipes: updateRecipe,
      };

    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(item => item.id != action.recipeId),
      };

    case SAVE_RECIPE:
      let currentRecipe = action.saveRecipe;
      let updateSaveRecipe;

      const newSaveRecipes = {
        id: state.saveRecipes.length + 1,
        mealId: currentRecipe.mealId,
        mealName: currentRecipe.mealName,
        mealImg: currentRecipe.mealImg,
      };

      updateSaveRecipe = [...state.saveRecipes, newSaveRecipes];

      return {
        ...state,
        saveRecipes: updateSaveRecipe,
      };

    case UNSAVE_RECIPE:
      return {
        ...state,
        saveRecipes: state.saveRecipes.filter(
          item => item.id !== action.unsaveRecipeId,
        ),
      };
    default:
      return {recipes: state.recipes, saveRecipes: state.saveRecipes};
  }
};
