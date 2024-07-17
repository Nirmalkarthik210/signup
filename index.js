function validation(){
    let value=document.forms["validate"]["Fname","Gender","Username","Password","Mobnum"].value;
    if(value==""){
        window.alert("please fill in all the fields")
        return false
    }
}
console.log('nirmal')