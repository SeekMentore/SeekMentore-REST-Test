function loginSuccess() {
	var data = { 
			userId		: 'seek', 
			password	: 'mentore', 
			userType	: 'admin'
	}
	callWebservice('/rest/login/validateCredential', data, null, null, null, 'application/x-www-form-urlencoded');
}

function loginFailure() {
	var data = { 
			userId		: 'seek', 
			password	: 'unknown', 
			userType	: 'admin'
	}
	callWebservice('/rest/login/validateCredential', data, null, null, null, 'application/x-www-form-urlencoded');
}

function resetPasswordSuccess() {
	var data = { 
			userId		: 'seek', 
			userType	: 'admin'
	}
	callWebservice('/rest/login/resetPassword', data, null, null, null, 'application/x-www-form-urlencoded');
}

function resetPasswordFailure() {
	var data = { 
			userId		: 'seek', 
			userType	: 'tutor'
	}
	callWebservice('/rest/login/resetPassword', data, null, null, null, 'application/x-www-form-urlencoded');
}

function getErrorDetails() {
	var data = { 
			errorCode		: '101'
			// Valid error codes 101, 102, 103, 104, 105, 106
	}
	callWebservice('/rest/commons/getErrorDetails', data, null, null, null, 'application/x-www-form-urlencoded');
}