var userName =localStorage.getItem('userName');
var logo =document.getElementById('logo')
console.log(userName);
if (document.getElementById('logo') != null){
    document.getElementById('welcome').innerHTML= 'Welcome ' + localStorage.getItem('userName')
}
logo.addEventListener('click',function(){
    localStorage.removeItem('userName')
})