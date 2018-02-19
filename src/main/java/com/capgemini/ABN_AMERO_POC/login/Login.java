package com.capgemini.ABN_AMERO_POC.login;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Users")
public class Login implements Serializable{

	private static final long serialVersionUID = -3425421115880343328L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="user_name")
	private String userName;
	@Column(name="password")
	private String password;
	@Column(name="account_id")
	private Integer accountId;
	@Column(name="role")
	private String role;
	
	public Login() {
		
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getAccountId() {
		return accountId;
	}

	public void setAccountId(Integer accountId) {
		this.accountId = accountId;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Login(String userName, String password, Integer accountId, String role) {
		this.userName = userName;
		this.password = password;
		this.accountId = accountId;
		this.role = role;
	}
	

	@Override
	public String toString() {
		return "Login [userName=" + userName + ", password=" + "XXXXXXXX" + ", accountId=" + accountId + ", role=" + role
				+ "]";
	}
	
	
}
