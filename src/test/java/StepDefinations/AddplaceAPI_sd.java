package StepDefinations;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.*;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import pojo.AddPlace;
import pojo.Location;
import resources.APIResources;
import resources.TestDataBuild;
import resources.Utils;

public class AddplaceAPI_sd extends Utils {
	RequestSpecification resp;
	 ResponseSpecification rspect;
	 Response response;
	 TestDataBuild data= new TestDataBuild();
	 String name;
	 String address;
	 String language;
	static String placeId;
	
	

	@When("user calls {string} with {string} http request")
	public void user_calls_with_http_request(String resource, String method){
//    	its enum class taking care of resources
//		constructor will be called with value of resource which you passed
    	APIResources resourceAPI=APIResources.valueOf(resource);
    	System.out.println(resourceAPI.getResource());
       	if(method.equalsIgnoreCase("POST")) {
    	 response= resp. when().
    		    post(resourceAPI.getResource());
    		    
    	System.out.println(response.asString());}
    	else if(method.equalsIgnoreCase("GET"))
    		response= resp. when().
		    get(resourceAPI.getResource());	 
    	 
    }

    @Then("^user verify response code is 200$")
    public void user_verify_response_code_is_200() {
    	assertEquals(response.getStatusCode(),200);
    	}
    @And("^user verify \"([^\"]*)\" in response body is \"([^\"]*)\"$")
    public void user_verify_something_in_response_body_is_something(String keyvalue, String expectedvalue)  {
    
   	assertEquals(getJsonPath(response,keyvalue),expectedvalue);
        
         System.out.println(expectedvalue);
         }
    @Given("add Place pay load with{string}{string}{string}")
    public void add_Place_pay_load_with( String name, String address, String language) throws IOException {
    	 resp = given().spec(requestSpecification()).
        		 body(data.addPlacePayload(name,address,language));
    		 
    }
    @Then("user verify place_Id created mapes to{string}using {string}")
    public void user_verify_place_Id_created_mapes_to_using(String expectedName, String resource) throws IOException {
//       first we need place id for get request so we can extract from addplace response
//    JsonPath js2=new JsonPath(response.asString());
//    String placeId=js2.get("place_id").toString();
        placeId=getJsonPath(response,"place_id");
    	System.out.println(placeId);
    	resp=given().spec(requestSpecification()).queryParam("place_id", placeId);
    	user_calls_with_http_request(resource, "GET");
    	String actualName=getJsonPath(response,"name");
    	assertEquals(actualName,expectedName);
    	System.out.println(expectedName);
    	System.out.println(actualName);
    	
    
    }
    @Given("deletePlace payLoad")
    public void deleteplace_payLoad() throws IOException {
      resp=  given().spec(requestSpecification()).body(data.deletePlacePayLoad(placeId));
    }
    



}
