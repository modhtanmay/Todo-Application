package com.tanmay.todorestservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

	@GetMapping("/hello-world-bean")
	public HelloWorld showMsg() {
		return new HelloWorld("Welcome");
	}
	
	@GetMapping("/hello-world/{name}")
	public HelloWorld showVariableMsg(@PathVariable String name) {
		return new HelloWorld(String.format("Hello World, %s", name));
	}
}
