package com.capgemini.ABN_AMERO_POC.customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.capgemini.ABN_AMERO_POC.accounts.Account;
import com.capgemini.ABN_AMERO_POC.accounts.AccountService;
import com.capgemini.ABN_AMERO_POC.shared.Response;

@Service
public class CustomerService {

	@Autowired
	CustomerDao customerDao;
	
	@Autowired
	AccountService accountService;

	@Autowired
	Environment environment;
	
	@Autowired
	CustomerJpaDao customerJpaDao;
	
	public List<Customer> getAllCustomer() {
		if(environment.getProperty("App_Data_Source").equals("JPA"))
			return customerJpaDao.getAllCustomer();
		return customerDao.getAllCustomers();
	}

	public Response addCustomer(Customer customer) {
		if(environment.getProperty("App_Data_Source").equals("JPA"))
			return customerJpaDao.addCustomer(customer);
		return customerDao.addCustomer(customer);
	}

	public Customer getCustomer(Integer id) {
		if(environment.getProperty("App_Data_Source").equals("JPA"))
			return customerJpaDao.getCustomer(id);
		return customerDao.getCustomer(id);
	}

	public Response deleteCustomer(Integer id) {
		List<Account> accountsListOfCustomer = accountService.getAccountsByCustomerId(id);
		Response response = new Response(false,environment.getProperty("Customer_CannotDeleteCustomerLinkedToAccount"),null);
		if(accountsListOfCustomer.isEmpty()) {
			if(environment.getProperty("App_Data_Source").equals("JPA")) {
				return customerJpaDao.deleteCustomer(id);
			}
			return customerDao.deleteCustomer(id);
		}
		return response;
	}

	public Response updateCustomer(Customer customer) {
		if(environment.getProperty("App_Data_Source").equals("JPA"))
			return customerJpaDao.updateCustomer(customer);
		return customerDao.updateCustomer(customer);
	}
	
}
