'use strict';

function hello(){
    console.log("result.jsの中のhello");
    const snack = document.getElementById("count").value;
    console.log(snack);
    const months = document.getElementById("month").value;
    console.log(months);
    const cal = Number(snack) * 299 * Number(months) *30;
    const kg = Number(cal) / 7200;
    console.log(kg);

    if(kg<=5){
        console.log("痩せる");
        window.location.href = 'resultNoprobrem.html?kg='+kg.toString()+'&month='+months.toString();
  
    }else if(kg>5 && kg<=10){
        console.log("普通");
        window.location.href = 'resultLittlefat.html?kg='+kg.toString()+'&month='+months.toString();
    }else if(kg>10){
        console.log("デブ");
        window.location.href = 'resultFat.html?kg='+kg.toString()+'&month='+months.toString();
    }

}


