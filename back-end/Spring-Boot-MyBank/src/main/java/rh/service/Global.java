package rh.service;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.common.Constants;
import com.common.Helper;
import com.common.Request;
import com.common.Responce;

import oracle.jdbc.OracleTypes;
import rh.gateway.Gateway;
import rh.gateway.GatewayDAO;
import rh.request.forms.ReqCheckSMSToken;
import rh.request.forms.ReqSendSMS;
import rh.request.forms.ReqSendSMSToken;



@CrossOrigin(maxAge = Constants.CrossOriginMaxAge)
@RestController
public class Global {

	@Autowired
	private Helper helper;
	
	@Autowired
	private Gateway gateway;

	// Health Check
	// ---------------------------------------------------------------------------
	@RequestMapping("/" + Constants.projectName + "/healthCheck")
	public Responce healthCheck() {
		Responce responce = helper.successResponce(null);
		return responce;
	}

	//Get Session ID
	//---------------------------------------------------------------------------	
	@PostMapping("/"+Constants.projectName+"/getSessionId")
	public Responce getSessionId(HttpServletRequest request) throws SQLException {		
		helper.info("------- just called service : Global > getSessionId");
		
		String sessionId;
		try {
			sessionId = helper.getSessionId(helper.getIpAddress(request));
			helper.info("sessionId : " + sessionId);
			helper.info("IP Address : " + helper.getIpAddress(request));
			Responce responce = helper.successResponce(sessionId);
			helper.traceLog(sessionId, "getSessionId", "out", responce.toString(), helper.getIpAddress(request));
			helper.info("Global > getSessionId status : success");
			return responce;			
		} catch (Exception e) {
			helper.info("Global > getSessionId status : error");
			helper.error(e);
			return helper.errorResponce(e);
		}
		
	}
	
	// Update Currency Rates
	// ----------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/updateCurrencyRate")
	public Responce updateCurrRate(@RequestBody Request json, HttpServletRequest request) {
		helper.info("------- just called service : Global > updateCurrencyRate");
		try {
			helper.traceLog(json.getToken(), "updateCurrencyRate", "in", json.toString(), helper.getIpAddress(request));
			Responce res = gateway.aznAz();
			helper.info("Global > updateCurrencyRate status : success");
			helper.traceLog(json.getToken(), "updateCurrencyRate", "out", res.toString(), helper.getIpAddress(request));
			return res;
		} catch (Exception e) {
			helper.info("Global > updateCurrencyRate status : error");
			helper.error(e);
			return helper.errorResponce(e);
		}
	}

	// Send SMS
	// ----------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/sendSMS")
	public Responce sendSMS(@RequestBody ReqSendSMS json, HttpServletRequest request) throws SQLException {
		helper.info("------- just called service : Global > sendSMS with data : " + json.toString());
		Connection conn = helper.getOraConnection();
		try {
			helper.traceLog(conn, json.getToken(), "rSendSMS", "in", json.toString(), helper.getIpAddress(request));

			String gsm = json.getGsm();
			String text = json.getText();
			String srs = json.getSource();
			String packId = json.getPackId();

			Responce res = gateway.sendSms(gsm, text, srs, packId);

			helper.traceLog(conn, json.getToken(), "rSendSMS", "out", res.toString(), helper.getIpAddress(request));
			helper.info("Global > sendSMS status : success");
			return res;
		} catch (Exception e) {
			helper.info("Global > sendSMS status : error");
			helper.error(e);
			helper.traceLog(conn, json.getToken(), "rSendSMS", "outError", e.getMessage(), helper.getIpAddress(request));
			return helper.errorResponce(e);
		} finally {
			conn.close();		
		}
	}

	// Send SMS Token
	// ----------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/sendOTP")
	public Responce sendOTP(@RequestBody ReqSendSMSToken json, HttpServletRequest request) throws SQLException {
		helper.info("------- just called service : Global > sendOTP  with data : " + json.toString());
		Connection conn = helper.getOraConnection();
		try {
			helper.traceLog(conn, json.getToken(), "sendOTP", "in", json.toString(), helper.getIpAddress(request));

			String gsm = json.getGsm();
			String channel = json.getChannel();
			helper.info("gsm=" + gsm);
			helper.info("channel=" + channel);
			Responce res = gateway.sendOTP(gsm, channel);

			helper.traceLog(conn, json.getToken(), "sendOTP", "out", res.toString(), helper.getIpAddress(request));
			helper.info("Global > sendOTP status : success");
			return res;
		} catch (Exception e) {
			helper.info("Global > sendOTP status : error");
			helper.error(e);
			helper.traceLog(conn, json.getToken(), "sendOTP", "outError", e.getMessage(), helper.getIpAddress(request));
			return helper.errorResponce(e);
		} finally {
			conn.close();		
		}
	}

	// ----------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/checkOTP")
	public Responce checkOTP(@RequestBody ReqCheckSMSToken json, HttpServletRequest request) throws SQLException {
		helper.info("------- just called service : Global > checkOTP  with data : " + json.toString());
		Connection conn = helper.getOraConnection();
		try {
			helper.traceLog(conn, json.getToken(), "checkOTP", "in", json.toString(), helper.getIpAddress(request));

			String gsm = json.getGsm();
			int otp = json.getOtp();
			helper.info("gsm=" + gsm);
			helper.info("otp=" + otp);

			GatewayDAO gdao = new GatewayDAO();
			Responce res;
			if (gdao.checkOTP(gsm, otp) == 1)
				res = helper.successResponce(null);
			else
				res = helper.errorResponce("OTP not allowed");

			helper.traceLog(conn, json.getToken(), "checkOTP", "out", res.toString(), helper.getIpAddress(request));
			helper.info("Global > checkOTP status : success");
			return res;
		} catch (Exception e) {
			helper.info("Global > checkOTP status : error");
			helper.error(e);
			helper.traceLog(conn, json.getToken(), "checkOTP", "outError", e.getMessage(), helper.getIpAddress(request));
			return helper.errorResponce(e);
		}finally {
			conn.close();
		}
	}
	
	/*
	// ----------------------------------------------------------------------------
	@PostMapping("/" + Constants.projectName + "/getFileById")
	public Responce getFileById(@RequestBody ReqGetFileById json, HttpServletRequest request) throws SQLException {
		
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : "+className+" > "+methodName+"  with data : " + json.toString());
		Connection conn = helper.getOraConnection();
		try {
			helper.traceLog(conn, json.getToken(), methodName, "in", json.toString(), helper.getIpAddress(request));

			ResGetFileById rs = daoGetFileByIdPost(json.getFileId());			
			Responce res = helper.successResponce(rs);
			
			helper.traceLog(conn, json.getToken(), methodName, "out", res.toString(), helper.getIpAddress(request));
			helper.info(className+" > "+methodName+" status : success");
			return res;
		} catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(conn, json.getToken(), methodName, "outError", e.getMessage(), helper.getIpAddress(request));
			return helper.errorResponce(e);
		} finally {
			conn.close();		
		}
	}
	*/
	// ----------------------------------------------------------------------------	
	@RequestMapping(value = "/"+Constants.projectName+"/getFileById/{fileId}/{token}", method = RequestMethod.GET)
	public void getFileById(@PathVariable int fileId, @PathVariable String token,  HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException {
		
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : "+className+" > "+methodName+"  with data : " + fileId);
		
		Connection conn = helper.getOraConnection();
		InputStream input = null;
		OutputStream output = null;
		String sql = "";
		CallableStatement cls = null;		
		try {
			helper.traceLog(conn, token, methodName, "in", String.valueOf(fileId), helper.getIpAddress(request));
		    response.setContentType(MediaType.IMAGE_JPEG_VALUE);
			
			sql = "{ CALL  ? := pkg_file_store.downloadfile(p_file_id => ?, p_file_ex => ?) }";
			cls = conn.prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.BLOB);			
			cls.setInt(2, fileId);
			cls.registerOutParameter(3, OracleTypes.VARCHAR);
			cls.execute();				
			input = cls.getBlob(1).getBinaryStream();
			output = response.getOutputStream();
			IOUtils.copy(input, output);			
			
		    helper.traceLog(conn, token, methodName, "out", "ok", helper.getIpAddress(request));			
			helper.info(className+" > "+methodName+" status : success");			
		} catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(conn, token, methodName, "outError", e.getMessage(), helper.getIpAddress(request));
		} finally {
			conn.close();
			cls.close();
			if(input!=null){
				input.close();
			}
			if(output!=null){
				output.flush();
				output.close();
			}
		}
	}
	
	
	// Check get File by Id
	// ----------------------------------------------------------------------------
	/*
	@RequestMapping(value = "/"+Constants.projectName+"/getFileById/{fileId}/{token}", method = RequestMethod.GET)
	public ResponseEntity<byte[]> getFileById(@PathVariable int fileId, @PathVariable String token,  HttpServletRequest request) throws SQLException {
		
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();
		
		helper.info("------- just called service : "+className+" > "+methodName+"  with data : " + fileId);
		Connection conn = helper.getOraConnection();
		try {
			helper.traceLog(conn, token, methodName, "in", String.valueOf(fileId), helper.getIpAddress(request));

			InputStream in = daoGetFileByIdStr(fileId);
			
			HttpHeaders headers = new HttpHeaders();
		    byte[] media = IOUtils.toByteArray(in);

		    headers.setCacheControl(CacheControl.noCache().getHeaderValue());			
			
			helper.traceLog(conn, token, methodName, "out", "ok", helper.getIpAddress(request));
			
			helper.info(className+" > "+methodName+" status : success");
			
			ResponseEntity<byte[]> responseEntity = new ResponseEntity<>(media, headers, HttpStatus.OK);
		    return responseEntity;
			
			//IOUtils.copy(in, response.getOutputStream());
			//return rs;
		} catch (Exception e) {
			helper.info(className+" > "+methodName+" status : error");
			helper.error(e);
			helper.traceLog(conn, token, methodName, "outError", e.getMessage(), helper.getIpAddress(request));
			//return helper.errorResponce(e);
			//return "error";
			return null;
		} finally {
			conn.close();		
		}
	}	
	
	
	// -------------------------------------------------------------------------
	public ResGetFileById daoGetFileByIdPost(int fileId) throws Exception {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called  : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL  ? := pkg_file_store.downloadfile(p_file_id => ?, p_file_ex => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.BLOB);			
			cls.setInt(2, fileId);
			cls.registerOutParameter(3, OracleTypes.VARCHAR);
			cls.execute();
			
			InputStream finput = cls.getBlob(1).getBinaryStream();			
			String base64File = helper.convertInputStreamToBase64(finput);
			String fileExt = cls.getString(3);
			
			ResGetFileById res = new ResGetFileById(base64File, fileExt);
			helper.info(className + " > " + methodName + "  status : success");
			
			return res;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + "  status : error");
			helper.error(e);
			throw e;
		} finally {
			if (cls != null) {
				cls.getConnection().close();
				cls.close();
			}
		}
	}	
	*/
	/*
	// -------------------------------------------------------------------------
	public InputStream daoGetFileByIdGet(int fileId) throws Exception {
		String methodName = new Object(){}.getClass().getEnclosingMethod().getName();
		String className = new Object(){}.getClass().getName();

		Helper helper = new Helper();
		helper.info("------- just called  : " + className + " > " + methodName);

		String sql = "";
		CallableStatement cls = null;
		try {
			sql = "{ CALL  ? := pkg_file_store.downloadfile(p_file_id => ?, p_file_ex => ?) }";
			cls = helper.getOraConnection().prepareCall(sql);
			cls.registerOutParameter(1, OracleTypes.BLOB);			
			cls.setInt(2, fileId);
			cls.registerOutParameter(3, OracleTypes.VARCHAR);
			cls.execute();
			
			InputStream finput = cls.getBlob(1).getBinaryStream();			
			//String res = helper.convertInputStreamToString(finput);
			
			
			//ResGetFileById res = new ResGetFileById(base64File, fileExt);
			//helper.info(className + " > " + methodName + "  status : success");
			
			return finput;
		} catch (Exception e) {
			helper.info(className + " > " + methodName + "  status : error");
			helper.error(e);
			throw e;
		} finally {
			if (cls != null) {
				cls.getConnection().close();
				//cls.close();
			}
			
		}
	}
	*/
}
