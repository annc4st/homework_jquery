// /* Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону, 
// потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.
//     <h2 class="head">header1</h2>
//     <h2 class="head">header2 <span class="inner">inner elem1</span></h2>
//     <h2>header3</h2>
//     <h2 class="head">header4<span>inner elem2</span></h2>
//     <h2>header5</h2> */

// // створити оболонку
$(function(){
    $(".btn").on("click", function(){
        console.log("click-click");
    })
// //зробіть для них зелений колір фону,
    $("h2.head").css("background-color", "green");
    // серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.
    $("h2.head>span.inner").css("fontSize", "35px"); // select children of h2


// /* 2 На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://, 
// потрібно додати посиланню атрибут target="_blank". */

if($("a[href^='https']")){
    
    $("a").prop("target", "_blank");
}



// /* 3 Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.
//    <h3>header1</h3>
//    <div>text1</div>
//    <h3>header2</h3>
//    <div>text2</div>*/

/* розвязок */
    // $("div:first").insertBefore("h3:first");
    // $("div:last").insertBefore("h3:last");


    /*4 На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, 
    як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.*/
// $(function () {  

    $("input[type='checkbox']").change(function () {
        let total_checked = $(".checkb:checkbox:checked").length;

        if(total_checked ==3) {
            $(this).prop("checked", false);
            console.log("total checked: " + total_checked)
            $("#display").html(" You have reached your maximum limit " );

        } else {
            $("#display").html("Total Number of checkbox checked  = " + total_checked);
        }

    });
}) 
 