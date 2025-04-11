package employeemanager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class ConnJDBC {

    private static final String driverName = "com.mysql.cj.jdbc.Driver";
    private static final String jdbcUrl = "jdbc:mysql://localhost:3306/employeemanager?useSSL=false&allowPublicKeyRetrieval=true";
    private static final String user = "root";
    private static final String pass = "";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(jdbcUrl, user, pass);
    }

    //chức năng in ra tất cả danh sách
    public static List<Employee> findAll() {
        List<Employee> employeeList = new ArrayList<>();
        String query = "SELECT * FROM employee";
        try {
            Connection connection = getConnection();
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
                Employee st = new Employee(rs.getInt("EmployeeID"), rs.getString("Name"),
                        rs.getInt("Position"), rs.getString("Email"), rs.getString("PhoneNumber"));
                		employeeList.add(st);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return employeeList;
    }

//    chức năng thêm 
    public static void insert(Employee st) {
        String query = "INSERT INTO `employee`(EmployeeID,Name,Position,Email,PhoneNumber) VALUES (?, ?, ?, ?, ?)";
        try (Connection connection = getConnection();
             PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, st.getEmployeeID());
            pstmt.setString(2, st.getName());
            pstmt.setInt(3, st.getPosition());
            pstmt.setString(4, st.getEmail());
            pstmt.setString(5, st.getPhoneNumber());
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
//    Chức năng xóa
    public static void delete(Employee st) {
        String query = "DELETE FROM `employee` WHERE `employee`.`EmployeeID` = ?";
        try (Connection connection = getConnection();
             PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1,st.getEmployeeID());
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
//Chức năng cập  nhập
    public static void update(Employee st) {
        String query = "UPDATE `employee` SET EmployeeI=?, name=?, position=?, email=?, phonenumber=? WHERE EmployeeID = '"+st.getEmployeeID()+"'";
        try (Connection connection = getConnection();
             PreparedStatement pstmt = connection.prepareStatement(query)) {
        	 pstmt.setInt(1, st.getEmployeeID());
             pstmt.setString(2, st.getName());
             pstmt.setInt(3, st.getPosition());
             pstmt.setString(4, st.getEmail());
             pstmt.setString(5, st.getPhoneNumber());
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
//    Chức năng tìm kiếm
    public static List<Employee> findByEmployeeID(Employee employee) {
        List<Employee> employee1 = new ArrayList<>();
        String query = "SELECT * FROM `employee` WHERE EmployeeID = '"+employee.getEmployeeID()+"'";
        try (Connection connection = getConnection();
             PreparedStatement pstmt = connection.prepareStatement(query)) {
            ResultSet rs = pstmt.executeQuery();
                if (rs.next()) {
                    Employee em = new Employee(
                        rs.getInt("EmployeeID"),
                        rs.getString("Name"),
                        rs.getInt("Position"),
                        rs.getString("Email"),
                        rs.getString("PhoneNumber")
                    );
                    employee1.add(em);
                }
        } catch (SQLException e) {
            // Handle or log the exception
            e.printStackTrace();
        }
        return employee1;
    }




}
