package uni.fmi.service;

import java.util.List;

import uni.fmi.models.Child;

public class ChildService {

	public static String childM(String fullName, String workingMother, String workingFather, 
			                    String disability, String twin, String relative, String relativeName, String totalPoints) {
	
		List<Child> childDB = DB.getChildren();
		
		String info = null;		
		int wMo = Integer.parseUnsignedInt(workingMother);
		int wFa = Integer.parseUnsignedInt(workingFather);
		int disA = Integer.parseUnsignedInt(disability);
		int twn = Integer.parseUnsignedInt(twin);
		int reltv = Integer.parseUnsignedInt(relative);
		
		
		final boolean isFullNameMatch = childDB.stream()
				.anyMatch(c -> c.getFullName().equals(fullName));
		final boolean isRelativeMatch = childDB.stream()
				.anyMatch(c -> c.getFullName().equals(relativeName));
		
		
		if(!isFullNameMatch && !(fullName == null || fullName.isBlank()) && 
				   ( wMo <= 1 ) && ( wFa <= 1 ) 
					  && ( disA == 0 || disA == 2) && ( twn <= 1 ) && ( reltv <= 1 )) {
			if( reltv != 0) {
	            if(!isRelativeMatch) {
	    	        info = "Проверете въведеното име за брат/сестра в детското заведение!";
	            }else info = "Регистрирахте детето си успешно!";
    	    }else info = "Регистрирахте детето си успешно!";
		}else if(isFullNameMatch && !(fullName == null || fullName.isBlank()) && 
				   ( wMo <= 1 ) && ( wFa <= 1 ) 
					  && ( disA == 0 || disA == 2) && ( twn <= 1 ) && ( reltv <= 1 )) {		
			 info = "В системата има запис за това дете!";
		}else {
			if((workingMother == null || workingMother.isBlank()) || (workingFather == null || workingFather.isBlank()) 
			   || (disability == null || disability.isBlank()) || (twin == null || twin.isBlank())
			   || (relative == null || relative.isBlank())) {
				info = "Непълна информация за точки на детето Ви!";
			} 
			
			
	     	
			
			if(!( wMo <= 1 ) || !( wFa <= 1 ) || !( disA == 0 || disA == 2)
			   || !( twn <= 1 ) || !( reltv <= 1 )) {
				info = "Неправилни стойности за точки на детето Ви!";
			}
			
		    if(isFullNameMatch || (fullName == null || fullName.isBlank())) {
			    info = "Моля въведете валидни данни за име!";
		    }	
		}
		
		    return info;
	}
	
	public static String totalP( String workingMother, String workingFather, 
			String disability, String twin, String relative, String relativeName, String totalPoints) {
		
		List<Child> childDB = DB.getChildren();
		
        int totalP;  
        String info = null;	
		int wMo = Integer.parseUnsignedInt(workingMother);
		int wFa = Integer.parseUnsignedInt(workingFather);
		int disA = Integer.parseUnsignedInt(disability);
		int twn = Integer.parseUnsignedInt(twin);
		int reltv = Integer.parseUnsignedInt(relative);
		
		
		
		final boolean isRelativeMatch = childDB.stream()
				.anyMatch(c -> c.getFullName().equals(relativeName));
				
		if( !(workingMother == null || workingMother.isBlank()) && !(workingFather == null || workingFather.isBlank()) 
		    && !(disability == null || disability.isBlank()) && !(twin == null || twin.isBlank())
			&& !(relative == null || relative.isBlank()) && ( wMo <= 1 ) && ( wFa <= 1 ) && ( disA == 0 || disA == 2)
			&& ( twn <= 1 ) && ( reltv <= 1 )) {
			
			totalP = wMo + wFa + disA + twn;		
			totalPoints = String.valueOf(Integer.valueOf(totalP));
			
			if( reltv != 0) {
			    if(isRelativeMatch) {
				    totalP += reltv;	
				    totalPoints = String.valueOf(Integer.valueOf(totalP));
				    info = "Проверено! Детето ви има " + totalPoints + " точки!";
		        }else if(!isRelativeMatch) {
		        	info = "Няма такова дете в системата! Детето ви има " + totalPoints + " точки!";		        
		        }else info = "Детето ви има " + totalPoints + " точки!";	    	
		    }else info = "Детето ви има " + totalPoints + " точки!";	    
		}else info = "Грешка!";
		
		
		return info;
	}
}
