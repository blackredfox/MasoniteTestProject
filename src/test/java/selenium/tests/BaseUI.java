package selenium.tests;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import selenium.pages.*;

public class BaseUI {
    WebDriver driver;
    WebDriverWait wait;
    MainPage mainPage;
    CheckoutPage checkoutPage;
    FinalReceiptPage finalReceiptPage;
    ShoppingCartPage shoppingCartPage;

enum Browsers{
    FIREFOX, CHROME, EDGE
}

Browsers currentBrowser = Browsers.FIREFOX;

    @BeforeEach
    public void setup() {
        switch (currentBrowser){
            case CHROME:
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
                break;
            case FIREFOX:
                WebDriverManager.firefoxdriver().setup();
                driver = new FirefoxDriver();
                break;
            case EDGE:
                WebDriverManager.edgedriver().setup();
                driver = new EdgeDriver();
                break;
        }

        wait = new WebDriverWait(driver, 20);
        mainPage = new MainPage(driver, wait);
        shoppingCartPage = new ShoppingCartPage(driver, wait);
        checkoutPage = new CheckoutPage(driver, wait);
        finalReceiptPage = new FinalReceiptPage(driver, wait);
        driver.manage().window().maximize();
        driver.get(Data.mainURL);
    }

    @AfterEach
    public void afterActions() {
        driver.quit();
    }
}
