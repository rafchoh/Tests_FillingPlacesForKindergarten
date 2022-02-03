package uni.fmi.child;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.HomeScreenModel;

public class ChildSteps {

	private HomeScreenModel childScreenModel = new HomeScreenModel();
	
	public ChildSteps(HomeScreenModel childScreenModel) {
		this.childScreenModel = childScreenModel;
	}
	
	@Given("^Потребителят отваря екрана за регистрация на дете в системата$")
	public void openChildRegScreen() throws Throwable {
		childScreenModel.navC();
	}

	@Given("^Отваря се формата за регистрация на дете$")
	public void openChildRegForm() throws Throwable {
		childScreenModel.navToFormC();
	}

	@When("^Потребителят въвежда име на детето \"([^\"]*)\"$")
	public void addFullName(String fullName) throws Throwable {
		childScreenModel.setFullName(fullName);
	}

	@When("^Потребителят определя дали единият от родителите работи \"([^\"]*)\"$")
	public void addWorkingMother(String workingMother) throws Throwable {
	    childScreenModel.setWorkingMother(workingMother);
	}

	@When("^Потребителят определя дали и другият родител работи \"([^\"]*)\"$")
	public void addWorkingFather(String workingFather) throws Throwable {
	    childScreenModel.setWorkingFather(workingFather);
	}

	@When("^Потребителят определя дали детето има увреждания \"([^\"]*)\"$")
	public void addDisability(String disability) throws Throwable {
	    childScreenModel.setDisability(disability);
	}

	@When("^Потребителят определя дали детето има близнак \"([^\"]*)\"$")
	public void addTwin(String twin) throws Throwable {
	    childScreenModel.setTwin(twin);
	}

	@When("^Потребителят определя дали детето има брат/сестра в детското заведение \"([^\"]*)\"$")
	public void addRelative(String relative) throws Throwable {
	    childScreenModel.setRelative(relative);
	}
	
	@When("^Потребителят въвежда име на брат/сестра в детското заведение \"([^\"]*)\"$")
	public void addRelativeName(String relativeName) throws Throwable {
		childScreenModel.setRelativeName(relativeName);
	}

	@When("^Натиска бутона въвеждане на ново дете в системата?$")
	public void clickChildRegButton() throws Throwable {
	    childScreenModel.clickChildRegButton();
	}	
	
	@Then("^Изписва се общия брой точки \"([^\"]*)\"$")
	public void checkTotalPoints(String totalPoints) throws Throwable {
       assertEquals(totalPoints, childScreenModel.checkTotalPoints());
	}
}
