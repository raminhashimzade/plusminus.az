package com.common;

import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.scheduling.concurrent.ConcurrentTaskScheduler;
import org.springframework.stereotype.Component;

import rh.gateway.Gateway;


@EnableScheduling
@Component
public class ScheduledTasks {

	@Autowired
	Helper helper;
	
	@Autowired
	Gateway gateway;	
	
    private static final DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
    
    @Bean
    public TaskScheduler taskScheduler() {
        return new ConcurrentTaskScheduler();
    }

	// 600000ms = 600s = 10m
	@Scheduled(fixedDelay = 600000)
    public void scheduleSendMail() {
		helper.info("Fixed Delay Task :: Execution Time - " + dateTimeFormatter.format(LocalDateTime.now()));		
		try {
			gateway.sendEmail();
		} catch (SQLException e) {
			helper.error("sendEmail Exception : " + e);
		}		
	}
	
	
	// 3600000ms = 3600s = 60m = 1h
	@Scheduled(fixedDelay = 3600000)
    public void scheduleCurrencyUpdate() {
		helper.info("Fixed Delay Task :: Execution Time - " + dateTimeFormatter.format(LocalDateTime.now()));
		if (!Constants.syncCurrency)
			return;
		
		try {
			gateway.aznAz();			
		} catch (SQLException e) {
			helper.error("sendEmail Exception : " + e);
		} catch (Exception e) {
			helper.error("sendEmail Exception : " + e);
		}					
	}
	
	//At 11:00 am every Monday, Tuesday, Wednesday, Thursday, and Friday
	@Scheduled(cron = "0 0 11 ? * MON-FRI")
    public void scheduleTaskWithCronExpression() {
		helper.info("Task with CronExpression(0 0 11 ? * MON-FRI) :: Execution Time - " + dateTimeFormatter.format(LocalDateTime.now()));		
	}
	
	
	/*
	@Scheduled(fixedRate = 99900000)
    public void scheduleTaskWithFixedRate() {
		helper.info("Fixed Rate Task :: Execution Time - " + dateTimeFormatter.format(LocalDateTime.now()));
	}
	
	@Scheduled(fixedRate = 1000000, initialDelay = 1000000)
    public void scheduleTaskWithInitialDelay() {
		helper.info("Fixed Rate Task with Initial Delay :: Execution Time - " + dateTimeFormatter.format(LocalDateTime.now()));
	}
	*/
}
