const recipeModel = require('../models/recipeM');

module.exports = {
    index,
    showRecipe,
    addRecipe,
    create,
    deleteRecipe,
    editRecipe,
    updateRecipe
};

function index(req, res) {
    recipeModel.find({}, function(err, results) {
        res.render('recipes/index.ejs', {title: 'All Recipes', results, user: req.user})
    });
}

function showRecipe(req, res) {
    recipeModel.findById(req.params.id)
    .populate('cast').exec(function(err, recipe) {
        res.render('recipes/show.ejs', {title: 'Recipe Details', recipe, user: req.user});
    });
}

function addRecipe(req, res) {
    res.render('recipes/new.ejs', {title: 'Add your Recipe', user: req.user});
}

function create(req, res) {
    recipeModel.create ((req.body),

    function (err, result) {
        if (err) {'Unvalid info!'}
    })
    res.redirect('/recipes')
}

function deleteRecipe(req, res) {
    recipeModel.findOne(req.params.id, function(err, recipe) {
      recipeModel.deleteOne(function(err) {
        res.redirect('/recipes');
    });
});
}

function editRecipe(req, res) {
    recipeModel.findById(req.params.id, function(err, recipe) {
        res.render('recipes/edit.ejs', { 
            title: 'Edit Recipe', 
            recipe, 
            user: req.user
        });
    });
}

function updateRecipe(req, res) {
    console.log(req.params.id, req.body);
    recipeModel.findById(req.params.id, function(err, recipe) {
console.log(recipe);

// recipe = req.body;
      recipe.name = req.body.newName;
      recipe.origin = req.body.newOrigin;
      recipe.ingredients = req.body.newIngredients;
      recipe.instructions = req.body.newInstructions;
      recipe.time = req.body.newTime;
      recipe.image = req.body.newImage;
      recipe.save(function(err) {
          res.redirect('/recipes');
      })

    });
}

  

