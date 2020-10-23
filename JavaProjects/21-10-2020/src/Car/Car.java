package Car;

import java.util.concurrent.ThreadLocalRandom;

import application.RandomString;

public class Car {
	
	private static final String[] MODELS = {"Ford","Audi","Fiat","Mazda","Kia"};
	private static final int MIN_YEAR = 2000;
	private static final int MAX_YEAR = 2020;
	private static final double MIN_ENGINE = 1.3;
	private static final double MAX_ENGINE = 2.5;
	private static final double AC_PROBABILITY = 0.5;
	
	private String model;
	private int year;
	private double engine;
	private boolean ac;
	
	public Car() {
		super();
	}

	public Car(String model, int year, double engine, boolean ac) {
		super();
		this.model = model;
		this.year = year;
		this.engine = engine;
		this.ac = ac;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public double getEngine() {
		return engine;
	}

	public void setEngine(double engine) {
		this.engine = engine;
	}

	public boolean isAc() {
		return ac;
	}

	public void setAc(boolean ac) {
		this.ac = ac;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (ac ? 1231 : 1237);
		long temp;
		temp = Double.doubleToLongBits(engine);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((model == null) ? 0 : model.hashCode());
		result = prime * result + year;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Car other = (Car) obj;
		if (ac != other.ac)
			return false;
		if (Double.doubleToLongBits(engine) != Double.doubleToLongBits(other.engine))
			return false;
		if (model == null) {
			if (other.model != null)
				return false;
		} else if (!model.equals(other.model))
			return false;
		if (year != other.year)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Car [model=" + model + ", year=" + year + ", engine=" + engine + ", ac=" + ac + "]";
	}
	
	public static Car randomCar() {
		String randomModel = RandomString.randomStringOfArray(MODELS);
		int randomYear = ThreadLocalRandom.current().nextInt(MIN_YEAR, MAX_YEAR);
		double randomEngine = Double.parseDouble(String.format("%.1f",ThreadLocalRandom.current().nextDouble(MIN_ENGINE, MAX_ENGINE)));
		boolean randomAC = Math.random() < AC_PROBABILITY;
		
		return new Car(randomModel, randomYear, randomEngine, randomAC);
	}
}
