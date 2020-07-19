package selenium.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ShoppingCartPage extends BaseActions {
    public ShoppingCartPage(WebDriver webDriver, WebDriverWait wait) {
        super(webDriver, wait);
    }

    public WebElement findDefaultWaffleCone(){
        return driver.findElement(Locators.DEFAULT_WAFFLE_CONE_ICON);
    }


    public WebElement findFirstScoopInCart(){
        return driver.findElement(Locators.FIRST_SCOOP_IN_CART);
    }

    public WebElement findPriceItemInCart(){
        return driver.findElement(Locators.PRICE_ITEM_IN_CART);
    }


    public Integer countNoFlavorsLabels(){
       return driver.findElements(Locators.NO_FLAVORS_IN_CART).size();
    }

    public WebElement findCheckoutButton(){
        return driver.findElement(Locators.BUY_ICE_CREAM_CHECKOUT_BUTTON);
    }
}
