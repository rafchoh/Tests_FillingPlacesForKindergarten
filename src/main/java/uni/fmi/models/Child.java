package uni.fmi.models;
import java.util.*;


public class Child {

    public String fullName;
    private String workingMother;
    private String workingFather;
    private String disability;
    private String twin;
    private String relative;
    public String totalPoints;
    
    private Set<User> users;
    
    public Child() {
    }    
    public Child(String fullName, String workingMother, String workingFather, String disability, String twin,
			String relative, String totalPoints) {
		super();
		this.fullName = fullName;
    	this.workingMother = workingMother;
    	this.workingFather = workingFather;
    	this.disability = disability;
    	this.twin = twin;
    	this.relative = relative;
    	this.totalPoints = totalPoints;
	}

	public String getFullName() {
        return fullName;
    }

    public String getWorkingMother() {
        return workingMother;
    }

    public String getWorkingFather() {
        return workingFather;
    }

    public String getDisability() {
        return disability;
    }

    public String getTwin() {
        return twin;
    }

    public String getRelative() {
        return relative;
    }

    public String getTotalPoints() {
        return totalPoints;
    }


    
    public void setFullName(String fullName) {
        this.fullName = fullName;
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
		result = prime * result + ((disability == null) ? 0 : disability.hashCode());
		result = prime * result + ((fullName == null) ? 0 : fullName.hashCode());
		result = prime * result + ((relative == null) ? 0 : relative.hashCode());
		result = prime * result + ((totalPoints == null) ? 0 : totalPoints.hashCode());
		result = prime * result + ((twin == null) ? 0 : twin.hashCode());
		result = prime * result + ((users == null) ? 0 : users.hashCode());
		result = prime * result + ((workingFather == null) ? 0 : workingFather.hashCode());
		result = prime * result + ((workingMother == null) ? 0 : workingMother.hashCode());
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
		Child other = (Child) obj;
		if (disability == null) {
			if (other.disability != null) {
				return false;
			}
		} else if (!disability.equals(other.disability)) {
			return false;
		}
		if (fullName == null) {
			if (other.fullName != null) {
				return false;
			}
		} else if (!fullName.equals(other.fullName)) {
			return false;
		}
		if (relative == null) {
			if (other.relative != null) {
				return false;
			}
		} else if (!relative.equals(other.relative)) {
			return false;
		}
		if (totalPoints == null) {
			if (other.totalPoints != null) {
				return false;
			}
		} else if (!totalPoints.equals(other.totalPoints)) {
			return false;
		}
		if (twin == null) {
			if (other.twin != null) {
				return false;
			}
		} else if (!twin.equals(other.twin)) {
			return false;
		}
		if (users == null) {
			if (other.users != null) {
				return false;
			}
		} else if (!users.equals(other.users)) {
			return false;
		}
		if (workingFather == null) {
			if (other.workingFather != null) {
				return false;
			}
		} else if (!workingFather.equals(other.workingFather)) {
			return false;
		}
		if (workingMother == null) {
			if (other.workingMother != null) {
				return false;
			}
		} else if (!workingMother.equals(other.workingMother)) {
			return false;
		}
		return true;
	}	
}








//public Set<Classification> classifications;
//
//public Set<Classification> getClassifications() {
//	if (classifications == null) {
//    	classifications = new HashSet<>();
//    }
//    return null;
//}
//
//public void getClassifications(Set<Classification> classifications) {
//    this.classifications = classifications;
//}
//
///*
//  //4 hasc & equals
//result = prime * result + ((classifications == null) ? 0 : classifications.hashCode());
//
//if (classifications == null) {
//	if (other.classifications != null) {
//		return false;
//	}
//} else if (!classifications.equals(other.classifications)) {
//	return false;
//}
//*/