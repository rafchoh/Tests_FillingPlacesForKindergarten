package uni.fmi.login;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import uni.fmi.HomeScreenModel;

public class LoginSteps {

	private HomeScreenModel loginScreenModel;
	
	public LoginSteps(HomeScreenModel loginScreenModel) {
		this.loginScreenModel = loginScreenModel;
	}
	
	@Given("^Потребителят отваря екрана за вход$")
	public void openLoginScreen() throws Throwable {
		loginScreenModel.navLI();
	}

	@Given("^Отваря се форма за вход в системата$")
	public void openLoginForm() throws Throwable {
		loginScreenModel.navToFormLI();
	}

	@When("^Натиска бутона за вход в системата$")
	public void clickLoginButton() throws Throwable {
		loginScreenModel.clickLoginButton();
	}
}