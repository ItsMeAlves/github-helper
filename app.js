function GithubHelper(name, type) {
	this._name = name;
	this._type = type;
}

GithubHelper.prototype.list = function(query, callback) {
    if(arguments.length === 1) {
        callback = query;
        query = '';
    }
    else if(arguments.length !== 2) {
        return 'undefined';
    }
    
    var request = require('request');
	var configuration = {
		url: 'https://api.github.com/' + this._type+ '/' + this._name + '/repos',
		json: true,
		headers: {
			'User-Agent': 'request'
		}
	};

	request(configuration, function(error, response, body) {
		if(error || response.statusCode !== 200) {
			callback(error, response.statusCode);
		}
		else {
			callback(null, 
			body.map(function(x) {
				return {
					name: x.name,
					description: x.description
				};
			})
			.filter(function(x) {
				return x.name.match(query);
			}));
		}
	});
}

GithubHelper.prototype.install = function(name) {
	var ex = require('child_process');
    var cmd = 'git clone https://github.com/' + this._name + '/' + name;
	console.log('Running ' + cmd);
	ex.exec(cmd, function(error, stdout, stderr) {
		process.stdout.write(stdout);
		console.log('Finish! Go make something amazing!');
	});
}

module.exports = function(name, type) {
    return new GithubHelper(name, type);
}