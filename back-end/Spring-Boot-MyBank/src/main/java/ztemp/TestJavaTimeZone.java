package ztemp;

import java.util.TimeZone;

public class TestJavaTimeZone {

	public static void main(String[] args) {
		TimeZone defaultTZ = TimeZone.getDefault();
		System.out.println("Default TimeZone= " + defaultTZ.getID());
	}

}
