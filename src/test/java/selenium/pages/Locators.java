package selenium.pages;

import org.openqa.selenium.By;

public class Locators {
    // Masonite Test Project

    //1.	Verify when user searches for an ice cream flavor the results are filtered
// based on the query.
    public static final By FLAVOR_SEARCH_TEXT_FIELD= By.xpath("//input[@data-test='search-input']");
    public static final By FLAVOR_SEARCH_BUTTON= By.xpath("//button[@data-test='search-btn']");
    public static final By RESULT_FLAVOR_TEXT= By.xpath("//p[@data-test='flavor-name']");

// 2.	Verify list of toppings are listed alphabetically.


    public static final By ALMONDS_TOPPING_NAME= By.xpath("//input[@value='Almonds']");
    public static final By BROWNIE_BITS_TOPPING_NAME= By.xpath("//input[@value='Brownie Bits']");
    public static final By CHOCOLATE_CHIPS_TOPPING_NAME= By.xpath("//input[@value='Chocolate Chips']");
    public static final By GAMMY_BEARS_TOPPING_NAME= By.xpath("//input[@value='Gummy Bears']");
    public static final By PEANUT_BUTTER_CHIPS_TOPPING_NAME= By.xpath("//input[@value='Peanut Butter Chips']");
    public static final By SPRINKLES_TOPPING_NAME= By.xpath("//input[@value='Sprinkles']");

//3.	Verify list of sauces are listed alphabetically.

    public static final By ADD_A_SAUCE_LIST_BUTTON= By.xpath("//ul[@class='MuiList-root MuiList-padding']" +
            "//span[text()='Add a Sauce']");
    public static final By BUTTERSCOTCH_SAUCE_NAME= By.xpath("//input[@value='Butterscotch']");
    public static final By CARAMEL_SAUCE_NAME= By.xpath("//input[@value='Caramel']");
    public static final By CHOCOLATE_SAUCE_NAME= By.xpath("//input[@value='Chocolate']");
    public static final By HOT_FUDGE_SAUCE_NAME= By.xpath("//input[@value='Hot Fudge']");
    public static final By STRAWBERRY_SAUCE_NAME= By.xpath("//input[@value='Strawberry']");
    public static final By TITLE_OF_ITEMS= By.xpath("//label[@class='MuiFormControlLabel-root']");


    //SHopping cart
    public static final By DEFAULT_WAFFLE_CONE_ICON= By.xpath("//button[@data-test='waffle-cone-btn']//*[name()='path' and contains(@d,'M12 2C6.5 ')]");
    public static final By FIRST_SCOOP_IN_CART= By.xpath("//span[@data-test='cart-item-0']");
    public static final By NO_FLAVORS_IN_CART= By.xpath("//span[@data-test='no-flavors-label']");
    public static final By PRICE_ITEM_IN_CART= By.xpath("//h6[@data-test='total-price-label']");

// 3.1 locator for scv assertion

    public static final By SAUCE_NAME_LIST= By.xpath("//input[@type='radioButton')][@value='%s']");

    //4.	Verify that the waffle cone is selected by default.
// maybe there is  CHECKBOX
    public static final By CHECKBOX_BUTTON= By.xpath("//button[@data-test='waffle-cone-btn']");
    public static final By WAFFLE_CONE_BUTTON= By.xpath("//img[@alt='Waffle Cone']");

    //5.	Verify that the cart is updated whenever the user adds an ice cream flavor to their cart.
    public static final By FLAVOR_UPDATING_FIELD= By.xpath("//li[@class='MuiListItem-root MuiListItem-gutters']" +
            "//span[@data-test='cart-item-0']");

//6.	Change the number of scoops and verify that the price is updated correctly.

    public static final By PRICE_UPDATING_FIELD= By.xpath("//li[@class='MuiListItem-root MuiListItem-gutters']" +
            "//h6[@class='MuiTypography-root MuiTypography-h6']");

//7.	Verify that the user can only add a max of 3 scoops.

//8.	Verify that the user cannot subtract scoops less than 0.

// 9.	Verify that the user needs at least 1 scoop to be able to checkout.

    public static final By ADD_BANANA_SCOOP_QUANTITY= By.xpath("//div[@data-test='flavor-banana-pudding']//button[@data-test='plus-btn']");
    public static final By SUBSCTRACT_BANANA_SCOOP_QUANTITY= By.xpath("//div[@data-test='flavor-banana-pudding']//button[@data-test='minus-btn']");
    public static final By ACTIONS_BUTTONS_BANANA_SCOOP= By.xpath("//div[@data-test='flavor-banana-pudding']//button");

// 10.	On the Checkout page, verify that editing the cart will take the user back to the home page
    //with the all the items selected from the cart.

    public static final By BUY_ICE_CREAM_CHECKOUT_BUTTON= By.xpath("//span[@class='MuiButton-label']");
    public static final By BUTTON_CREATE_NEW_ORDER= By.xpath("//span[text()='Create New Order']");
    public static final By HOME_PAGE_RETURN_BUTTON= By.xpath("//a[@data-test='edit-btn']");
    public static final By ORDER_TITLE = By.xpath("//h6[text()='Your Order']");
    public static final By TITLE_ORDER_COMPLETED = By.xpath("//p[text()='Order Completed!']");


    //11.	Purchase an order and verify the confirmation message is displayed and the Create New Order button
    //takes the user back to the beginning.
//public static final By BUY_ICE_CREAM_CHECKOUT_BUTTON= By.xpath("//span[@class='MuiButton-label']");
    public static final By CARD_NUMBER_TEXT_FIELD= By.xpath("//input[@data-test='card-number-input']");
    public static final By EXPIRATION_DATE_TEXT_FIELD= By.xpath("//input[@data-test='expiration-input']");
    public static final By CVC_TEXT_FIELD= By.xpath("//input[@data-test='cvc-input']");
    public static final By CARD_NAME_TEXT_FIELD= By.xpath("//input[@data-test='card-name-input']");
    public static final By BILLING_ADDRESS_TEXT_FIELD= By.xpath("//input[@data-test='billing-input']");
    public static final By CITY_NAME_TEXT_FIELD= By.xpath("//input[@data-test='city-input']");
    public static final By ZIP_CODE_TEXT_FIELD= By.xpath("//input[@data-test='zip-input']");
    public static final By STATE_SELECT_LIST= By.xpath("//div[text()='Select a state']");

    public static final By COMPLETE_ORDER_BUTTON= By.xpath("//span[@class='MuiButton-label']");
    //public static final By PAGE_TITLE = By.xpath("//h6[text()='Ice Cream Test']");

//12.	Optional: Run all the tests in parallel in the following browsers:
// Google Chrome
// FireFox
//  Safari (if using macOS)
//  Microsoft Edge (if using Windows)




}
