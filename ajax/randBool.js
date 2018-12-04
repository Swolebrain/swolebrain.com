function randBool() {
	return (Math.round(Math.random() * 10) % 2) == 0;
}

function doit() { 
	if(randBool()) {
		return "The thing was true, fucker!";
	}
	else {
		return "The thing wasn't true, fucker!";
	}
}

doit();
