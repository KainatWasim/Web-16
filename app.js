var proData = [
    {
        programmingName:"C Programming",
        proImg:"https://static.vecteezy.com/system/resources/thumbnails/012/830/355/small_2x/c-sharp-programming-language-source-code-example-on-monitor-c-sharp-source-code-photo.jpg",
        proBio:"C is a powerful and general-purpose programming language developed by Dennis Ritchie in 1972. It is widely used to create operating systems and various applications. C is also known as the mother of all programming languages because many modern languages are based on it."
    },
    {
        programmingName:"Python",
        proImg:"https://thumbs.dreamstime.com/b/intricate-python-code-displayed-screen-362203536.jpg",
        proBio:"Python is a high-level and easy-to-learn programming language created by Guido van Rossum in 1991. It is used for web development, data science, artificial intelligence, and automation. Python is popular because of its simple syntax and powerful libraries that make coding faster and easier.",
    },
    {
        programmingName:"Java",
        proImg:"https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amF2YSUyMHByb2dyYW1taW5nfGVufDB8fDB8fHww",
        proBio:"Java is a high-level, object-oriented programming language developed by James Gosling in 1995. It is widely used for building desktop, web, and mobile applications. Java is famous for its “write once, run anywhere” feature, meaning the same code can run on any device that supports Java.",
    },
    {
       programmingName:"javaScript",
        proImg:"https://zinduaschool.com/wp-content/uploads/sites/2/2025/04/close-up-of-colorful-programming-code-on-a-computer-screen-showcasing-digital-technology.-4816921-scaled.jpg",
        proBio:" JavaScript is a lightweight, high-level programming language mainly used to make websites interactive and dynamic. It runs directly in web browsers and controls website elements like buttons, sliders, and animations. JavaScript is an essential part of web development along with HTML and CSS. ",
    },
    {
        programmingName:"PHP Programming",
        proImg:"https://thumbs.dreamstime.com/b/lines-php-code-screen-close-up-web-developing-site-using-language-yellow-orange-green-coding-dark-blue-background-128870679.jpg",
        proBio:"PHP is a server-side scripting language mainly used for web development. It was created by Rasmus Lerdorf in 1994 and is used to build dynamic and interactive websites. PHP works with databases like MySQL and powers many popular platforms such as WordPress and Facebook. ",
    },
    
]


function showData(index){
    var sliderImg = document.getElementById("sliderImg")
    var programmingName = document.getElementById("programmingName")
    var proBio = document.getElementById("proBio")
    sliderImg.src = proData[index].proImg
    programmingName.textContent = proData[index].programmingName
    proBio.textContent = proData[index].proBio
}



var count = 0


window.onload = function(){
    showData(count)
}


function nextHandler(){
    console.log("next")
    
    if(count>=proData.length -1){
        count=0
    }
    else{
        count++
    }
    showData(count)

}

function previousHander(){
    
    if(count<=0){
        count = proData.length -1
    }
    else{
        count--
    }
    showData(count)

}