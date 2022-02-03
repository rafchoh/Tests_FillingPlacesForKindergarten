package uni.fmi.service;

import java.util.ArrayList;
import java.util.List;

import uni.fmi.models.Child;
import uni.fmi.models.User;

public class DB {

	// userTypes: 0-admin / 1-normal user / 2-kid 
		public static List<User> getUser() {
		List<User> result = new ArrayList<User>();
	    User u1 = new User();
	    
		u1.setUserType("0");
	    u1.setUsername("ivanella11");
	    u1.setPassword("123456");
	    
	    	    
	    result.clear();
	    
	    result.add(u1);
	    
	    return result;
	}
	public static List<User> getUsers() {
		List<User> result = new ArrayList<User>();
	    User u1 = new User();
	    
		u1.setUserType("0");
	    u1.setUsername("ivanella11");
	    u1.setPassword("123456");
	    u1.setEmail("iv11_v@abv.bg");	    
	    u1.setPhone("0984572021");  
	    
	    	    
	    result.clear();
	    
	    result.add(u1);
	    
	    return result;
	}
	
	public static List<Child> getChildren() {	
        List<Child> result = new ArrayList<Child>();
        Child c1 = new Child();
        Child c2 = new Child();
        Child c3 = new Child();
		
        c1.setFullName("Иван Петров");
        c1.setWorkingMother("1");
        c1.setWorkingFather("1");
        c1.setDisability("0");
        c1.setTwin("0");
        c1.setRelative("1");
        c1.setTotalPoints("3");
        
        c2.setFullName("Иванa Петровa");
        c2.setWorkingMother("1");
        c2.setWorkingFather("1");
        c2.setDisability("0");
        c2.setTwin("0");
        c2.setRelative("0");
        c2.setTotalPoints("2");
        
        c3.setFullName("Георги Атанасов");
        c3.setWorkingMother("1");
        c3.setWorkingFather("1");
        c3.setDisability("0");
        c3.setTwin("0");
        c3.setRelative("0");
        c3.setTotalPoints("2");
        
        
        result.clear();
        
        result.add(c1);
        result.add(c2);
        result.add(c3);
	    
        return result;
    }
	
}
