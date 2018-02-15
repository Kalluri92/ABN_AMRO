<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>

<head>
	<!-- All Style Sheets are Loaded at top -->
	<link rel="shortcut icon" href="<c:url value=" asserts/images/favicon.ico " />" />
	<link rel="stylesheet" href="<c:url value=" asserts/css/bootstrap.min.css " />" />
	<title>ABN AMRO</title>
</head>

<body>
	<!--  Angular App Content Starts here -->
	<div ng-app="MyApp">
		<div ng-controller="MyAppController">

			<nav class="navbar navbar-inverse">
				<div class="container-fluid">
					<div class="navbar-header">
						<a class="navbar-brand" href="#">ABN AMRO</a>
					</div>
					<ul class="nav navbar-nav">
						<li class="active">
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Accounts</a>
						</li>
						<li>
							<a href="#">Customers</a>
						</li>
						<li>
							<a href="#">User Mappings</a>
						</li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li>
							<form action="/logout" method="post" class="navbar-form navbar-left" role="search">
								<button type="submit" class="btn btn-link">Sign Out</button>
								<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
							</form>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		<a href="#!home">HOME</a>
		<a href="#!user">USER</a>

		<div ng-view></div>
	</div>
</body>
<!-- All Script Files will be loaded at the End.-->
<!-- Jquery & BootStrap Imports -->
<script src="<c:url value=" asserts/lib/jquery-3.3.1.js " />"></script>
<script src="<c:url value=" asserts/lib/bootstrap.min.js " />"></script>
<!-- Angular Related Imports -->
<script type="text/javascript" src="asserts/lib/angular.js"></script>
<script type="text/javascript" src="asserts/lib/angular-route.js"></script>
<!-- Application Level files -->
<script type="text/javascript" src="app/app.js"></script>
<script type="text/javascript" src="app/app-route.js"></script>
<script type="text/javascript" src="app/app-constants.js"></script>
<!-- Application Modules & Components--> 
<script type="text/javascript" src="app/components/home/home.module.js"></script>
<script type="text/javascript" src="app/components/home/home.ctrl.js"></script>
<script type="text/javascript" src="app/components/user/user.module.js"></script>
<script type="text/javascript" src="app/components/user/user.factory.js"></script>
<script type="text/javascript" src="app/components/user/user.ctrl.js"></script>

</html>