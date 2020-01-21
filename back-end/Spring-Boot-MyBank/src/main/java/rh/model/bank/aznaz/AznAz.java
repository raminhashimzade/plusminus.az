package rh.model.bank.aznaz;

public class AznAz {
	
	private int id;
	private String name;
	private String link;
	private String maplink;	
	private AznAzCash cash;
	private AznAzNoCash nocash;	
	private String updateTime;
	
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

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getMaplink() {
		return maplink;
	}

	public void setMaplink(String maplink) {
		this.maplink = maplink;
	}	
	
	
	public AznAzCash getCash() {
		return cash;
	}

	public void setCash(AznAzCash cash) {
		this.cash = cash;
	}

	public AznAzNoCash getNocash() {
		return nocash;
	}

	public void setNocash(AznAzNoCash nocash) {
		this.nocash = nocash;
	}
	
	public String getUpdate_time() {
		return updateTime;
	}

	public void setUpdate_time(String update_time) {
		this.updateTime = update_time;
	}
}
