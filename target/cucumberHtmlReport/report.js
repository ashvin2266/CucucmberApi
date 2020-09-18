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
  "name": "verify if place is successfully added using AddPlaceAPI",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@addPlaceApi"
    }
  ]
});
formatter.step({
  "name": "add Place pay load with\"Lovely HOME\"\"Kenton road\"\"German\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AddplaceAPI_sd.add_Place_pay_load_with(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"AddPlaceAPI\" with \"post\" http request",
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
formatter.step({
  "name": "user verify \"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddplaceAPI_sd.user_verify_something_in_response_body_is_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verify if place is successfully added using AddPlaceAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addPlaceApiOutline"
    }
  ]
});
formatter.step({
  "name": "add Place pay load with\"\u003cname\u003e\"\"\u003caddress\u003e\"\"\u003clanguage\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"AddPlaceAPI\" with \"post\" http request",
  "keyword": "When "
});
formatter.step({
  "name": "user verify response code is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "user verify \"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "user verify \"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "name": "user verify place_Id created mapes to\"\u003cname\u003e\"using \"GetPlaceAPI\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "address",
        "language"
      ]
    },
    {
      "cells": [
        "Avondale Garden",
        "60,Benett close",
        "English"
      ]
    },
    {
      "cells": [
        "Sweet Home",
        "43 Hounslow Road",
        "Gujarati"
      ]
    },
    {
      "cells": [
        "Rahul chety",
        "India",
        "Tamil"
      ]
    },
    {
      "cells": [
        "Lovely Home",
        "Ashram road Ahm",
        "French"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify if place is successfully added using AddPlaceAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@addPlaceApiOutline"
    }
  ]
});
formatter.step({
  "name": "add Place pay load with\"Avondale Garden\"\"60,Benett close\"\"English\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AddplaceAPI_sd.add_Place_pay_load_with(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"AddPlaceAPI\" with \"post\" http request",
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
formatter.step({
  "name": "user verify \"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddplaceAPI_sd.user_verify_something_in_response_body_is_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify place_Id created mapes to\"Avondale Garden\"using \"GetPlaceAPI\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddplaceAPI_sd.user_verify_place_Id_created_mapes_to_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify if place is successfully added using AddPlaceAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@addPlaceApiOutline"
    }
  ]
});
formatter.step({
  "name": "add Place pay load with\"Sweet Home\"\"43 Hounslow Road\"\"Gujarati\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AddplaceAPI_sd.add_Place_pay_load_with(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"AddPlaceAPI\" with \"post\" http request",
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
formatter.step({
  "name": "user verify \"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddplaceAPI_sd.user_verify_something_in_response_body_is_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify place_Id created mapes to\"Sweet Home\"using \"GetPlaceAPI\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddplaceAPI_sd.user_verify_place_Id_created_mapes_to_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify if place is successfully added using AddPlaceAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@addPlaceApiOutline"
    }
  ]
});
formatter.step({
  "name": "add Place pay load with\"Rahul chety\"\"India\"\"Tamil\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AddplaceAPI_sd.add_Place_pay_load_with(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"AddPlaceAPI\" with \"post\" http request",
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
formatter.step({
  "name": "user verify \"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddplaceAPI_sd.user_verify_something_in_response_body_is_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify place_Id created mapes to\"Rahul chety\"using \"GetPlaceAPI\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddplaceAPI_sd.user_verify_place_Id_created_mapes_to_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify if place is successfully added using AddPlaceAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@addPlaceApiOutline"
    }
  ]
});
formatter.step({
  "name": "add Place pay load with\"Lovely Home\"\"Ashram road Ahm\"\"French\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AddplaceAPI_sd.add_Place_pay_load_with(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"AddPlaceAPI\" with \"post\" http request",
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
formatter.step({
  "name": "user verify \"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddplaceAPI_sd.user_verify_something_in_response_body_is_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify place_Id created mapes to\"Lovely Home\"using \"GetPlaceAPI\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddplaceAPI_sd.user_verify_place_Id_created_mapes_to_using(String,String)"
});
formatter.result({
  "status": "passed"
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