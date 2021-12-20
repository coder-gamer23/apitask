let para1 = document.getElementById('para1');
let id1 = document.getElementById('id1');
let id2 = document.getElementById('id2');
let id3 = document.getElementById('id3');
let id4 = document.getElementById('id4');
let para2 = document.getElementById('para2');
let id21 = document.getElementById('id21');
let id22 = document.getElementById('id22');
let id23 = document.getElementById('id23');
let id24 = document.getElementById('id24');
var i;
function getSelectedOption(){
    i=document.getElementsByTagName("select")[0].value;
    i=parseInt(i);
    //return i;
    function test() {
        fetch("https://reqres.in/api/users?page=2")
       .then((res) => { return res.json() })
       .then((result) => {
       id1.value=result.data[i].id;
       id2.value=result.data[i].first_name;
       id3.value=result.data[i].last_name;
       para1.href=result.data[i].avatar;
       id4.value=result.data[i].email;
       }).catch((f) => {
       console.log('error')
       });
       fetch("https://reqres.in/api/unknown")
       .then((res2) => { return res2.json() })
       .then((result2) => {       
      id21.value=result2.data[i].id;
      id22.value=result2.data[i].name;
      id23.value=result2.data[i].year;
      para2.href=result2.support.url;
      id24.value=result2.data[i].color;
     // console.log(result2.data[0].color);
      }).catch((f) => {
      console.log('error')
      });
   }
   
   test();
   
}
getSelectedOption();