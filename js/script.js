
document.addEventListener("DOMContentLoaded", function () {
   /* Main-block__image movement */
   window.addEventListener('scroll', function () {
      var scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

      document.getElementById('bgImage').style.transform = 'translateX(' + (+scrollY) + 'px)';
   });



   /* main-block__button Scroll */
   document.getElementById('main-block__button_link').onclick = function () {
      document.getElementById('section__cars').scrollIntoView({ behavior: 'smooth' });
   }

   /* car__button scroll to order */
   let buttons = document.getElementsByClassName('car__buttons');
   for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function () {
         document.getElementById('section__order').scrollIntoView({ behavior: 'smooth' });
      }
   }

   /* order__inputs */
   document.getElementById('order__buttons_id').onclick = function () {
      if (document.getElementById('name').value === '') {
         alert("Заполните поле имя");
      } else if (document.getElementById('tel').value === '') {
         alert("Заполните поле телефон");
      } else if (document.getElementById('car').value === '') {
         alert("Заполните поле автомобиль");
      } else {
         alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!")
      }
   }

});



/* Rolls */
document.addEventListener("DOMContentLoaded", function () {
   let layer = document.querySelector('.order__image');
   document.addEventListener('mousemove', (event) => {
      layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.4) / 6) + 'px,0px)';
   });
});


/* nav__buttons scroll */
document.getElementById('nav__home').addEventListener('click', function (event) {
   event.preventDefault(); // Предотвращаем перенаправление по ссылке
   document.getElementById('section__main').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('nav__car').addEventListener('click', function (event) {
   event.preventDefault(); // Предотвращаем перенаправление по ссылке
   document.getElementById('section__cars').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('nav__order').addEventListener('click', function (event) {
   event.preventDefault(); // Предотвращаем перенаправление по ссылке
   document.getElementById('section__order').scrollIntoView({ behavior: 'smooth' });
});

