package ztemp;

public class DesTest {

	private int id;
	private String name;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void loanSchedule() {
		// Create Scanner
		

		// Prompt the user to enter the loan amount,
		// the number of years and the annual interest rate
		System.out.print("Loan Amount: ");
		double loanAmount = 5000;
		System.out.print("Number of Years: ");
		int years = 2;
		System.out.print("Annual Interest Rate: ");
		double annualRate = 25;

		// Calculate monthly interest rate
		double monthlyRate = annualRate / 1200;

		// Calculat montly payment
		double monthlyPayment = loanAmount * monthlyRate / (1 - 1 / Math.pow(1 + monthlyRate, years * 12));

		// Display montly payment
		System.out.printf("Monthly Payment: %.2f\n", monthlyPayment);

		// Display total payment
		System.out.printf("Total Payment: %.2f\n", (monthlyPayment * 12) * years);

		// Create amortization schedule
		double balance = loanAmount, principal, interest;
		System.out.println("Payment#     Interest     Principal     Balance");
		for (int i = 1; i <= years * 12; i++) {
			interest = monthlyRate * balance;
			principal = monthlyPayment - interest;
			balance = balance - principal;
			System.out.printf("%-13d%-13.2f%-13.2f%.2f\n", i, interest, principal, balance);
		}
	}

}
