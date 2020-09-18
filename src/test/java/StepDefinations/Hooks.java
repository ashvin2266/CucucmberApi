package StepDefinations;

import java.io.IOException;

import io.cucumber.java.Before;

public class Hooks {
	
	@Before("@deleteApi")
	public void beforeScenario() throws IOException {
		AddplaceAPI_sd ap=new AddplaceAPI_sd();
		if(AddplaceAPI_sd.placeId==null) {
		ap.add_Place_pay_load_with("Ashvin", "35,Avondale garden", "Spanish");
		ap.user_calls_with_http_request("AddPlaceAPI", "post");
		ap.user_verify_place_Id_created_mapes_to_using("Ashvin", "GetPlaceAPI");}
		
	}

}
