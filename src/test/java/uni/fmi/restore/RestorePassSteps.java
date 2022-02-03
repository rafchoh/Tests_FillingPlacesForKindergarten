package uni.fmi.restore;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import uni.fmi.HomeScreenModel;

public class RestorePassSteps {

	private HomeScreenModel restorePassScreenModel = new HomeScreenModel();
	
	public RestorePassSteps(HomeScreenModel restorePassScreenModel) {
		this.restorePassScreenModel = restorePassScreenModel;
	}
	
	@Given("^Потребителят отваря екрана за забравена парола$")
	public void openRestorePassScreen() throws Throwable {
	    restorePassScreenModel.navRP();
	}

	@Given("^Отваря се формата за възстановяване на паролата$")
	public void openRestorePassForm() throws Throwable {
	    restorePassScreenModel.navToFormRP();
	}

	@When("^Потребителят постъпва към потвърждаване на самоличността си \"([^\"]*)\"$")
	public void addApproval(String approval) throws Throwable {
	    restorePassScreenModel.setApproval(approval);
	}

	@When("^Натиска бутона за възстановяване на паролата$")
	public void clickRestorePassButton() throws Throwable {
	    restorePassScreenModel.clickRestorePassButton();
	}
}
