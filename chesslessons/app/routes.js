module.exports = function(app, passport, openings) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
		if (typeof req.user != 'undefined'){
			console.log(JSON.stringify(req.user));
			if (typeof req.user.facebook != 'undefined')
				console.log(req.user.facebook.email);	
		}
        res.render('index.ejs', { user: req.user}); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
	
	// =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/',
            failureRedirect : '/login'
    }));
		

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
	
	
	//=========================================================
	// ================RESTFUL API CALLS ======================
	//=========================================================
	app.use(function(req, res, next){
		var t = new Date();
		console.log(t.getMonth() +"/"+ t.getDate() +" "+ t.getHours() +":"+ t.getMinutes() +":"+ t.getSeconds());
		next();
	});
	
	app.get('/api/openings/:id', function(req, res){
		if (req.params.id == "all"){
			res.json(openings);
			return;
		}
		else if (req.params.id == 'categories'){
			var retVal = [];
			console.log("received categories request");
			for (var i in openings){
				if (openings[i].category && retVal.indexOf(openings[i].category) < 0 ){
					retVal.push(openings[i].category);
				}
			}
			res.json(retVal.sort());
		}
		else if (req.params.id.substring(0,3) == "cat"){
			var cat = req.params.id.substring(3);
			var retVal = {};
			var sortable = []
			for (var i in openings){
				if (openings[i] && openings[i].category == cat)
					//retVal[i] = openings[i];
					sortable.push(i);
			}
			sortable.sort();
			for (var x = 0; x < sortable.length; x++){
				retVal[sortable[x]] = openings [ sortable[x] ];
			}
			console.log(retVal);
			res.json(retVal);
		}
		else{
			var requestedOpening = openings[req.params.id];
			console.log("===================================");
			console.log(JSON.stringify(requestedOpening));
			res.json(requestedOpening);
			//res.end();
		}
	});
	app.get("/sample-api", function(req, res){
		var n = Math.ceil(Math.random() * 12) + 1;
		var returnVal = "";
		for (var i =0; i < n; i++){
			returnVal += "<li>item "+i+"</li>";
		}
		res.end(returnVal);
	});
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
