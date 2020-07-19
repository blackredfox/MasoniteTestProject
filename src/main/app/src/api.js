const listOfFlavors = [
    {
        "name":"Banana Pudding",
        "description":"Fruity",
        "price": 2.00,
        "color":{
            "primary": "#FFD684",
            "secondary": "#C58C3E"
        },
        "allergens": [
            "Eggs",
            "Milk",
            "Soy",
            "Wheat"
        ],
        "labels": [
            "nut-free"
        ],
        "ingredients":[
            "Milk",
            "Cream",
            "Sugar",
            "Banana Variegate (Sugar, Banana Puree, Water, Cream Modified Food Starch [Corn], Nonfat Dry Milk, Natural Flavor, Malic Acid, Potassium Sorbate [Preservative], Annatto [Color])",
            "Vanilla Wafers (Enriched Flour [Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid], Sugar, Soybean and Palm Oil with TBHQ for Freshness, Salt, High Fructose Corn Syrup, Leavening [Baking Soda, Monocalcium Phosphate], Butter [Cream, Salt], Soy Lecithin, Natural and Artificial Vanilla Flavor)",
            "French Custard Base (Corn Syrup, High Fructose Corn Syrup, Egg Yolks, Sugar, Water, Natural Flavor, Sodium Benzoate and Potassium Sorbate [Preservatives], Annatto and Turmeric Extractives [Color])",
            "Corn Syrup",
            "Stabilizer (Carob Bean Gum, Guar Gum)",
            "Natural Banana Flavor"
        ]
    },
    {
        "name":"Chocolate",
        "description":"Chocolatey",
        "price": 2.00,
        "color":{
            "primary": "#49291C",
            "secondary": "#C29F7E"
        },
        "allergens": [
            "Eggs",
            "Milk",
        ],
        "labels": [
            "gluten-free",
            "nut-free"
        ],
        "ingredients":[
            "Cream",
            "Skim Milk",
            "Cane Sugar",
            "Cocoa Processed With Alkali",
            "Egg Yolks"
        ]
    },
    {
        "name":"Cookies and Cream",
        "description":"Perfectly Balanced",
        "price": 2.00,
        "color":{
            "primary": "#F5F5F5",
            "secondary": "#2B2625"
        },
        "allergens": [
            "Eggs",
            "Milk",
            "Wheat"
        ],
        "labels": [
            "nut-free"
        ],
        "ingredients":[
            "Cream",
            "Skim Milk",
            "Sugar",
            "Egg Yolks",
            "Vanilla Extract",
            "Wheat Flour",
            "Sugar",
            "Coconut Oil",
            "Soda",
            "Cocoa Processed With Alkali",
            "Baking Chocolate",
            "Salt"
        ]
    },
    {
        "name":"Mint Chocolate Chip",
        "description":"Minty Fresh",
        "price": 2.00,
        "color":{
            "primary": "#57C4C9",
            "secondary": "#362123"
        },
        "allergens": [
            "Eggs",
            "Milk",
            "Soy"
        ],
        "labels": [
            "gluten-free",
            "nut-free"
        ],
        "ingredients":[
            "Cream",
            "Skim Milk",
            "Sugar",
            "Lactose Reduced Skim Milk",
            "Corn Syrup",
            "Egg Yolks",
            "Coconut Oil",
            "Cocoa Powder",
            "Butter Oil",
            "Soy Lecithin",
            "Natural Flavor",
            "Salt",
            "Milk"
        ]
    },
    {
        "name":"Peanut Butter Cup",
        "description":"Sweet and Salty",
        "price": 2.00,
        "color":{
            "primary": "#B27442",
            "secondary": "#473521"
        },
        "allergens": [
            "Eggs",
            "Milk",
            "Soy",
            "Peanuts",
            "Tree Nuts",
            "Wheat"
        ],
        "labels": [],
        "ingredients":[
            "Cream",
            "Skim Milk",
            "Liquid Sugar (Sugar, Water)",
            "Water",
            "Peanuts",
            "Sugar",
            "Coconut Oil",
            "Egg Yolks",
            "Partially Defatted Peanut Flour",
            "Peanut Oil",
            "Milk",
            "Cocoa (Processed With Alkali)",
            "Salt",
            "Guar Gum",
            "Cocoa",
            "Natural Flavor",
            "Soy Lecithin",
            "Vanilla Extract",
            "Carrageenan"
        ]
    },
    {
        "name":"Rocky Road",
        "description":"Chunky",
        "price": 2.00,
        "color":{
            "primary": "#D2C4A8",
            "secondary": "#765137"
        },
        "allergens": [
            "Almond",
            "Eggs",
            "Milk",
        ],
        "labels": [
            "gluten-free"
        ],
        "ingredients":[
            "Cream",
            "Skim Milk",
            "Sugar",
            "Corn Syrup",
            "Almonds",
            "Cocoa Processed With Alkali",
            "Egg Yolks",
            "Corn Starch",
            "Safflower Oil",
            "Egg Whites",
            "Cream Of Tartar",
            "Salt",
            "Pectin",
            "Natural Flavor"
        ]
    },
    {
        "name":"Salted Caramel",
        "description":"Sweet and Salty",
        "price": 2.00,
        "color":{
            "primary": "#F0EEEB",
            "secondary": "#C79D72"
        },
        "allergens": [
            "Eggs",
            "Milk",
            "Soy",
            "Wheat"
        ],
        "labels": [],
        "ingredients":[
            "Cream",
            "Skim Milk",
            "Liquid Sugar (Sugar, Water)",
            "Water",
            "Brown Sugar",
            "Sugar",
            "Milk",
            "Wheat Flour",
            "Egg Yolks",
            "Corn Syrup",
            "Eggs",
            "Butter (Cream, Salt)",
            "Butteroil",
            "Pectin",
            "Sea Salt",
            "Soybean Oil",
            "Vanilla Extract",
            "Guar Gum",
            "Soy Lecithin",
            "Baking Powder (Sodium Acid Pyrophosphate, Sodium Bicarbonate, Corn Starch, Monocalcium Phosphate)",
            "Baking Soda",
            "Salt",
            "Carrageenan",
            "Lactase"
        ]
    },
    {
        "name":"Strawberry",
        "description":"Fruity",
        "price": 2.00,
        "color":{
            "primary": "#FFC4C4",
            "secondary": "#F2594F"
        },
        "allergens": [
            "Eggs",
            "Milk",
        ],
        "labels": [
            "gluten-free",
            "nut-free"
        ],
        "ingredients":[
            "Cream",
            "Skim Milk",
            "Strawberries",
            "Cane Sugar",
            "Egg Yolks"
        ]
    },
    {
        "name":"Vanilla",
        "description":"Plain",
        "price": 2.00,
        "color":{
            "primary": "#F5F5F5",
            "secondary": "#B59A72"
        },
        "allergens": [
            "Eggs",
            "Milk",
        ],
        "labels": [
            "gluten-free",
            "nut-free"
        ],
        "ingredients":[
            "Cream",
            "Skim Milk",
            "Cane Sugar",
            "Egg Yolks",
            "Vanilla Extract"
        ]
    },
    {
        "name":"Butter Pecan",
        "description":"Buttery and Nutty",
        "price": 2.00,
        "color":{
            "primary": "#E6E3DA",
            "secondary": "#F36922"
        },
        "allergens": [
            "Eggs",
            "Milk",
            "Pecan",
        ],
        "labels": [
            "gluten-free"
        ],
        "ingredients":[
            "Cream",
            "Skim Milk",
            "Sugar",
            "Pecans",
            "Lactose Reduced Skim Milk",
            "Corn Syrup",
            "Egg Yolks",
            "Coconut Oil",
            "Salt",
            "Butter (Cream, Salt)",
            "Vanilla Extract"
        ]
    },
    {
        "name":"Pistachio",
        "description":"Nutty and Creamy",
        "price": 2.00,
        "color":{
            "primary": "#AAD255",
            "secondary": "#272727"
        },
        "allergens": [
            "Eggs",
            "Milk",
            "Pistachio"
        ],
        "labels": [
            "gluten-free"
        ],
        "ingredients":[
            "Cream",
            "Skim Milk",
            "Sugar",
            "Pistachios",
            "Lactose Reduced Skim Milk",
            "Corn Syrup",
            "Egg Yolks",
            "Salt",
            "Safflower Oil"
        ]
    },
    {
        "name":"Rum Raisin",
        "description":"Strong and Sweet",
        "price": 2.00,
        "color":{
            "primary": "#F3B32A",
            "secondary": "#702137"
        },
        "allergens": [
            "Eggs",
            "Milk"
        ],
        "labels": [
            "gluten-free",
            "nut-free"
        ],
        "ingredients":[
            "Cream",
            "Skim Milk",
            "Cane Sugar",
            "Egg Yolks",
            "Rum",
            "Raisins",
            "Water"
        ]
    },
    {
        "name":"Mango Sorbet",
        "description":"Fruity and Creamy",
        "price": 2.00,
        "color":{
            "primary": "#F7B01A",
            "secondary": "#311313"
        },
        "allergens": [],
        "labels": [
            "gluten-free",
            "dairy-free",
            "nut-free"
        ],
        "ingredients":[
            "Water",
            "Sugar",
            "Mango Puree",
            "Natural Flavor",
            "Carrot Juice Concentrate (For Color)",
            "Lemon Juice Concentrate",
            "Pumpkin Juice Concentrate (For Color)",
            "Pectin"
        ]
    },
    {
        "name":"Lemon Sorbet",
        "description":"Fruity and Tart",
        "price": 2.00,
        "color":{
            "primary": "#F0D64D",
            "secondary": "#477EA9"
        },
        "allergens":[],
        "labels": [
            "gluten-free",
            "dairy-free",
            "nut-free"
        ],
        "ingredients":[
            "Water",
            "Sugar",
            "Corn Syrup",
            "Lemon Juice Concentrate",
            "Pectin",
            "Natural Flavor",
            "Citric Acid"
        ]
    },
];

function getFlavors(filter) {
    return listOfFlavors.filter((flavor) => flavor.name.toLowerCase().includes(filter.toLowerCase()));
}

export default getFlavors;