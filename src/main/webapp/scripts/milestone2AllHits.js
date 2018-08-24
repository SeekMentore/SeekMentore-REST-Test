function getLoginBasicInfo() {
	callWebservice('/rest/commons/getLoginBasicInfo', null, null, null, null, 'application/json');
}

function getEmailTemplates() {
	callWebservice('/rest/commons/getEmailTemplates', null, null, null, null, 'application/json');
}

function loadEmailTemplate() {
	var data = { 
		templateId		: '01'
		// Valid templateId 01, 02
	}
	callWebservice('/rest/commons/loadEmailTemplate', data, null, null, null, 'application/x-www-form-urlencoded');
}

function logoutSuccess() {
	callWebservice('/rest/login/logout', null, null, null, null, 'application/json');
}

function logoutFailure() {
	callWebservice('/rest/login/logout', null, null, null, null, 'application/json');
}

function sendEmail() {
	var form = document.getElementById('email-form');
	form.action = server + ctxPath + '/rest/commons/sendEmail';
	form.submit();
}