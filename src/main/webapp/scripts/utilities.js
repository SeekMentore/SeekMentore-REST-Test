var server = 'http://localhost:8080'
var ctxPath = '/seekmentore';

commonErrorHandler = function(error) {
	$('#response').html('Connection lost.<br/>Please check your network connection and refresh the page.');
}

commmonSuccessHandler = function(data) {
	$('#response').html(encodeObjectAsJSON(data));
}

function encodeObjectAsJSON(object) {
	return null != object ? JSON.stringify(object) : null;
}

function decodeObjectFromJSON(json) {
	return null != json ? JSON.parse(json) : null;
}

function callWebservice(url, data, success, failure, method, contentType) {
	$('#response').html('');
	$.ajax({
        url			: server + ctxPath + url,
        type		: ((null != method) ? method : 'POST'),
        data		: data,
        contentType	: ((null != contentType) ? contentType : 'application/json'),
        cache		: false,
        dataType	: 'json',
        success		: function(data) {
        				commmonSuccessHandler(data);
		},
		error		: function(error) {
						commonErrorHandler(error);
		}
    });
}
