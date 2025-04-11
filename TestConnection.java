package employeemanager;

import java.sql.*;

public class TestConnection {
    public static void main(String[] args) {
        String driver = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/employeemanager?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC";
        String user = "root";
        String pass = "";

        try {
            Class.forName(driver);
            Connection conn = DriverManager.getConnection(url, user, pass);
            System.out.println("✅ Kết nối thành công!");
            conn.close();
        } catch (Exception e) {
            System.out.println("❌ Kết nối thất bại:");
            e.printStackTrace();
        }
    }
}
