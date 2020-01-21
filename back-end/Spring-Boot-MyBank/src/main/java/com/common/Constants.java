package com.common;

public class Constants {	
	public static final String enviroment = "PROD";
	
	public static final String projectName = "mybank";	
	public static final boolean localDb = true;	
	public static final boolean syncCurrency = true;
	
	public static final String msmURL = "http://api.msm.az/sendsms";
	public static final String msmUser = "plusminusapi";	
	public static final String msmPsw = "Tme4xfdp";
	public static final String msmSenderName = "PLUSMINUS";	
	public static final String smsApproveText = "Sizin sorgunuz qebul olundu ve terefdas banklara gonderildi. Bizi secdiyiniz ucun tesekkur edirik.";
	public static final String smsContactUsText = "Sizin sorgunuz qebul olundu. Sorgunuz ucun tesekkur edirik. Yaxin zamanda sizinle elaqe saxlanilacaq.";
	
	
	public static final long CrossOriginMaxAge = 3600;	
	public static final String errorAccessDenied = "Access denied";
	
	public static final String jwtTokenSecretKey = "mybank123!";
	public static final String jwtTokenIssuer = "plusminus.az";
	public static final long jwtTokenExp = 3600000;
	
	public static final String fileStorePath = "/u01/backend/fileStore/";
	
}

