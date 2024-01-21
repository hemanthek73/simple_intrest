
    function sicalc(){
      let pamount=document.getElementById('pamount').value;
      let time=document.getElementById('time').value;
      let rintrest=document.getElementById('rintrest').value;
      console.log(pamount);
      let si=document.getElementById('si');
      let simpleIntrest=(pamount*time*rintrest)/100;
      si.innerText=simpleIntrest;
    }
