package StepDefinations;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Login_sd {
	@Given("^User are on Home Page$")
    public void user_are_on_home_page()  {
        System.out.println("user on HomePage");
    }

    @Given("^user enter valid username as \"([^\"]*)\" and password as \"([^\"]*)\".$")
    public void user_enter_valid_username_as_something_and_password_as_something(String strArg1, String strArg2){
    	System.out.println("user enter valid username and password");
    }

    @When("^User click on login button$")
    public void user_click_on_login_button()  {
    	System.out.println("user on click on login");
       
    }

    @Then("^user are on his login home page$")
    public void user_are_on_his_login_home_page() {
    	System.out.println("user on loginPage");
    }

    @And("^user should see his account page$")
    public void user_should_see_his_account_page()  {
    	System.out.println("user see his account detail");
       
    }

}
