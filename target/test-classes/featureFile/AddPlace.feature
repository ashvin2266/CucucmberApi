@api
Feature: Validating place API
@addPlaceApi
  Scenario: verify if place is successfully added using AddPlaceAPI
    Given add Place pay load with"Lovely HOME""Kenton road""German"
#     Given add Place pay load
     When user calls "AddPlaceAPI" with "post" http request
     Then user verify response code is 200
      And user verify "status" in response body is "OK"
      And user verify "scope" in response body is "APP"
 @addPlaceApiOutline     
  Scenario Outline: verify if place is successfully added using AddPlaceAPI 
  
    Given add Place pay load with"<name>""<address>""<language>"
     When user calls "AddPlaceAPI" with "post" http request
     Then user verify response code is 200
      And user verify "status" in response body is "OK"
      And user verify "scope" in response body is "APP"
      And user verify place_Id created mapes to"<name>"using "GetPlaceAPI"
  Examples:
  |  name         |    address     |   language      |  
  |Avondale Garden|60,Benett close |English          |
  |Sweet Home     |43 Hounslow Road | Gujarati       |
  |Rahul chety    |India            |Tamil           |
  |Lovely Home    |Ashram road Ahm  |French          |
  @deleteApi  
  Scenario: Verify added place is delete successfully by usingn deletePlaceAPI
   
   Given deletePlace payLoad
   When user calls "DeletePlaceAPI" with "post" http request
     Then user verify response code is 200
      And user verify "status" in response body is "OK"
   
  
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  