package com.example.day5.controller; 

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.day5.model.userdetails;
import com.example.day5.service.userservice;

@CrossOrigin
@RestController
public class usercontroller {

	@Autowired
	public userservice ser;
	@PostMapping("/POST")
	public userdetails POST(@RequestBody userdetails user)
	{
		return ser.POST(user);
	}
	
	@GetMapping("/get")
	public List<userdetails> savedetails()
	{
		return ser.getDetails();
	}
	@GetMapping("/getbyid/{user_id}")
	public Optional<userdetails> GetDetails(@PathVariable int user_id)
	{
		return ser.GetDetails(user_id);
	}
	@DeleteMapping("/delete/{user_id}")
	public String deletestud(@PathVariable("user-id")int user_id)
	{
		ser.delete(user_id);
		return "Customer with ID "+user_id+" is deleted";
	}
	@DeleteMapping("/deletebyuserid/{user_id}")
	public ResponseEntity<String>customerinfo(@PathVariable int user_id)
	{
		boolean deleted=ser.customerinfo(user_id);
		if(deleted)
		{
			return ResponseEntity.ok("customer with ID"+user_id+"deleted");
		}
		else 
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("customer with ID "+user_id+" not found");
		}
	}
	
	@PutMapping("/customerup")
	public userdetails customerup(@RequestBody userdetails user)
	{
		return ser.customerup(user);
	}
	
}
