package resources;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Properties;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;

public class Utils {
	public static RequestSpecification res;
	
	public RequestSpecification requestSpecification() throws IOException {
		if(res==null) {
		PrintStream log=new PrintStream(new FileOutputStream("logging.txt"));
		RestAssured.baseURI="https://rahulshettyacademy.com";
		res =new RequestSpecBuilder()
		    		.setBaseUri(getGlobalValue("baseURI"))
		    		.addQueryParam("key", "qaclick123").
		    		addFilter(RequestLoggingFilter.logRequestTo(log)).
		    		addFilter(ResponseLoggingFilter.logResponseTo(log)).
		    		
		    		setContentType(ContentType.JSON).build();
		return res;}
		return res;
		
	}
	public ResponseSpecification responseSpecification() {
		ResponseSpecification rspect= new  ResponseSpecBuilder().
				expectStatusCode(200).expectContentType(ContentType.JSON).build();
		return rspect;
	}
	public static String getGlobalValue(String key) throws IOException {
		Properties prop= new Properties();
		FileInputStream file=new FileInputStream("C:\\Users\\ashvi\\eclipse-workspace\\CucumberApi\\src\\test\\java\\resources\\global.properties");
		prop.load(file);
		return prop.getProperty(key);
	}
	public String getJsonPath(Response response,String key) {
		String resp=response.asString();
		JsonPath js=new JsonPath(resp);
		return js.get(key).toString();
	}

}

