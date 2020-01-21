package ztemp;

import com.common.Params;

public class BankCardParams extends Params {
	private int cdID;

	public int getCdID() {
		return cdID;
	}

	public void setCdID(int cdID) {
		this.cdID = cdID;
	}

	@Override
	public String toString() {
		return "BankCardParams [cdID=" + cdID + "]";
	}

}
