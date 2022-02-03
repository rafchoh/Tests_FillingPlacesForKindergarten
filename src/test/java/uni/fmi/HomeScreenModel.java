package uni.fmi;

import uni.fmi.service.ChildService;
import uni.fmi.service.LoginService;
import uni.fmi.service.RestorePassService;
import uni.fmi.service.SignUpService;

public class HomeScreenModel {

	private String userType;
	private String username;
	private String password;
		
	private String phone;
	private String email;	
	    
	private String approval;
	
	private String fullName;
	private String workingMother;
    private String workingFather;
    private String disability;
    private String twin;
    private String relative;
    private String relativeName;
    private String totalPoints;
	
	private String message;
	
	
	
	public void setUserType(String userType) {
		this.userType = userType;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public Object getMessage() {
		return message;
	}
	
	
	
	
	//LoginScreenModel	
	public void navLI() {
		System.out.println("Навигация до страницата за вход в системата.");
	}

	public void navToFormLI() {
		System.out.println("Навигация до формата за вход в системата.");		
	}
	
	public void clickLoginButton() {
		message = LoginService.login(userType, username, password);
	}

		
	//SignUpScreenModel
	public void navSU() {
		System.out.println("Навигирано е до страницата за регистрация в системата.");		
	}

	public void navToFormSU() {
		System.out.println("Навигирано е до формата за регистрация в системата.");		
	}	
	
	public void clickPassVisibilityButton() {
		System.out.println("Паролата е видима.");
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public void setPhone(String phone) {
		this.phone = phone;
	}

	public void clickSignUpButton() {
		message = SignUpService.signUp(username, password, userType, email, phone);
	}
	
	
	//RestorePassScreenModel
	public void navRP() {
		System.out.println("Навигирано е до страницата за възстановяване на паролата.");		
	}

	public void navToFormRP() {
		System.out.println("Навигирано е до формата за възстановяване на паролата.");	
	}

	public void setApproval(String approval) {
		this.approval = approval;
	}

	public void clickRestorePassButton() {
		message = RestorePassService.restorem(username, approval);
	}
	

	//ChildScreenModel
	public void navC() {
		System.out.println("Навигирано е до страницата за регистрация на дете в системата.");		
	}

	public void navToFormC() {
		System.out.println("Навигирано е до формата за регистрация на дете в системата.");		
	}
	
	public void setRelativeName(String relativeName) {
		this.relativeName = relativeName;
	}

	public void setWorkingMother(String workingMother) {
		this.workingMother = workingMother;
	}
	
	public void setWorkingFather(String workingFather) {
		this.workingFather = workingFather;
	}
	
	public void setDisability(String disability) {
		this.disability = disability;
	}
	
	public void setTwin(String twin) {
		this.twin = twin;
	}
	
	public void setRelative(String relative) {
		this.relative = relative;
	}
	
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public void clickChildRegButton() {
		totalPoints = ChildService.totalP(workingMother, workingFather, disability, twin, relative, relativeName, totalPoints);
		message = ChildService.childM(fullName, workingMother, workingFather, disability, twin, relative, relativeName, totalPoints);
	}
	
	public Object checkTotalPoints() {		
        return totalPoints;
	}
}
