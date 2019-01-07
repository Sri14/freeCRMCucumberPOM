package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utils.TestBase;

public class HomePage extends TestBase {
	
	public HomePage(){
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = "//a[contains(text(),'Deals')]")
	WebElement deals;

	@FindBy(xpath = "//a[contains(text(),'New Deal')]")
	WebElement newDeal;
	
	@FindBy(xpath = "//input[@type ='image']")
	WebElement search;
	
	@FindBy(xpath ="//input[@name='client_lookup']")
	WebElement dealFirstName;
	
	@FindBy(xpath ="//input[@name='contact_lookup']")
	WebElement deallastname;
	
	@FindBy(xpath = ".//td[@colspan='2']/input[@value='Save']")
	WebElement dealSavebtn;
	
	
	public String validateHomePage() {
		return driver.getTitle();
	}
	
	public void newDeal() throws Exception {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(deals).build().perform();
		Thread.sleep(2000);
		newDeal.click();
	}
	
	public void enterdealdetilas(String firstname, String lastname) throws Exception{
		dealFirstName.sendKeys(firstname);
		deallastname.sendKeys(lastname);
		Thread.sleep(3000);
		
	}
	
	
	public void saveDeal() {
		dealSavebtn.click();
		
	}
	
}
