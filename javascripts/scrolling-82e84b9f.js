var items=["Fullstack Developer","Frontend Developer","Ruby on Rails","PHP Developer","Web Design"];setInterval(function(){var e=items[Math.floor(Math.random()*items.length)];$("#scrolling_titles").attr("placeholder",e)},2e3);