<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="shortcut icon"
	href="<c:url value=" asserts/images/favicon.ico " />" />
<link rel="stylesheet"
	href="<c:url value=" asserts/css/bootstrap.min.css " />" />
<link rel="stylesheet"
	href="<c:url value=" asserts/css/custom-styles.css " />" />


<script src="<c:url value=" asserts/lib/jquery-3.3.1.js " />"></script>
<script src="<c:url value=" asserts/lib/bootstrap.min.js " />"></script>

<title>ABN AMRO</title>
</head>

<body style="background-color: #4b5257">
	<div class="container">
		<div class="col-lg-4"></div>
		<div class="col-lg-4">
			<div class="jumbotron" style="margin-top: 150px">
				<h3>Please login</h3>
				<form action="/login" method="post">
					<div class="form-group">
						<input type="text" name="username" class="form-control"
							placeholder="Enter Username">
					</div>
					<div class="form-group">
						<input type="password" name="password" class="form-control"
							placeholder="Enter password">
					</div>
					<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
					<button type="submit" class="btn-primary form-control">Login</button>
				</form>
			</div>
		</div>
		<div class="col-lg-4"></div>
	</div>

</body>
</html>
