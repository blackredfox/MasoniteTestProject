package selenium.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MainPage extends BaseActions {
    public MainPage(WebDriver webDriver, WebDriverWait wait) {
        super(webDriver, wait);
    }


    public void searchItem(String flavorName){
        driver.findElement(Locators.FLAVOR_SEARCH_TEXT_FIELD).sendKeys(flavorName);
        driver.findElement(Locators.FLAVOR_SEARCH_BUTTON).click();
    }


    public void addQuantity(int scoops, By locator){
        for (int i = 0; i < scoops; i++) {
            driver.findElement(locator).click();
        }

    }

    public void substractQuantity(int scoops, By locator){
        for (int i = 0; i < scoops; i++) {
            driver.findElement(locator).click();
        }

    }


    public void clickCheckoutButton(){
        driver.findElement(Locators.BUY_ICE_CREAM_CHECKOUT_BUTTON).click();
    }




}
