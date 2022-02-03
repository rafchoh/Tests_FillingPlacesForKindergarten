package uni.fmi.models;
import java.util.*;


public class Classification {

    public String numClassification;
    public String fullName;
    public String totalPoints;
    
    public Set<User> users;
    
    public Classification() {
    }
    public Classification(String numClassification, String fullName, String totalPoints) {
    	super();
    	this.numClassification = numClassification; 
    	this.fullName = fullName;
    	this.totalPoints = totalPoints;    	
    }
  
    public String getNumClassification() {
        return numClassification;
    }

    public String getFullName() {
        return fullName;
    }

    public String getTotalPoints() {
        return totalPoints;
    }

    

    public void setNumClassification(String numClassification) {
        this.numClassification = numClassification;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setTotalPoints(String totalPoints) {
        this.totalPoints = totalPoints;
    }

    
    
    public Set<User> getUsers() {
    	if (users == null) {
    		users = new HashSet<>();
        }
        return null;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((fullName == null) ? 0 : fullName.hashCode());
		result = prime * result + ((numClassification == null) ? 0 : numClassification.hashCode());
		result = prime * result + ((totalPoints == null) ? 0 : totalPoints.hashCode());
		result = prime * result + ((users == null) ? 0 : users.hashCode());
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
		Classification other = (Classification) obj;
		if (fullName == null) {
			if (other.fullName != null) {
				return false;
			}
		} else if (!fullName.equals(other.fullName)) {
			return false;
		}
		if (numClassification == null) {
			if (other.numClassification != null) {
				return false;
			}
		} else if (!numClassification.equals(other.numClassification)) {
			return false;
		}
		if (totalPoints == null) {
			if (other.totalPoints != null) {
				return false;
			}
		} else if (!totalPoints.equals(other.totalPoints)) {
			return false;
		}
		if (users == null) {
			if (other.users != null) {
				return false;
			}
		} else if (!users.equals(other.users)) {
			return false;
		}
		return true;
	}
}
	
	



	
	
//   
//    public Set<Child> children;
//    public Set<Child> getChildren() {
//    	if (children == null) {
//        	children = new HashSet<>();
//        }
//        return null;
//    }
//
//    public void setChildren(Set<Child> children) {
//        this.children = children;
//    }
//
//    
//    /*
//       //4 hashc & equals
//    result = prime * result + ((children == null) ? 0 : children.hashCode());
//    
//    if (children == null) {
//		if (other.children != null) {
//			return false;
//		}
//	} else if (!children.equals(other.children)) {
//		return false;
//	}
//    */
	
    
