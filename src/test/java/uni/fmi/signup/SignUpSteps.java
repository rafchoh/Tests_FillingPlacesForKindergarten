package uni.fmi.signup;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.HomeScreenModel;

public class SignUpSteps {

	private HomeScreenModel signUpScreenModel;

	public SignUpSteps(HomeScreenModel signUpScreenModel) {
		this.signUpScreenModel = signUpScreenModel;
	}
	
	
	@Given("^Потребителят отваря екрана за регистрация в системата$")
	public void openSignUpScreen() throws Throwable {
		signUpScreenModel.navSU();
	}

	@Given("^Отваря се формата за регистрация$")
	public void openSignUpForm() throws Throwable {
		signUpScreenModel.navToFormSU();
	}

	@When("^Потребителят избира типа потребител \"([^\"]*)\"$")
	public void addUserType(final String userType) throws Throwable {
		signUpScreenModel.setUserType(userType);
	}

	@When("^Потребителят въвежда потребителско име \"([^\"]*)\"$")
	public void addUsername(final String username) throws Throwable {
		signUpScreenModel.setUsername(username);
	}
	
	@When("^Потребителят въвежда парола \"([^\"]*)\"$")
	public void addPassword(final String password) throws Throwable {
		signUpScreenModel.setPassword(password);
	}
	
	@When("^Потребителят натиска бутона за правене на паролата видима$")
	public void clickPassVisibilityButton() throws Throwable {
		signUpScreenModel.clickPassVisibilityButton();
	}	

	@When("^Потребителят въвежда е-mail \"([^\"]*)\"$")
	public void addEmail(final String email) throws Throwable {
		signUpScreenModel.setEmail(email);
	}
	
	@When("^Потребителят въвежда телефонен номер \"([^\"]*)\"$")
	public void addPhone(final String phone) throws Throwable {
		signUpScreenModel.setPhone(phone);
	}

	@When("^Натиска бутона за регистрация?$")
	public void clickSignUpButton() throws Throwable {
		signUpScreenModel.clickSignUpButton();
	}

	@Then("^Изписва се съобщение \"([^\"]*)\"$")
	public void checkSignUpMessage(final String message) throws Throwable {
    	assertEquals(message, signUpScreenModel.getMessage());
	}	
}
