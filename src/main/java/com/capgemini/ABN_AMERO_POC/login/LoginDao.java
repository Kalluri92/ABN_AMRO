package com.capgemini.ABN_AMERO_POC.login;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Repository;

import com.capgemini.ABN_AMERO_POC.shared.Response;
import com.google.gson.Gson;

@Repository
public class LoginDao {

	@Autowired
	private Environment environment;

	private JsonLogin jsonLogin;
	private Gson gson;
	private BufferedReader br;
	private FileWriter fw;

	public LoginDao() {
	}

	@PostConstruct
	public void init() {
		try {
			this.jsonLogin = new JsonLogin();
			this.gson = new Gson();
			File file = new File(environment.getProperty("Login_JsonFileName"));
			if (!file.exists()) {
				file.createNewFile();
				updateFile();
			} else {
				updateLoginsList();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void updateFile() {
		try {
			this.fw = new FileWriter(environment.getProperty("Login_JsonFileName"));
			fw.write(gson.toJson(this.jsonLogin));
			fw.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void updateLoginsList() {
		try {
			this.br = new BufferedReader(new FileReader(environment.getProperty("Login_JsonFileName")));
			this.jsonLogin = gson.fromJson(this.br, JsonLogin.class);
			br.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public List<Login> getAllLogins() {
		updateLoginsList();
		return this.jsonLogin.getLoginsList();
	}

	public Response addLogin(Login login) {
		Response response = new Response();
		updateLoginsList();
		List<Login> tempLogins = this.jsonLogin.getLoginsList();
		tempLogins.add(login);
		this.jsonLogin.setLoginsList(tempLogins);
		updateFile();
		response.setSuccess(true);
		response.setResponse(environment.getProperty("Login_LoginAddedSuccessfully"));
		return response;
	}

	public Login getLoginByUserName(String userName) {
		updateLoginsList();
		for (Login login : this.jsonLogin.getLoginsList()) {
			if (login.getUserName().equals(userName)) {
				return login;
			}
		}
		return null;
	}

	public Response deleteLogin(String userName) {
		updateLoginsList();
		Response response = new Response(false, environment.getProperty("Login_LoginSetNotFound"), null);
		for (Login login : this.jsonLogin.getLoginsList()) {
			if (login.getUserName().equals(userName)) {
				List<Login> temp = this.jsonLogin.getLoginsList();
				temp.remove(login);
				this.jsonLogin.setLoginsList(temp);
				updateFile();
				response = new Response(true, environment.getProperty("Login_LoginSetDeleteSuccess"),login.toString());
				break;
			}
		}
		return response;
	}

	public Response updateLogin(Login login) {
		updateLoginsList();
		Response response = new Response(false, environment.getProperty("Login_LoginUpdateFailed = Login Set Update Failed !"), null);
		for (Login loginObj : this.jsonLogin.getLoginsList()) {
			if (loginObj.getUserName().equals(login.getUserName())) {
				List<Login> temp = this.jsonLogin.getLoginsList();
				temp.remove(loginObj);
				loginObj.setPassword(login.getPassword());
				loginObj.setAccountId(login.getAccountId());
				temp.add(loginObj);
				this.jsonLogin.setLoginsList(temp);
				updateFile();
				response = new Response(true, environment.getProperty("Login_LoginUpdateSuccess"),login.toString());
				break;
			}
		}
		return response;
	}

	public Login getLoginByAccountId(Integer accountId) {
		updateLoginsList();
		for (Login login : this.jsonLogin.getLoginsList()) {
			if (login.getAccountId().equals(accountId)) {
				return login;
			}
		}
		return null;
	}
}
