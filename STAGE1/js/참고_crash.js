	function air_crash(a){
		//a=a;
		//alert(a);
		//alert(opst_left_px+"첫 장애물 좌표 left-margin 좌표"+opst_top_px);
		//alert(opst_left_px1+"두번째 장애물 좌표 left-margin 좌표"+opst_top_px1);
		//alert(opst_left_px2+"세번째 장애물 좌표 left-margin 좌표"+opst_top_px2);
		//alert(opst_left_px3+"네번째 장애물 좌표 left-margin 좌표"+opst_top_px3);
		//alert(opst_left_px3+"다번째 장애물 좌표 left-margin 좌표"+opst_top_px4);
		
		//alert(left_px+"임무 비행기 left-margin 좌표"+top_px);
		var img_airp=document.getElementById("img_airp");
		img_airp.src="/wp-content/uploads/2017/04/aircrash.png";
		clearTimeout(opst_movex_time);
		clearTimeout(opst_movex_time1);
		clearTimeout(opst_movex_time2);
		clearTimeout(opst_movex_time3);
		clearTimeout(opst_movex_time4);
		clearTimeout(opst_movex_time5);
		clearTimeout(game_point_init);
		
		our_airp=our_airp-1;
		
		
		
		game_count=0;
		clearInterval(movex_time);
		clearInterval(movey_time);
		x_on=1;
		y_on=1;
		if(our_airp==0){
			over_game();
		}	
		else {
			setTimeout(start_game,3000);
		}
		
	}	

	function our_airp_inve(){
		if(our_airp==1){
			document.styleSheets[0].rules[10].style.display="none";
			document.styleSheets[0].rules[11].style.display="none";
		}
		else if(our_airp==2){
			document.styleSheets[0].rules[10].style.display="block";
			document.styleSheets[0].rules[11].style.display="none";
		}	
		else if(our_airp==3){
			document.styleSheets[0].rules[10].style.display="block";
			document.styleSheets[0].rules[11].style.display="block";
		}		
	}
	function over_game(){
		div3.style.display="block";
	}