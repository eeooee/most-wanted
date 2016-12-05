/*jshint esversion: 6 */
var persons = [
    {
        "id": 272822514,
        "firstName": "Billy",
        "lastName": "Bob",
        "gender": "male",
        "dob": "1/18/1949",
        "height": 71,
        "weight": 175,
        "eyeColor": "brown",
        "occupation": "programmer",
        "parents": [],
        "currentSpouse": 401222887
    }, {
        "id": 401222887,
        "firstName": "Uma",
        "lastName": "Bob",
        "gender": "female",
        "dob": "4/1/1947",
        "height": 65,
        "weight": 162,
        "eyeColor": "brown",
        "occupation": "assistant",
        "parents": [],
        "currentSpouse": 272822514
    }, {
        "id": 409574486,
        "firstName": "Michael",
        "lastName": "Walkens",
        "gender": "male",
        "dob": "5/9/1951",
        "height": 76,
        "weight": 250,
        "eyeColor": "brown",
        "occupation": "landscaper",
        "parents": [],
        "currentSpouse": 260451248
    }, {
        "id": 260451248,
        "firstName": "Jon",
        "lastName": "Walkens",
        "gender": "male",
        "dob": "9/6/1945",
        "height": 62,
        "weight": 115,
        "eyeColor": "brown",
        "occupation": "assistant",
        "parents": [],
        "currentSpouse": 409574486
    }, {
        "id": 629807187,
        "firstName": "Jack",
        "lastName": "Pafoy",
        "gender": "male",
        "dob": "3/16/1938",
        "height": 70,
        "weight": 207,
        "eyeColor": "black",
        "occupation": "nurse",
        "parents": [],
        "currentSpouse": 464142841
    }, {
        "id": 464142841,
        "firstName": "Jen",
        "lastName": "Pafoy",
        "gender": "female",
        "dob": "4/10/1940",
        "height": 72,
        "weight": 256,
        "eyeColor": "black",
        "occupation": "student",
        "parents": [],
        "currentSpouse": 629807187
    }, {
        "id": 982411429,
        "firstName": "Mister",
        "lastName": "Potatoo",
        "gender": "male",
        "dob": "12/18/1952",
        "height": 66,
        "weight": 170,
        "eyeColor": "hazel",
        "occupation": "architect",
        "parents": [],
        "currentSpouse": 595767575
    }, {
        "id": 595767575,
        "firstName": "Missuz",
        "lastName": "Potatoo",
        "gender": "female",
        "dob": "10/28/1948",
        "height": 59,
        "weight": 137,
        "eyeColor": "blue",
        "occupation": "architect",
        "parents": [],
        "currentSpouse": 982411429
    }, {
        "id": 693243224,
        "firstName": "Joy",
        "lastName": "Madden",
        "gender": "female",
        "dob": "4/20/1939",
        "height": 69,
        "weight": 199,
        "eyeColor": "hazel",
        "occupation": "doctor",
        "parents": [],
        "currentSpouse": null
    }, {
        "id": 888201200,
        "firstName": "Mader",
        "lastName": "Madden",
        "gender": "male",
        "dob": "5/6/1937",
        "height": 76,
        "weight": 205,
        "eyeColor": "black",
        "occupation": "landscaper",
        "parents": [],
        "currentSpouse": null
    }, {
        "id": 878013758,
        "firstName": "Jill",
        "lastName": "Pafoy",
        "gender": "Bob",
        "dob": "2/8/1972",
        "height": 74,
        "weight": 118,
        "eyeColor": "brown",
        "occupation": "programmer",
        "parents": [401222887],
        "currentSpouse": 294874671
    }, {
        "id": 951747547,
        "firstName": "Ralph",
        "lastName": "Bob",
        "gender": "male",
        "dob": "12/23/1969",
        "height": 66,
        "weight": 179,
        "eyeColor": "blue",
        "occupation": "nurse",
        "parents": [401222887],
        "currentSpouse": 159819275
    }, {
        "id": 159819275,
        "firstName": "Jasmine",
        "lastName": "Bob",
        "gender": "female",
        "dob": "12/18/1969",
        "height": 58,
        "weight": 156,
        "eyeColor": "blue",
        "occupation": "assistant",
        "parents": [
            409574486, 260451248
        ],
        "currentSpouse": 951747547
    }, {
        "id": 348457184,
        "firstName": "Annie",
        "lastName": "Pafoy",
        "gender": "female",
        "dob": "11/4/1970",
        "height": 62,
        "weight": 235,
        "eyeColor": "hazel",
        "occupation": "landscaper",
        "parents": [
            629807187, 464142841
        ],
        "currentSpouse": null
    }, {
        "id": 294874671,
        "firstName": "Dave",
        "lastName": "Pafoy",
        "gender": "male",
        "dob": "8/5/1967",
        "height": 61,
        "weight": 112,
        "eyeColor": "green",
        "occupation": "doctor",
        "parents": [
            629807187, 464142841
        ],
        "currentSpouse": 878013758
    }, {
        "id": 931247228,
        "firstName": "Amii",
        "lastName": "Pafoy",
        "gender": "female",
        "dob": "3/13/1963",
        "height": 74,
        "weight": 184,
        "eyeColor": "brown",
        "occupation": "landscaper",
        "parents": [
            629807187, 464142841
        ],
        "currentSpouse": null
    }, {
        "id": 822843554,
        "firstName": "Regina",
        "lastName": "Madden",
        "gender": "female",
        "dob": "7/26/1959",
        "height": 71,
        "weight": 249,
        "eyeColor": "brown",
        "occupation": "nurse",
        "parents": [
            693243224, 888201200
        ],
        "currentSpouse": null
    }, {
        "id": 819168108,
        "firstName": "Hana",
        "lastName": "Madden",
        "gender": "female",
        "dob": "10/7/1953",
        "height": 70,
        "weight": 187,
        "eyeColor": "brown",
        "occupation": "politician",
        "parents": [
            693243224, 888201200
        ],
        "currentSpouse": null
    }, {
        "id": 969837479,
        "firstName": "Eloise",
        "lastName": "Madden",
        "gender": "female",
        "dob": "12/11/1961",
        "height": 63,
        "weight": 241,
        "eyeColor": "brown",
        "occupation": "assistant",
        "parents": [
            693243224, 888201200
        ],
        "currentSpouse": null
    }, {
        "id": 313207561,
        "firstName": "Mattias",
        "lastName": "Madden",
        "gender": "male",
        "dob": "2/19/1966",
        "height": 70,
        "weight": 110,
        "eyeColor": "blue",
        "occupation": "assistant",
        "parents": [
            693243224, 888201200
        ],
        "currentSpouse": 313997561
    }, {
        "id": 313997561,
        "firstName": "Ellen",
        "lastName": "Madden",
        "gender": "female",
        "dob": "2/19/1970",
        "height": 67,
        "weight": 100,
        "eyeColor": "blue",
        "occupation": "doctor",
        "parents": [],
        "currentSpouse": 313207561
    }, {
        "id": 313998000,
        "firstName": "Joey",
        "lastName": "Madden",
        "gender": "female",
        "dob": "2/02/1987",
        "height": 67,
        "weight": 100,
        "eyeColor": "blue",
        "occupation": "doctor",
        "parents": [
            313207561, 313997561
        ],
        "currentSpouse": null
    }
];
const start = (objects) => {
    let inputNumber = "1";
    //let inputNumber = prompt("SELECT A NUMBER\n1. Search by first and last name.\n2. Search by characteristics of the person.\n3. Exit");
    switch (inputNumber) {
        case "1":
            let name = "Mattias Madden".split(' ');
            //let name = 'Ralph Bob'.split(' ');
            //let name = "Joy Madden".split(' ');
            let person = matchingFirstName(name[0], matchingLastName(name[1], objects));
            getInput(person[0], objects);
            //console.log(person);
            //name = prompt("Enter a first and last name to search.").split(" ");
            break;
        case "2":
            //let traits = prompt("Please type your search terms, separated by commas:\n");
            break;
        case "3":
            alert("You have exited the most-wanted search.");
            exit();
            break;
        default:
            alert("Invalid Selection!");
            break;
    }
    //start();
};
const getInput = (object, objects) => {
    let inputNumber = '2';
    //let inputNumber = prompt("SELECT A NUMBER:\r\n1. Find Descendants\r\n2. Find Immediate Family\r\n3. Find Next of Kin\r\n4. Search Again");
    switch (inputNumber) {
        case '1':
            console.log(getDescendants(object, objects, matchingChildren));
            //responder(getDescendants(object));
            break;
        case '2':
            console.log(getFamily(object, objects, objectParents, matchingParents, matchingSpouse, matchingChildren, excludeMatchingObject));
            //responder(family(person));
            break;
        case '3':
            break;
        case '4':
            start();
            break;
        default:
            alert("Invalid Selection!");
            break;
    }
};
const responder = (object) => console.log(object); //alert(object);
const exit = () => window.exit();
// const matchingGender = (element, object) => object.gender === element;
// const matchingHeight = (element, object) => object.height === element;
// const matchingWeight = (element, object) => object.weight === element;
// const matchingEyeColor = (element, object) => object.eyeColor === element;
// const matchingOccupation = (element, object) => object.occupation === element;
// const matchingParentId = (element, object) => object === element;
const matchingLastName = (element, objects) => objects.filter(o => o.lastName === element);
const matchingFirstName = (element, objects) => objects.filter(o => o.firstName === element);
const objectParents = object => object.parents;
const onlyFirstAndLast = object => object.firstName + ' ' + object.lastName;
const matchingParents = (parents, objects) => {
    if (parents.length <= 0) {
        return [];
    }
    if (parents.length == 1) {
        return objects.filter(o => o.parents[0] === parents[0]);
    }
    return objects.filter(o => o.parents[0] === parents[0] || o.parents[0] === parents[1] || o.parents[1] === parents[0] || o.parents[1] === parents[1]);
};
const matchingSpouse = (object, objects) => objects.filter(o => o.id === object.currentSpouse);
const matchingChildren = (object, objects) => objects.filter(o => o.parents[0] === object.id || o.parents[1] === object.id);
const excludeMatchingObject = (object, objects) => objects.filter(o => o !== object);
const getDescendants = (object, objects, findChildren, allDescendants = []) => {
    let children = findChildren(object, objects);
    if (children.length <= 0) {
        return [];
    }
    children.forEach(child => allDescendants.push(child));
    children.forEach(child => getDescendants(child, objects, findChildren, allDescendants));
    return allDescendants;
};
const getFamily = (object, objects, findParents, findSiblings, findSpouse, findChildren, findExclude) => {
    let allFamilyMembers = [];
    allFamilyMembers.parents = findParents(object);
    allFamilyMembers.siblings = findSiblings(findParents(object), findExclude(object, objects));
    allFamilyMembers.spouse = findSpouse(object, objects);
    allFamilyMembers.children = findChildren(object, objects);
    return allFamilyMembers;
};
const getNextOfKin = (object, objects, nextOfKin = []) => {
    let children = blah;
};
start(persons);
