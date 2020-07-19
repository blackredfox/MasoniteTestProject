package selenium.tests;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import selenium.pages.Data;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class NotSeleniumTests {



    @Test
    public void verifyToppingsAlphabetFromAssignment() {
        String[] expectedValues =  getValuesFromList("DataFiles/" + Data.fileFlavors + ".csv");
        for (int i = 0; i < expectedValues.length-1; i++) {
            // current String is > than the next one (if there are equal list is still sorted)
            if (expectedValues[i].compareToIgnoreCase(expectedValues[i + 1]) > 0) {
                Assertions.fail("List of toppings from assignment is` not listed alphabetically");
            }
        }

    }


    @Test
    public void verifySaucesAlphabetFromAssignment() {
        String[] expectedValues =  getValuesFromList("DataFiles/" + Data.fileSauces + ".csv");
        for (int i = 0; i < expectedValues.length-1; i++) {
            // current String is > than the next one (if there are equal list is still sorted)
            if (expectedValues[i].compareToIgnoreCase(expectedValues[i + 1]) > 0) {
                Assertions.fail("List of sauces from assignment is` not listed alphabetically");
            }
        }

    }




    public String[] getValuesFromList(String nameOfFile){
        System.out.println(this.getClass().getResource(".").getFile());
        String[] expectedValues = null;
        try {
            expectedValues = Files.readAllLines(Paths.get(nameOfFile)).stream().toArray(String[]::new);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return expectedValues;
    }

}
