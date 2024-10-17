let headerLi = document.querySelectorAll("header ul li");
let headerLiA = document.querySelectorAll("header ul li a");


for(let i = 0 ; i < headerLi.length ; i++){
    headerLi[i].onclick = (event) => {

        for(let u = 0 ; u < headerLiA.length ; u++){
            headerLiA[u].classList.remove("active");
        }

        let cv = event.target ;
        cv.classList.toggle("active");
    }
}

