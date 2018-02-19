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
	AccountService accountService;

	@Autowired
	Environment environment;
	
	@Autowired
	CustomerRepository customerRepository;
	
	
	public List<Customer> getAllCustomer() {
		return customerRepository.findAll();
	}

	public Response addCustomer(Customer customer) {
		Customer savedCustomer = customerRepository.save(customer);
		if(savedCustomer != null) {
			return new Response(true,environment.getProperty("Customer_AddCustomerSuccess"), savedCustomer);
		}
		return new Response(false,environment.getProperty("Customer_AddCustomerFailed"),null);
	}

	public Customer getCustomer(Integer id) {
		return customerRepository.findOne(id);
	}

	public Response deleteCustomer(Integer id) {
		Response response = new Response(false,environment.getProperty("Customer_CannotDeleteCustomerLinkedToAccount"),null);
		List<Account> accoutsForThisCustomer= accountService.getAccountsByCustomerId(id);
		if(accoutsForThisCustomer.isEmpty()) {
			customerRepository.delete(id);
			response = new Response(true,environment.getProperty("Customer_CustomerDeleteSuccess"),null);
		}
		return response;
	}

	public Response updateCustomer(Customer customer) {
		if(customerRepository.findOne(customer.getCustomerId()) != null) {
			Customer updatedCustomer = customerRepository.save(customer);
			if(updatedCustomer != null) {
				return new Response(true,environment.getProperty("Customer_CustomerUpdateSuccess"),updatedCustomer);
			} else {
				return new Response(false,environment.getProperty("Customer_CustomerUpdateFailed"),null);
			}
		}
		return new Response(false, environment.getProperty("Customer_CustomerNotFound"),null);
	}
	
}
