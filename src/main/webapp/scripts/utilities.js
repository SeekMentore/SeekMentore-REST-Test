var server = 'http://13.127.139.107:8080'
var ctxPath = '/seekmentorerestdummy';

commonErrorHandler = function(error) {
	$('#response').html(encodeObjectAsJSON(error));
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
