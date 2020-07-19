package selenium.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CheckoutPage extends BaseActions {
    public CheckoutPage(WebDriver webDriver, WebDriverWait wait) {
        super(webDriver, wait);
    }



    public void fillInOrder(String cardNumber, String expirationDate, String cvcNumber, String cardName,
                            String billingAddress, String cityName, String zipCode, String state){
        wait.until(ExpectedConditions.elementToBeClickable(Locators.CARD_NUMBER_TEXT_FIELD));
        driver.findElement(Locators.CARD_NUMBER_TEXT_FIELD).sendKeys(cardNumber);
        driver.findElement(Locators.EXPIRATION_DATE_TEXT_FIELD).sendKeys(expirationDate);
        driver.findElement(Locators.CVC_TEXT_FIELD).sendKeys(cvcNumber);
        driver.findElement(Locators.CARD_NAME_TEXT_FIELD).sendKeys(cardName);
        driver.findElement(Locators.BILLING_ADDRESS_TEXT_FIELD).sendKeys(billingAddress);
        driver.findElement(Locators.CITY_NAME_TEXT_FIELD).sendKeys(cityName);
        driver.findElement(Locators.ZIP_CODE_TEXT_FIELD).sendKeys(zipCode);
        driver.findElement(Locators.STATE_SELECT_LIST).click();
        wait.until(ExpectedConditions.elementToBeClickable(setStateLocator(state)));
        driver.findElement(setStateLocator(state)).click();
    }


    public void clickCompleteOrder(){
        ajaxClick(Locators.COMPLETE_ORDER_BUTTON);
    }

}
