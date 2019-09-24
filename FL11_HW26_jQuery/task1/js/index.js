 $("body").css({"padding" : "30px"});
 $("#title").css({"margin-top" : "0", "text-align": "center"});
 $("header+div").css({"border": "3px double black", "padding": "20px"});
 $("h2").css({"color": "blue", "margin": "0"});
 $(".list").children().css({"font-size": "18px"});

 $('#list-1 > li:hidden:not(.cloned)').show();
 $('#list-1').children(':empty').hide();

 const $list3 = $("#list-3");
 $list3.children(':even').css({"margin-left": "-20px"});
 $list3.children(':first').css({"color": "grey"});
 $list3.children(':gt(5)').css({"color": "#ccc"});

 $('ul:parent').show();
 $("li:has('em')").css({"color": "red"});
 $("li:contains('Buratino')").css({"font-weight": "bold"});

 $("p b:only-child").css({"font-size": "36px"});
 $("p em:last-of-type").css({"color": "green"});

 $("input[name$='age']").css({"width": "80px"});
 $("input[name^='my']").css({"width": "120px"});
 console.log($( "input:checked" ));
 $("img[src*='cat']").show();

 $(".mbox:eq(3)").css({"padding-top": "50px"});
 $("img").first().css({"float":"left", "border": "1px solid red"});
