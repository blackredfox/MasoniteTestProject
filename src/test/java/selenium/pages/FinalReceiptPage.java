package selenium.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class FinalReceiptPage extends BaseActions {
    public FinalReceiptPage(WebDriver webDriver, WebDriverWait wait) {
        super(webDriver, wait);
    }



    public void clickCreateNewOrder(){
       ajaxClick(Locators.BUTTON_CREATE_NEW_ORDER);
    }
}
