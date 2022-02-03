package uni.fmi.service;

import java.util.List;

import uni.fmi.models.User;

public class LoginService {
	
	public  static String login(String userType, String username, String password) {
				
		List<User> userDB = DB.getUser();
		
		String info = null;		
		int uTy = Integer.parseUnsignedInt(userType);
		
				
		final boolean isUserMatch = userDB.stream()
				.anyMatch(u -> u.getUsername().equals(username) && u.getPassword().equals(password) && u.getUserType().equals(userType));	
		final boolean isUsernameMatch = userDB.stream()
				.anyMatch(u -> u.getUsername().equals(username));
		final boolean isPasswordMatch = userDB.stream()
				.anyMatch(u -> u.getPassword().equals(password));
		final boolean isUserTypeMatch = userDB.stream()
				.anyMatch(u -> u.getUserType().equals(userType));
		
		
		if(!(username == null || username.isBlank()) && !(password == null || password.isBlank()) 
			   && !(userType == null || userType.isBlank())) {
			if( uTy == 0 ||  uTy == 1 || uTy == 2 ) {
		        if(isUserMatch) {
			        info = "Успешен вход в профила!";
		        }
		        if(isUserTypeMatch && isUsernameMatch && !isPasswordMatch ) {
		        	info = "Грешна парола!";
		        }else if(!isUserMatch) {
		            info = "Няма регистрация за този потребител!";
		        }else if(!isUserTypeMatch){
		            info = "Потребител от този тип не съществува!";
		        }
			}else info = "Такъв тип на потребителя не съществува!";
		}else info = "Това e/са задължителни полета!";
						
		return info;
	}
}
