package uni.fmi.models;
import java.util.*;

public class User {

	private String username;
    private String password;
    private String userType;
    private String email;
    private String phone;
    
    private Set<Role> roles;
    private Set<Child> children;
    private Set<Classification> classifications;

    
    public User() {
    }
    public User(String userType, String username, String password) {
    	super();
    	this.userType = userType;
    	this.username = username;
    	this.password = password;    	
    }
    public User(String username, String password, String userType, String email, String phone){
    	super();
    	this.userType = userType;
    	this.username = username;
    	this.password = password;    	
    	this.email = email;
    	this.phone = phone;    	
    }
    
    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
    
    public String getUserType() {
        return userType;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    
    
    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public void setUserType(String userType) {
        this.userType = userType;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    
    
    public Set<Role> getRoles() {
        if (roles == null) {
        	roles = new HashSet<>();
        }
        return null;
    }

    public void setRoles(Set<Role> roles) {
        if(roles != null) {    	
        	this.roles = roles;
    	}else {
    		this.roles.clear();
    	}        
    }

    public Set<Child> getChildren() {
    	if (children == null) {
        	children = new HashSet<>();
        }
        return null;
    }

    public void setChildren(Set<Child> children) {
        this.children = children;
    }

    public Set<Classification> getClassifications() {
    	if (classifications == null) {
    		classifications = new HashSet<>();
        }
        return null;
    }
    
    public void getClassifications(Set<Classification> classifications) {
    	this.classifications = classifications;
    }
    
        
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((children == null) ? 0 : children.hashCode());
		result = prime * result + ((classifications == null) ? 0 : classifications.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((phone == null) ? 0 : phone.hashCode());
		result = prime * result + ((roles == null) ? 0 : roles.hashCode());
		result = prime * result + ((userType == null) ? 0 : userType.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		User other = (User) obj;
		if (children == null) {
			if (other.children != null) {
				return false;
			}
		} else if (!children.equals(other.children)) {
			return false;
		}
		if (classifications == null) {
			if (other.classifications != null) {
				return false;
			}
		} else if (!classifications.equals(other.classifications)) {
			return false;
		}
		if (email == null) {
			if (other.email != null) {
				return false;
			}
		} else if (!email.equals(other.email)) {
			return false;
		}
		if (password == null) {
			if (other.password != null) {
				return false;
			}
		} else if (!password.equals(other.password)) {
			return false;
		}
		if (phone == null) {
			if (other.phone != null) {
				return false;
			}
		} else if (!phone.equals(other.phone)) {
			return false;
		}
		if (roles == null) {
			if (other.roles != null) {
				return false;
			}
		} else if (!roles.equals(other.roles)) {
			return false;
		}
		if (userType == null) {
			if (other.userType != null) {
				return false;
			}
		} else if (!userType.equals(other.userType)) {
			return false;
		}
		if (username == null) {
			if (other.username != null) {
				return false;
			}
		} else if (!username.equals(other.username)) {
			return false;
		}
		return true;
	}
    
}  
	