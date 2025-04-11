package employeemanager;

public class Employee {
    private String Name;
    private String PhoneNumber;
	private int Position;
    private String Email;
    private int EmployeeID;

    public Employee() {
    }

    public Employee( int EmployeeID, String Name,  int Position, String Email, String PhoneNumber) {
        this.Name = Name;
        this.PhoneNumber = PhoneNumber;
        this.Position = Position;
        this.Email = Email;
        this.EmployeeID = EmployeeID;
    }
// set
   
    public void setName(String Name) {
        this.Name = Name;
    }

    public void setPhoneNumber(String PhoneNumber) {
        this.PhoneNumber = PhoneNumber;
    }

    public void setPosition(int Position) {
        this.Position = Position;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public void setEmployeeID(int EmployeeID) {
        this.EmployeeID = EmployeeID;
    }
// get
 
    public String getName() {
        return Name;
    }

    public String getPhoneNumber() {
        return PhoneNumber;
    }

    public int getPosition() {
        return Position;
    }

    public String getEmail() {
        return Email;
    }

    public int getEmployeeID() {
        return EmployeeID;
    }
}