document.addEventListener('DOMContentLoaded', () => {
    let stars = document.querySelectorAll(".reviewStars span"); // yıldız ikonları. 5 elemanı olan array'dir.
    stars.forEach(item => { // herbir span için
        item.addEventListener('click', function(){ // click event'i ekle ve aşağıdakileri uygula

            let rating = this.getAttribute("value"), // this burada item oluyor yani span
                emoji = document.querySelector(".review__emoji"),
                title = document.querySelector(".review__title");

            setTimeout(() => { // gecikme ver

                title.classList.add("animate"); // css animate class'ını ekler ve animasyon çalışır
                emoji.classList.add("animate"); // css animate class'ını ekler ve animasyon çalışır.

                if(rating <= 2 && rating > 0) { // click'lenen span'ın value'su için;
                    title.innerHTML = "bad"; // başlık yazısını değiştir
                    emoji.innerHTML = "&#128545"; // emoji'yi değiştir
                }else if(rating <= 4 && rating > 2) {
                    title.innerHTML = "good"; // başlık yazısını değiştir
                    emoji.innerHTML = "&#128512"; // emoji'yi değiştir
                }else if(rating == 5){
                    title.innerHTML = "best"; // başlık yazısını değiştir
                    emoji.innerHTML = "&#128525"; // emoji'yi değiştir
                }
            }, 50);

            title.classList.remove("animate"); // bunları yapmazsam ilk tıklamada animate class'ı yerleştiği için
            emoji.classList.remove("animate"); // sonraki tıklamalarda animasyonlar çalışmıyor.

            return SetRatingStar(rating, stars); // herbir tıklama event'ı sonrasında SetRatingStar fonksiyonuna parametre gönder
                                                 // rating span'ın value değeri, stars ise tüm spanları tutan array.   
        })
    })
})

function SetRatingStar(rating, stars){
    let len = stars.length; // stars; spanları tutan array ve uzunluğu 5
  
    for(var i = 0; i < len; i++){
        if(i<rating){ // döngünün tıkladığım span'ın value değerine kadar olan kısmı için bunu yap
            
            stars[i].style.color = '#ffd32a'; // value değerine kadar olan span elemenlerinin rengini değiştir.

        }else{ // döngüde geri kalan spanlara da bunu yap. yani eski halini uygula. Eğer bu yapılmazsa 4 yıldızdan sonra 3 yıldız 
                // verilirse 4.span yine sarı renkte kalır. ilk haline dönmez.
           
            stars[i].style.color = '#c8c8c8';
        }
    }

}
