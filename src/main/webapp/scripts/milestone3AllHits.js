function checkUIpathAccessSuccess() {
	var data = { 
			urlPath: '{Anything can be passed except for "seek"}'
	}	
	callWebservice('/rest/login/checkUIpathAccess', data, null, null, null, 'application/x-www-form-urlencoded');
}

function checkUIpathAccessFailure() {
	var data = { 
			urlPath: 'seek'
	}
	callWebservice('/rest/login/checkUIpathAccess', data, null, null, null, 'application/x-www-form-urlencoded');
}

