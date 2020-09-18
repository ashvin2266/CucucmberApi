package resources;

import java.util.ArrayList;
import java.util.List;

import pojo.AddPlace;
import pojo.Location;

public class TestDataBuild {
	public AddPlace addPlacePayload(String name,String address,String language) {
		AddPlace p=new AddPlace();
		  p.setAccuracy(50);
		    p.setAddress(address);
		    p.setLanguage(language);
		    p.setName(name);
		    p.setPhone_number("(+91) 983 893 3937");
		    p.setWebsite("http://google.com");
		    List<String >myList=new ArrayList<String>();
		    myList.add("shoe park");
		    myList.add("shop");
		    p.setTypes(myList);
		    Location l= new Location();
		    l.setLat(-38.383494);
		    l.setLng(33.427362);
		    p.setLocation(l);
		    return p;
		
		
	}
	public String deletePlacePayLoad(String placeId) {
		return"{\"place_id\":\""+placeId+"\"}";
		
		
			
		}
	
	
	   
}
