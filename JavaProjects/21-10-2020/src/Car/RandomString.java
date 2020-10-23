package Car;
import java.util.concurrent.ThreadLocalRandom;

public class RandomString {
	

	public static String randomStringOfArray(String[] arr) {
		return arr[ThreadLocalRandom.current().nextInt(arr.length)];
	}
	
	public static String randomShortString() {
		return Long.toString(Long.parseLong(Double.toString(ThreadLocalRandom.current().nextDouble()).substring(2)), 36);
	}
	
	public static String randomString(int len) {
		StringBuilder stringBuilder = new StringBuilder();
		for (int i=0; i < len; i++)stringBuilder.append((char)(ThreadLocalRandom.current().nextInt(33,127)));
		return stringBuilder.toString();
	}
}
