# github-helper
npm-like package manager based on GitHub
# Note: This version can just list repositories from a user or organization and clone a repository in local folder

# Example: Initializing

    var github = require('github-helper')(name, type);
The variable type specifies if you are looking for a orgzanization or user. The variable name specifies its name. For example: if you want to see my repositories, you should initialize this way
  
    var github = require('github-helper')('ItsMeAlves', 'users');

Or if you want to get Twitter's repositories, just type:

    var github = require('github-helper')('twitter','orgs');
  
#Example: listing and seaching repositories
  
    //Initializing helper
    var github = require('github-helper')('ItsMeAlves', 'users');
      
    //First, i'll just list every repository I own
    github.list('', function(error, result) {
        console.log(result);
    });
      
    //Or you could list without that empty string
    github.list(function(error, result) {
        console.log(result);
    });
      
    //Now, i'll search for a repository. It uses String.prototype.match method
    //It searches for a repository using a partial name or full name
    github.list('data-render', function(error, result) {
        console.log(result);
    });
      
    //Now, trying with partial name
    github.list('data', function(error, result) {
        console.log(result);
    });
    
# Example: Cloning a repository.

    var github = require('github-helper')('ItsMeAlves', 'users');
    
    //Cloning repositories just support full identical name
    github.install('data-render');
    
    //The following doesn't work to clone data-render repository, but you can combine list method for that
    github.install('data');
    
