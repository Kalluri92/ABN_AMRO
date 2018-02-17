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
	<link rel="stylesheet" href="<c:url value=" asserts/css/app-custom.css " />" />
	
	<title>ABN AMRO</title>
</head>

<body>
	<div ng-app="MyApp">
		<div ng-controller="MyAppController">
			<nav class="navbar navbar-inverse navbar-fixed-top">
				<div class="container-fluid">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="#!home">ABN AMRO</a>
					</div>
					<div class="collapse navbar-collapse" id="myNavbar">
						<ul class="nav navbar-nav" ng-if="admin">
							<li>
								<a href="#!account">Accounts</a>
							</li>
							<li>
								<a href="#!customer">Customers</a>
							</li>
							<li>
								<a href="#!user">User Mappings</a>
							</li>
						</ul>
						<ul class="nav navbar-nav" ng-if="!admin">
							<li>
								<a href="#!myDetails">My Details</a>
							</li>
							<li>
								<a href="#!myAccounts">My Accounts</a>
							</li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li><a>Hello <strong>{{userName}}</strong> !</a></li>
							<li>
								<form action="/logout" method="post" class="navbar-form navbar-left" role="search">
									<button type="submit" class="btn btn-link">Sign Out</button>
									<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
								</form>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		<div style="padding-top: 50px; padding-bottom: 50px; background-color: white">
			<div ng-view></div>
		</div>
		<nav class="navbar navbar-inverse navbar-fixed-bottom">
			<div class="container">
				<span class="navbar-brand">ABN AMRO Bank N.V</span>
				<p class="navbar-text navbar-right">ABN AMRO &copy; 2018</p>
			</div>
		</nav>
	</div>
</body>
<!-- All Script Files will be loaded at the End.-->

<!-- Jquery & BootStrap Imports -->
<script type="text/javascript" src="asserts/lib/jquery-3.3.1.js"></script>
<script type="text/javascript" src="asserts/lib/bootstrap.min.js"></script>
<!-- Angular Related Imports -->
<script type="text/javascript" src="asserts/lib/angular.js"></script>
<script type="text/javascript" src="asserts/lib/angular-route.js"></script>
<!-- Custom library Imports -->
<script type="text/javascript" src="app/custom-lib.js"></script>

<!-- Application Level files -->
<script type="text/javascript" src="app/app.js"></script>
<script type="text/javascript" src="app/app-route.js"></script>
<script type="text/javascript" src="app/app-constants.js"></script>

<!-- Application Shared Things-->
<script type="text/javascript" src="app/shared/services/session.factory.js"></script>
<script type="text/javascript" src="app/shared/services/user.factory.js"></script>
<script type="text/javascript" src="app/shared/services/account.factory.js"></script>
<script type="text/javascript" src="app/shared/services/customer.factory.js"></script>

<!-- Application Modules & Components-->
<script type="text/javascript" src="app/components/home/home.module.js"></script>
<script type="text/javascript" src="app/components/home/home.ctrl.js"></script>

<script type="text/javascript" src="app/components/user/user.module.js"></script>
<script type="text/javascript" src="app/components/user/user.ctrl.js"></script>

<script type="text/javascript" src="app/components/myDetails/myDetails.module.js"></script>
<script type="text/javascript" src="app/components/myDetails/myDetails.ctrl.js"></script>

<script type="text/javascript" src="app/components/myAccounts/myAccounts.module.js"></script>
<script type="text/javascript" src="app/components/myAccounts/myAccounts.ctrl.js"></script>

<script type="text/javascript" src="app/components/account/account.module.js"></script>
<script type="text/javascript" src="app/components/account/account.ctrl.js"></script>

<script type="text/javascript" src="app/components/customer/customer.module.js"></script>
<script type="text/javascript" src="app/components/customer/customer.ctrl.js"></script>

</html>