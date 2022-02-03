package uni.fmi.service;

import java.util.List;

import uni.fmi.models.User;

public class RestorePassService {
	
	public static String restorem(String username, String approval) {
        
		List<User> usersDB = DB.getUsers();

		String info = null;

		
		final boolean isUsernameMatch = usersDB.stream()
				.anyMatch(u -> u.getUsername().equals(username));
		final boolean isEmailMatch = usersDB.stream()
				.anyMatch(u -> u.getEmail().equals(approval));
		final boolean isPhoneMatch = usersDB.stream()
				.anyMatch(u -> u.getPhone().equals(approval));
		
		
		
		    if(isUsernameMatch) {
		        if(isUsernameMatch && isEmailMatch) {
			        info = "Изпратен е линк в пощата Ви за възстановяване на паролата!";
		        }else if(isUsernameMatch && isPhoneMatch) {
			        info = "Изпратен е код за възстановяване на паролата в телефона Ви!";
		        }else info = "Няма информация за този потребител в базата данни!";
		    }else info = "Няма информация за този потребител в базата данни!";
	
		
		return info;
	}
}
