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

function alertsRemindersGrid() {
	var otherParams = {
		firstParam : 'firstParamValue',
		secondParam : 'secondParamValue',
		thirdParam : 'thirdParamValue',
		fourthParam : 'fourthParamValue'
	}
	var gridComponent = { 
			start : 0,
			limit : 100,
			otherParams : encodeObjectAsJSON(otherParams),
			sorters : [
				{
					id : 'S1',
					mapping : 'actionDateMillis',
					columnName : 'Action Date',
					order : 'ASC'
				},
				{
					id : 'S2',
					mapping : 'initiatedBy',
					columnName : 'Initiated By',
					order : 'DESC'
				}
			],
			filters : [
				{
					id : 'F1',
					type : 'string',
					mapping : 'subject',
					columnId : 'subjectColumn',
					stringValue : 'search this text'
				},
				{
					id : 'F2',
					type : 'date',
					mapping : 'initiatedDateMillis',
					columnId : 'initiatedDateMillisColumn',
					beforeDateMillis : (new Date()).getTime(),
					onDateMillis : (new Date()).getTime(),
					afterDateMillis : (new Date()).getTime()
				}
			]
	}
	callWebservice('/rest/employee/alertsRemindersGrid', encodeObjectAsJSON(gridComponent), null, null, null, 'application/json');
}

function tasksGrid() {
	var otherParams = {
		firstParam : 'firstParamValue',
		secondParam : 'secondParamValue',
		thirdParam : 'thirdParamValue',
		fourthParam : 'fourthParamValue'
	}
	var gridComponent = { 
			start : 0,
			limit : 100,
			otherParams : encodeObjectAsJSON(otherParams),
			sorters : [
				{
					id : 'S1',
					mapping : 'actionDateMillis',
					columnName : 'Action Date',
					order : 'ASC'
				},
				{
					id : 'S2',
					mapping : 'initiatedBy',
					columnName : 'Initiated By',
					order : 'DESC'
				}
			],
			filters : [
				{
					id : 'F1',
					type : 'string',
					mapping : 'subject',
					columnId : 'subjectColumn',
					stringValue : 'search this text'
				},
				{
					id : 'F2',
					type : 'date',
					mapping : 'initiatedDateMillis',
					columnId : 'initiatedDateMillisColumn',
					beforeDateMillis : (new Date()).getTime(),
					onDateMillis : (new Date()).getTime(),
					afterDateMillis : (new Date()).getTime()
				}
			]
	}
	callWebservice('/rest/employee/tasksGrid', encodeObjectAsJSON(gridComponent), null, null, null, 'application/json');
}

function workflowsGrid() {
	var otherParams = {
		firstParam : 'firstParamValue',
		secondParam : 'secondParamValue',
		thirdParam : 'thirdParamValue',
		fourthParam : 'fourthParamValue'
	}
	var gridComponent = { 
			start : 0,
			limit : 100,
			otherParams : encodeObjectAsJSON(otherParams),
			sorters : [
				{
					id : 'S1',
					mapping : 'actionDateMillis',
					columnName : 'Action Date',
					order : 'ASC'
				},
				{
					id : 'S2',
					mapping : 'initiatedBy',
					columnName : 'Initiated By',
					order : 'DESC'
				}
			],
			filters : [
				{
					id : 'F1',
					type : 'string',
					mapping : 'subject',
					columnId : 'subjectColumn',
					stringValue : 'search this text'
				},
				{
					id : 'F2',
					type : 'date',
					mapping : 'initiatedDateMillis',
					columnId : 'initiatedDateMillisColumn',
					beforeDateMillis : (new Date()).getTime(),
					onDateMillis : (new Date()).getTime(),
					afterDateMillis : (new Date()).getTime()
				}
			]
	}
	callWebservice('/rest/employee/workflowsGrid', encodeObjectAsJSON(gridComponent), null, null, null, 'application/json');
}


