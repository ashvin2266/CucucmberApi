package TestRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/featureFile",
                  tags= {"@api"},
                  glue ="StepDefinations",

                  dryRun=false,
                  monochrome=true,
                 

                  plugin = {
		 "html:target/cucumberHtmlReport",
		 "json:target/jsonReports/cucumberReports.json"}
                  )

public class RunCuke {

}
