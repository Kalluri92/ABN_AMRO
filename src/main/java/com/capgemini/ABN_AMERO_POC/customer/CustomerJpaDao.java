package com.capgemini.ABN_AMERO_POC.customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Repository;

import com.capgemini.ABN_AMERO_POC.shared.Response;

@Repository
public class CustomerJpaDao {

	public CustomerJpaDao() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	CustomerRepository customerRepository;
	@Autowired
	Environment environment;
	
	
	public List<Customer> getAllCustomer() {
		return customerRepository.findAll();
	}
	public Customer getCustomer(Integer id) {
		return customerRepository.findOne(id);
	}
	
	public Response addCustomer(Customer customer) {
		Response response = new Response(true,environment.getProperty("Customer_AddCustomerSuccess"),null);
		customerRepository.save(customer);
		return response;
	}
	public Response deleteCustomer(Integer id) {
		Response response = new Response(true,environment.getProperty("Customer_CustomerDeleteSuccess"),null);
		customerRepository.delete(id);
		return response;
	}
	public Response updateCustomer(Customer customer) {
		Response response = new Response(true,environment.getProperty("Customer_CustomerUpdateSuccess"),null);
		customerRepository.save(customer);
		return response;
	}
}
