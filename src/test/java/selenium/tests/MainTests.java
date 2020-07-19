package selenium.tests;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import selenium.pages.Data;
import selenium.pages.Locators;

import java.util.List;

public class MainTests extends BaseUI {

    String actualTitle;

    @Test
    public void verifySearchFlavor() {
        mainPage.searchItem(Data.flavorBanana);
        actualTitle = mainPage.getText(Locators.RESULT_FLAVOR_TEXT);
        Assertions.assertEquals(actualTitle, Data.flavorBanana);
    }


    @Test
    public void verifyToppingsAlphabet() {
        mainPage.addSides(Data.addTopping);
        List<WebElement> flavorsElements = driver.findElements(Locators.TITLE_OF_ITEMS);
        for (int i = 0; i < flavorsElements.size()-1; i++) {
            if (flavorsElements.get(i).getText().compareToIgnoreCase(flavorsElements.get(i + 1).getText()) > 0) {
                Assertions.fail("List of toppings from UI is` not listed alphabetically");
            }
        }
    }

    @Test
    public void verifySaucesAlphabet() {
        mainPage.addSides(Data.addSauce);
        List<WebElement> flavorsElements = driver.findElements(Locators.TITLE_OF_ITEMS);
        for (int i = 0; i < flavorsElements.size()-1; i++) {
            if (flavorsElements.get(i).getText().compareToIgnoreCase(flavorsElements.get(i + 1).getText()) > 0) {
                Assertions.fail("List of sauces from UI is` not listed alphabetically");
            }
        }
    }


    @Test
    public void verifyDefaultWaffleCone() {
        Assertions.assertTrue(shoppingCartPage.findDefaultWaffleCone().isDisplayed());
    }


    @Test
    public void verifyChangesItemsInShoppingCart() {
        mainPage.addQuantity(1, Locators.ADD_BANANA_SCOOP_QUANTITY);
        Assertions.assertTrue(shoppingCartPage.findFirstScoopInCart().isDisplayed());
        if(!shoppingCartPage.findFirstScoopInCart().getText().contains(Data.flavorBanana)){
            Assertions.fail(Data.flavorBanana + " is not found in cart!");
        }

    }
    @Test
    public void verifyChangesPriceInShoppingCart() {
        mainPage.addQuantity(2, Locators.ADD_BANANA_SCOOP_QUANTITY);
        String price = shoppingCartPage.findPriceItemInCart().getText();
        if(!price.contains(Data.priceForTwoScoops)){
            Assertions.fail(Data.priceForTwoScoops + " is not correct in cart!");
        }
    }


    @Test
    public void maxThreeScoops() {
        mainPage.addQuantity(3, Locators.ADD_BANANA_SCOOP_QUANTITY);
        if(driver.findElement(Locators.ADD_BANANA_SCOOP_QUANTITY).isEnabled()){
            Assertions.fail("Add button is still more than 3 scoops");
        }
        if(shoppingCartPage.findFirstScoopInCart().getText().contains("4")){
            Assertions.fail("Cart has 4 scoops");
        }
    }


    @Test
    public void lessThanZeroScoops() {
        if(driver.findElement(Locators.SUBSCTRACT_BANANA_SCOOP_QUANTITY).isEnabled()){
            Assertions.fail("Substract button is enabled");
        }
        if(shoppingCartPage.countNoFlavorsLabels() == 0){
            Assertions.fail("Cart has less 0 scoops in cart");
        }
    }

    @Test
    public void verifyThatOneScoopIsRequired() {
        if(!shoppingCartPage.findCheckoutButton().isEnabled()){
            Assertions.fail("Checkout button is enabled without scoop in cart");
        }
        mainPage.addQuantity(1, Locators.ADD_BANANA_SCOOP_QUANTITY);
        wait.until(ExpectedConditions.elementToBeClickable(Locators.BUY_ICE_CREAM_CHECKOUT_BUTTON));
        mainPage.clickCheckoutButton();
        wait.until(ExpectedConditions.elementToBeClickable(Locators.CARD_NUMBER_TEXT_FIELD));
    }


    @Test
    public void verifyCheckoutReturnToHomePage() {
        mainPage.addQuantity(1, Locators.ADD_BANANA_SCOOP_QUANTITY);
        driver.findElement(Locators.BUY_ICE_CREAM_CHECKOUT_BUTTON).click();
        wait.until(ExpectedConditions.elementToBeClickable(Locators.HOME_PAGE_RETURN_BUTTON));
        driver.findElement(Locators.HOME_PAGE_RETURN_BUTTON).click();
        wait.until(ExpectedConditions.elementToBeClickable(Locators.BUY_ICE_CREAM_CHECKOUT_BUTTON));
        Assertions.assertTrue(driver.findElement(Locators.ORDER_TITLE).isDisplayed());

    }




    @Test
    public void getVerifyFlavorResults(){
        mainPage.searchItem(Data.flavorBanana);
        actualTitle = mainPage.getText(Locators.RESULT_FLAVOR_TEXT);
        Assertions.assertEquals(actualTitle, Data.flavorBanana);
        mainPage.addQuantity(1, Locators.ADD_BANANA_SCOOP_QUANTITY);
        mainPage.clickCheckoutButton();
        checkoutPage.fillInOrder(Data.cardNumber, Data.expirationDate, Data.cvcNumber, Data.cardName,
                Data.billingAddress, Data.cityName, Data.zipCode, Data.stateName);
        checkoutPage.clickCompleteOrder();
        checkoutPage.ajaxClick(Locators.TITLE_ORDER_COMPLETED);
        Assertions.assertTrue(driver.findElement(Locators.TITLE_ORDER_COMPLETED).isDisplayed(), "Order is completed");
        finalReceiptPage.clickCreateNewOrder();
        Assertions.assertTrue(driver.findElement(Locators.ORDER_TITLE).isDisplayed());
    }







}
