package rh.request.forms;

import java.util.Arrays;

import com.common.Request;

public class ReqCompare extends Request {
	private int[] prodId;
	private String prodType;

	public int[] getProdId() {
		return prodId;
	}

	public void setProdId(int[] prodId) {
		this.prodId = prodId;
	}

	public String getProdType() {
		return prodType;
	}

	public void setProdType(String prodType) {
		this.prodType = prodType;
	}

	@Override
	public String toString() {
		return "ReqCompare [prodId=" + Arrays.toString(prodId) + ", prodType=" + prodType + "]";
	}

}
