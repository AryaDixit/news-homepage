  // console.log('working....');

  let mobileNav = document.querySelector(".nav-items-mob");
  let hamBurg = document.querySelector(".hamburgsvg");
  let hamClose = document.querySelector(".hamclose");
  let opacMain = document.querySelector(".opac");

  // function showNav() {
  //   var computedStyle = window.getComputedStyle(mobileNav, null);
  //   console.log(computedStyle, "computed styles");
  //   var propertyValue = computedStyle.getPropertyValue('right');
  //   console.log("Mob Nav: ", propertyValue);
  //   if (propertyValue === '-331.2px') {
  //     mobileNav.style.right = 0 ;
  //   } else {
  //     mobileNav.style.right = '-100%';
  //   }
  // }

  hamBurg.addEventListener('click', function(){
      mobileNav.classList.add("active-mob-nav")
      opacMain.classList.add("opac")
  });


  hamClose.addEventListener('click', function(){
    mobileNav.classList.remove("active-mob-nav")
    opacMain.classList.remove("opac")
  });

