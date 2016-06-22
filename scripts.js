
function addClassFuncao(e) {
  
  var thisID= e.attr("id");
  divs  = $('.itemMenuPrincipal');
  for(ind in divs){
    div = divs[ind];
    var currentID = div.id;
    if(currentID != e.id) 
    {
      if(currentID != thisID) 
      {
        div.classList.remove('botaoSelecionado');
      }
    }
}

  if(e.hasClass('botaoSelecionado'))
  {
    e.removeClass('botaoSelecionado');
  }
  else
  {
    e.addClass('botaoSelecionado');
  }  
}

function addClassFuncaoJunto(e, classTem) {
  
  var thisID= e.attr("id");
  divs  = $('.' + classTem);
  for(ind in divs){
    div = divs[ind];
    var currentID = div.id;
    if(currentID != e.id) 
    {
      if(currentID != thisID) 
      {
        div.classList.add('botaoSelecionado');
      }
    }
  }
}

function removeClassFuncaoJunto(e, classTem) {
  
  var thisID= e.attr("id");
  divs  = $('.' + classTem);
  for(ind in divs)
  {
    div = divs[ind];
    var currentID = div.id;
    if(currentID != e.id) 
    {
      if(currentID != thisID) 
      {
        div.classList.remove('botaoSelecionado');
      }
    }
  }
}

function toggle_visibility(id) {
        
       var e = document.getElementById(id);
       if(e.style.display == 'block')
       {
          e.style.display = 'none';
       }
       else
       {
            fechaTudo();
          e.style.display = 'block';      
       }


    }

function fechaTudo() {
    var x = document.getElementsByClassName("menuItem");
    var i;

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}







    // $(document).on('click', 'ul', function () {
//     alert('Cliked');
    
// });

// $(document).ready(function() { 
//   $(window).load(function() { 
//     alert('Page loaded');
//   });
// });


// $(function() {
// $(document).on('click', 'span', function () {
// $(document).load(function () {
//      var pgurl = window.location.href.substr(window.location.href
// .lastIndexOf("#")+1);
//      alert(pgurl);
//      $("nav ul a").each(function(){
//           if($(this).attr("href") == '#' + pgurl)
//             $(this).addClass("testeOi");
//           else
//             $(this).removeClass("testeOi");
//      })
// });