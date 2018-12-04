module.exports = function(app, passport){

	app.get("/", function(req, res){
		res.render("index.ejs");
	});

	app.get("/login", function(req, res){
		res.render('login.ejs', {
			message: req.flash('loginMessage')
		});
	});

	app.get("/signup", function(req,res){
		res.render('signup.ejs', {
			message: req.flash("signupMessage")
		});
	});

	app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.session.user // get the user out of session
        });
    });


    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

	var User = require("./models/user.js");
	app.post("/signup", function(req, res){
		if (!req.body.email || !req.body.password){
			res.end("Username and password required");
		}
		else{
			User.findOne({
				'local.email': req.body.email
			}, function(err, user) {
				if (err) {
					res.end("DB error");
					console.log(err);
				}
				else if (user) {
					
					req.flash("signupMessage", "That email is already in use");
					console.log("User exists");
				}
				else {
					console.log("creating new user with " + req.body.email);						var newUser = new User();
					newUser.local.email = req.body.email;
					newUser.local.password = newUser.generateHash(req.body.password);
					newUser.save(function(err){
						if (err) throw err;
						console.log("User "+req.body.email+" signed up!!");
						req.session.isAuthenticated = true;
						req.session.user = newUser;
						res.redirect("/profile");
					});
				}
			});
		}
	});

	app.post("/login", function(req, res){
		if (!req.body.email || !req.body.password){
            res.end("Username and password required");
        }
		else{
			
			User.findOne({ "local.email" : req.body.email },
			function(err, user){
				if (err) throw err;
				if (user){
					console.log("Found user");
					console.log(JSON.stringify(user));
					if (user.generateHash(req.body.password) == 
											user.local.password){
						req.session.isAuthenticated = true;
						req.session.user = user;
						res.redirect("/profile");
					}
					else{
						req.flash("loginMessage", "That pw is wrong");
					}					
				}
				else{
					console.log("couldn't find user "+req.body.email);
					req.flash("loginMessage", "That email couldn't be found");
				}
			});
		}
	});

}

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.session.isAuthenticated){
		console.log("isLoggedIn called, returned authenticated");
        next();
	}
	else{	
		console.log("isLoggedIn called, returned NOT authenticated");
		// if they aren't redirect them to the home page
		res.redirect('/');

	}
}
