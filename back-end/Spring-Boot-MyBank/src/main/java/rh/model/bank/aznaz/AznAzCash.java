package rh.model.bank.aznaz;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AznAzCash {
	private AznAzCurrency usd;
	private AznAzCurrency eur;
	private AznAzCurrency rub;
	private AznAzCurrency gbp;
	@JsonProperty("try")
	private AznAzCurrency _try;
	private AznAzCurrency gold;
	private AznAzCurrency oil;

	public AznAzCurrency getGold() {
		return gold;
	}
	public void setGold(AznAzCurrency gold) {
		this.gold = gold;
	}
	public AznAzCurrency getOil() {
		return oil;
	}
	public void setOil(AznAzCurrency oil) {
		this.oil = oil;
	}
	public AznAzCurrency getUsd() {
		return usd;
	}
	public void setUsd(AznAzCurrency usd) {
		this.usd = usd;
	}
	public AznAzCurrency getEur() {
		return eur;
	}
	public void setEur(AznAzCurrency eur) {
		this.eur = eur;
	}
	public AznAzCurrency getRub() {
		return rub;
	}
	public void setRub(AznAzCurrency rub) {
		this.rub = rub;
	}
	public AznAzCurrency getGbp() {
		return gbp;
	}
	public void setGbp(AznAzCurrency gbp) {
		this.gbp = gbp;
	}
	public AznAzCurrency get_try() {
		return _try;
	}
	public void set_try(AznAzCurrency _try) {
		this._try = _try;
	}
}
