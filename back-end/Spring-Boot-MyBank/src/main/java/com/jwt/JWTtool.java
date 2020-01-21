package com.jwt;

import java.util.Date;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.common.Constants;
import com.common.Helper;

public class JWTtool {
	
	public static String generateToken(String id, String issuer, String subject, long ttlMillis) {		  
	    long nowMillis = System.currentTimeMillis();
	    long expMillis = nowMillis + ttlMillis;
        Date exp = new Date(expMillis);
	    Date now = new Date(nowMillis);
	    Algorithm algorithm = Algorithm.HMAC256(Constants.jwtTokenSecretKey);
	    String token = JWT.create()
	    		.withJWTId(id)
	    		.withIssuedAt(now)
	            .withIssuer(issuer)
	            .withSubject(subject)
	            .withExpiresAt(exp)
	            .sign(algorithm);
	    
	    Helper helper = new Helper();
	    helper.info("JWTtool > generateToken is  :  "+token);
	    return token;
	}
    
	public static String decodeToken(String token) {
		String s = "";
		Helper helper = new Helper();
		
		try {
		    DecodedJWT jwt = JWT.decode(token);		    
		    helper.info("getIssuer="+jwt.getIssuer());
		    helper.info("getSubject="+jwt.getSubject());
		    helper.info("getExpiresAt="+jwt.getExpiresAt());
		    helper.info("getIssuedAt="+jwt.getIssuedAt());
		    helper.info("getPayload="+jwt.getPayload());
		    helper.info("getHeader="+jwt.getHeader());
		    
		    s = jwt.getSubject();
		} catch (JWTDecodeException exception){
			helper.error(exception);
		}
		return s;
	}
	
	public static String verifyToken(String token, String issuer) {
		Helper helper = new Helper();
		String s = "";
		try {
			Algorithm algorithm = Algorithm.HMAC256(Constants.jwtTokenSecretKey);
		    JWTVerifier verifier = JWT.require(algorithm).withIssuer(issuer).build();
		    DecodedJWT jwt = verifier.verify(token);
		    
		    helper.info("token verfied");		    
		    helper.info("getId="+jwt.getId());
		    
		    s = jwt.getId();
		} catch (JWTVerificationException  exception){
			helper.error(exception);
			throw exception;
		}
		return s;
	}	

}