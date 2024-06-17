
const array1 = []; //একটি array তৈরী করা হলো। 
const array2 = [];//একটি array তৈরী করা হলো। 
const unionArray = []; //একটি array তৈরী করা হলো। for concatination ..
const uniqueArray = [];//একটি array তৈরী করা হলো। for removing the duplicate element..

function createArray() {
    const size = document.getElementById("size").value;
    if (size <= 0) {
        alert("Please enter a valid size.");
        return;
    }


    const elementsDiv = document.getElementById("elements");
    elementsDiv.innerHTML = ''; //না দিলেও হতো , তবুও দিলাম শুধু বুঝতে সুবিধা হবে আমার তাই। 
    for (let i = 0; i < size; i++) { //N সংখ্যক বার loop ঘুরবে ইনপুট নেবার জন্য। 
        elementsDiv.innerHTML += `Enter element : <input type="number" id="element${i}"><br>`;
        //☝যতবার loop ঘুরবে ততগুলো input প্রিন্ট হবে। 
    }

    document.getElementById("arrayElements").style.display = "block";
    //☝Submit ক্লিক করলে createArray ফাংশনের মাধ্যমে "arrayElements" div টি ভিসিবল হবে।   
}

function showArray() {
    //"arrayElements" div টি ভিসিবল হবার পর যখন showArray ক্লিক করা হবে ..
    const size = document.getElementById("size").value;


    for (let i = 0; i < size; i++) {//N সংখ্যক বার loop ঘুরবে ইনপুট নেবার জন্য। 
        const element = document.getElementById(`element${i}`).value; //i সংখ্যক input এর value নেবার জন্য। 
        array1.push(Number(element)); //i সংখ্যক বার i সংখ্যক input এর value array এর মধ্যে push করা হলো। 
    }

    document.getElementById("output").innerText = `[${array1.join(",")}]` //প্রতিটি index কে "," দিয়ে জয়েন করা হলো। 
}
/** LeftBOx End**/



//________________________________




/** RightBOx Start**/
function createArray2() {
    const size = document.getElementById("size2").value;
    if (size <= 0) {
        alert("Please enter a valid size.");
        return;
    }

    const elementsDiv = document.getElementById("elements2");
    elementsDiv.innerHTML = '';
    for (let i = 0; i < size; i++) {//N সংখ্যক বার loop ঘুরবে ইনপুট নেবার জন্য। 
        elementsDiv.innerHTML += `Enter element ${i + 1}: <input type="number" id="element2_${i}"><br>`;
        //☝যতবার loop ঘুরবে ততগুলো input প্রিন্ট হবে। 
    }

    document.getElementById("arrayElements2").style.display = "block";
    //☝Submit ক্লিক করলে createArray ফাংশনের মাধ্যমে "arrayElements" div টি ভিসিবল হবে। 
}

function showArray2() {
    //"arrayElements2" div টি ভিসিবল হবার পর যখন showArray2 ক্লিক করা হবে ..
    const size = document.getElementById("size2").value;


    for (let i = 0; i < size; i++) {//N সংখ্যক বার loop ঘুরবে ইনপুট নেবার জন্য। 
        const element = document.getElementById(`element2_${i}`).value;//i সংখ্যক input এর value নেবার জন্য। 
        array2.push(Number(element));//i সংখ্যক বার i সংখ্যক input এর value array এর মধ্যে push করা হলো। 
    }


    document.getElementById("output2").innerText = `[${array2.join(",")}]`//প্রতিটি index কে "," দিয়ে জয়েন করা হলো। 
}


// union of arry.............

function calculateUnion() {
    function isInArray(array, value) {
        //☝একটি array তে কোনো একটি এলিমেন্ট আছে কিনা তা দেখার জন্য isInArray ফাংশন টি তৈরী করা। 
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (!isInArray(array2, array1[i])) {
            unionArray.push(array1[i]);
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if (!isInArray(unionArray, array2[i])) {
            unionArray.push(array2[i]);
        }
    }

    document.getElementById("unionOutput").innerText = `[${unionArray.join(", ")}]`;
}




