package com.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com.common",
										 "rh.gateway",
										 "rh.service",										 
										 "rh.responce.forms"
								})
public class SpringBootRestApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(SpringBootRestApplication.class, args);
	}
	
}
