package ztemp;


import java.sql.Connection;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.common.Helper;
import com.common.Responce;

import rh.gateway.Gateway;



@RestController
public class PersonController {

	@Autowired
	private Person person;
	@Autowired
	private Helper helper;
	@Autowired
	private Gateway gateway;
	
	@RequestMapping("/")
	public String healthCheck() {
		return "OK";
	}
	
	@RequestMapping("/person/get")
	public Person getPerson(@RequestParam(name="name", required=false, defaultValue="test") String name) {
		person.setName(name);
		return person;
	}	

	@RequestMapping(value="/person/update", method=RequestMethod.POST, consumes = "application/json")
	public Person updatePerson(@RequestBody Person p) {
		person.setName(p.getName());
		return person;
	}
	
	/*
	@RequestMapping("/bankLoanParams/get")
	public ArrayList<BankLoanParams> getBankLoanParams(String paramName, String paramVal)  {
		
		var loanParams = new ArrayList<BankLoanParams>();
		
		BankLoanParams p1 = new BankLoanParams();
		p1.setLnID(1);
		loanParams.add(p1);
		
		BankLoanParams p2 = new BankLoanParams();
		p2.setLnID(2);
		loanParams.add(p2);
		
		return loanParams;
	}
	*/
	
	@RequestMapping("/checkConnection")
	public void checkConnection() throws SQLException {
		Connection con = null;
		try {
			con = helper.getOraConnection();			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			 con.close();
		}
	}
	
	@RequestMapping("/logtofile")
	public void logTofile() {
		helper.debug("I am in debug");
		helper.info("I am in info");
		helper.error("I am in error");
	}
	

	@RequestMapping("/aznaz")
	public Responce aznaz(String text) throws Exception {
		return gateway.aznAz();
	}	
	
}




















/*
String s = "[\r\n" + 
		"	{\r\n" + 
		"		\"id\": \"1\",\r\n" + 
		"		\"name\": \"Access Bank\"\r\n" + 
		"	},\r\n" + 
		"	{\r\n" + 
		"		\"id\": \"2\",\r\n" + 
		"		\"name\": \"ATB\"\r\n" + 
		"	},\r\n" + 
		"	{\r\n" + 
		"		\"id\": \"3\",\r\n" + 
		"		\"name\": \"Kapital Bank\"\r\n" + 
		"	}\r\n" + 
		"]";

ObjectMapper mapper = new ObjectMapper();

ArrayList<DesTest> dt = mapper.readValue(s, new TypeReference<ArrayList<DesTest>>(){});

dt.forEach((n) -> System.out.println(n.getName())); 
*/

/*
for (AznAz cur : aznaz) {
	helper.debug(cur.getId());
}
*/
/*

RestTemplate restTemplate = new RestTemplate();
 
HttpHeaders headers = new HttpHeaders();
headers.add("User-Agent", "Chrome/73.0.3683.86");
headers.setAccept(Arrays.asList(MediaType.TEXT_HTML));
//headers.add("Accept", "text/html");
//headers.setAccept("text/html");
HttpEntity<String> entity = new HttpEntity<String>("", headers);
 
ResponseEntity<String> result = restTemplate.exchange(urlaznaz, HttpMethod.GET, entity, String.class);
 
System.out.println(result);
//helper.debug(result);
*/

/*
MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
//headers.add("Authorization", "Basic " + base64Creds);
//headers.add("Content-Type", "application/json");
headers.add("User-Agent", "Chrome/73.0.3683.86");
headers.add("Accept", "text/html");

RestTemplate restTemplate = new RestTemplate();
restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());

//HttpEntity<ObjectToPass> request = new HttpEntity<ObjectToPass>(objectToPassInstance, headers);
HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

String result = restTemplate.postForObject(urlaznaz, entity, String.class);	

helper.debug(result);
*/


//helper.debug(result);