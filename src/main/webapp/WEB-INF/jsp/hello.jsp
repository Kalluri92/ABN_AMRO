<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
	<head>
		<link rel="shortcut icon" href="<c:url value=" asserts/images/favicon.ico " />" />
		<link rel="stylesheet" href="<c:url value=" asserts/css/bootstrap.min.css " />" />
		<link rel="stylesheet" href="<c:url value=" asserts/css/custom-styles.css " />" />
	
		<!-- Jquery & BootStrap Imports -->
		<script src="<c:url value=" asserts/lib/jquery-3.3.1.js " />"></script>
		<script src="<c:url value=" asserts/lib/bootstrap.min.js " />"></script>
		<!-- Angular Related Imports -->
		<script type="text/javascript" src="asserts/lib/angular.js"></script>
		<script type="text/javascript" src="asserts/lib/angular-route.js"></script>
		<!-- Application Level files -->
		<script type="text/javascript" src="app/app.js"></script>
		<script type="text/javascript" src="app/app-route.js"></script>
		<script type="text/javascript" src="app/components/home/home.module.js"></script>
		<script type="text/javascript" src="app/components/home/home.ctrl.js"></script>
		<script type="text/javascript" src="app/components/user/user.module.js"></script>
		<script type="text/javascript" src="app/components/user/user.factory.js"></script>
		<script type="text/javascript" src="app/components/user/user.ctrl.js"></script>
		
		<title>ABN AMRO</title>
	</head>
	<body>
		<form action="/logout" method="post">
			<input type="submit" value="logout">
			<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
		</form>
		
		<!--  Angular App Content Starts here -->
		<div ng-app="MyApp">
			<div ng-controller="MyAppController">
				<button type="button" class="btn btn-success" ng-click="sClicked()">Success</button>
				<button type="button" class="btn btn-info">Info</button>
			</div>
		<a href="#!home">HOME</a> <a href="#!user">USER</a>
		
		<div ng-view></div>
	</div>
	</body>
	
</html>
