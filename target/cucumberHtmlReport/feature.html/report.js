$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/featureFile/AddPlace.feature");
formatter.feature({
  "name": "Validating place API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.scenario({
  "name": "Verify added place is delete successfully by usingn deletePlaceAPI",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@deleteApi"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "deletePlace payLoad",
  "keyword": "Given "
});
formatter.match({
  "location": "AddplaceAPI_sd.deleteplace_payLoad()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"DeletePlaceAPI\" with \"post\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "AddplaceAPI_sd.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AddplaceAPI_sd.user_verify_response_code_is_200()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify \"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddplaceAPI_sd.user_verify_something_in_response_body_is_something(String,String)"
});
formatter.result({
  "status": "passed"
});
});