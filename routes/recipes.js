var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipeC');

router.get('/', recipesCtrl.index); // all recipes
router.get('/new-recipe', recipesCtrl.addRecipe); // add recipe, form
router.get('/:id', recipesCtrl.showRecipe); // show recipes details by Id
router.post('/', recipesCtrl.create); // create data
router.delete('/:id', recipesCtrl.deleteRecipe); // delete recipe
router.get('/:id/edit', recipesCtrl.editRecipe);
router.put('/:id', recipesCtrl.updateRecipe);

module.exports = router;
