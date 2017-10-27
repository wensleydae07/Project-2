document.addEventListener('click',function(){
    let input = document.getElementById('field_input').value;
    if(input != ""){
        let testCount = 0;
        if(localStorage.getItem('test-count') == null){
            localStorage.setItem('test-count',0);  
            testCount = 0;   
        }
        else{
            testCount = localStorage.getItem('test-count');   
        }

        localStorage.setItem('test-'+((testCount*1)+1),input);
        localStorage.setItem('test-count',((testCount*1)+1));
        console.log("proceed");

        let testCountNumber = (testCount*1)+1;
        let content = "";
        for(let a = 1;a<=testCountNumber;a++){
            content += "<li>"+localStorage.getItem('test-'+a)+"</li>";
            ;
        }

        document.getElementById('display_list').innerHTML = content;   
        document.getElementById('field_input').value = "";   
    }
});
