const $upload = document.getElementById("upload")
const $dropDownUpload = document.getElementById("dropMenu-upload")
const $body = document.getElementById("bodyClick")
const $bell=document.getElementById("notificationBell")
const $notificationBox=document.getElementById("notificationBox")
const $userData=document.getElementById("userData");
const $arrowTurn=document.getElementById("arrowTurn");
const $showUserData=document.getElementById("showUserData");
const $aboutMenu=document.getElementById("aboutMenu");
const $aboutList=document.getElementById("aboutBoxList");

const $burgerButton = document.getElementById("hamburgerButton");
const $burgerMenu=document.getElementById("hamburgerMenu")
let menuOpen= false;

const $moreList = document.getElementById("moreButton")
const $subMenuArrow= document.getElementById("submenu-arrowTurn");

$upload.addEventListener("click",()=>{
    $upload.classList.toggle('active');
    $dropDownUpload.classList.toggle('showList');    

    $userData.classList.remove("active");
    $arrowTurn.classList.remove("turn")
    $showUserData.classList.remove("showList")
    $aboutMenu.classList.remove('active');
    $aboutList.classList.remove('showList');
    $bell.classList.remove("active");
    $notificationBox.classList.remove("showList")
})

$bell.addEventListener('click',()=>{
    $upload.classList.remove("active");
    $dropDownUpload.classList.remove("showList");

    $userData.classList.remove("active");
    $arrowTurn.classList.remove("turn");
    $showUserData.classList.remove("showList")
    $aboutMenu.classList.remove('active');
    $aboutList.classList.remove('showList');

    $bell.classList.toggle("active");
    $notificationBox.classList.toggle("showList")
})

$userData.addEventListener('click', ()=>{
    $upload.classList.remove("active");
    $dropDownUpload.classList.remove("showList");
    $bell.classList.remove("active");
    $notificationBox.classList.remove("showList");
    $aboutMenu.classList.remove('active');
    $aboutList.classList.remove('showList');

    $userData.classList.toggle("active");
    $arrowTurn.classList.toggle("turn")
    $showUserData.classList.toggle("showList")
})

$aboutMenu.addEventListener("click", ()=>{
    $upload.classList.remove("active");
    $dropDownUpload.classList.remove("showList");
    $bell.classList.remove("active");
    $notificationBox.classList.remove("showList");
    $userData.classList.remove("active");
    $arrowTurn.classList.remove("turn")
    $showUserData.classList.remove("showList")

    $aboutMenu.classList.toggle('active');
    $aboutList.classList.toggle('showList');
})
$moreList.addEventListener('click',()=>{
    $moreList.classList.toggle("active")
    $subMenuArrow.classList.toggle("turn");
})

$burgerButton.addEventListener("click", function(){
    if(!menuOpen){
        $burgerButton.classList.add("open");
        $burgerMenu.classList.add("open");
        menuOpen = true;
    }else{
        $burgerButton.classList.remove("open");
        $burgerMenu.classList.remove("open");
        menuOpen=false;
    }
})

