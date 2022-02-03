package uni.fmi;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/uni/fmi/Features", 
                 plugin = { "pretty", "html:target/raports" },
                 monochrome = true)
public class Cucumber_ProjectStarter {
}
