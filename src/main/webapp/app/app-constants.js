var base_url = "http://localhost:8080";
var appApiConstants = {

	current_user: base_url + "/session/getCurrentUser",

	account_add: base_url + "/rest/account/add",
	account_get: base_url + "/rest/account/get/",
	account_get_all: base_url + "/rest/account/getAll",
	account_update: base_url + "/rest/account/update",
	account_delete: base_url + "/rest/account/delete/",

	customer_add: base_url + "/rest/customer/add",
	customer_get: base_url + "/rest/customer/get/",
	customer_get_all: base_url + "/rest/customer/getAll",
	customer_update: base_url + "/rest/customer/update",
	customer_delete: base_url + "/rest/customer/delete/",

	user_add: base_url + "/rest/user/add",
	user_get: base_url + "/rest/user/get/",
	user_get_all: base_url + "/rest/user/getAll",
	user_update: base_url + "/rest/user/update",
	user_delete: base_url + "/rest/user/delete"
};

var htmlContentConstants = {
	user_no_data_exist: "No User Data Exist !",
	account_no_data_exist: "No Account Data Exist !",
	customer_no_data_exist: "No Customer Data Exist !",
	task_failed_unknow: "Task failed with unknow error,  Please try again !"
};