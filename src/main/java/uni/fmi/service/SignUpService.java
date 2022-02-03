package uni.fmi.service;

import java.util.List;

import uni.fmi.models.User;

public class SignUpService {
	
	public static String signUp(String username, String password, String userType, String email, String phone) {
		
		List<User> usersDB = DB.getUsers();
		
		String info = null;		
		int uTy = Integer.parseUnsignedInt(userType);
		
		
		final boolean isUsernameMatch = usersDB.stream()
				.anyMatch(u -> u.getUsername().equals(username));
		final boolean isPhoneMatch = usersDB.stream().
				anyMatch(u -> u.getPhone().equals(phone));
		final boolean isEmailMatch = usersDB.stream().
				anyMatch(u -> u.getEmail().equals(email));
		final boolean isUserMatch = usersDB.stream().
				anyMatch(u -> u.getUsername().equals(username) && u.getPassword().equals(password) 
						 && u.getUserType().equals(userType) && u.getPhone().equals(phone) && u.getEmail().equals(email));
		
		
		if(!(username == null || username.isBlank()) && !(password == null || password.isBlank()) && !(userType == null || userType.isBlank())
		   && !(email == null || email.isBlank()) && !(phone == null || phone.isBlank())){
			if( uTy == 0 ||  uTy == 1 || uTy == 2 ) {
			    if(!isUserMatch) {
			        info = "Регистрирахте се успешно!";
		        }else if(isUserMatch) {
			        info = "Потребителят съществува!";
		        }else if(isUsernameMatch) {
			        info = "Потребителското име е в употреба!";
		        }else if(isEmailMatch) {
		        	info = "Невалиден email!";
		        }else if(isPhoneMatch) {
			        info = "Невалиден телефонен номер!";
		        }
		    }else info = "Такъв тип на потребителя не съществува!";
		}else if((username == null || username.isBlank()) || (password == null || password.isBlank()) 
				 || (email == null || email.isBlank()) || (phone == null || phone.isBlank())){
	        info = "Това e/са задължителни полета!";
		}
				
		return info;
	}	
}
