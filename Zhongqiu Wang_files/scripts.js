function animateFirst(){
	setTimeout(function(){
		$('#rocket1').animate({
			left: 320+'px',
			top: -136+'px'
		},2000,function(){
			$(this).css({'left':'-1px','top':'88px'});
		});
		window.setTimeout(function(){
			$('header h1').fadeOut('fast',function(){
				$(this).html('<div style="margin-top: 10px;"><span class="one">Quick<br/>Approvals</span><span class="two">Great<br/>Service</span><span class="three">Low<br/>Rates</span></div>');
				$('header h1 span').first().animate({
					opacity:'1'
				},500,function(){
					$(this).next('span').animate({
						opacity:'1'
					},500,function(){
						$(this).next('span').animate({
							opacity:'1'
						},500);
					});
				});
			});
			$('header h2').fadeOut('fast',function(){
				$(this).html('');
			});
			$('header h3').fadeOut('fast',function(){
				$(this).html('');
			});
		},1000);
		window.setTimeout(function(){
			$('header h1, header h2, header h3').fadeIn('fast');
			window.setTimeout(function(){
				animateSecond();
			}, 2300);
		},1100);
	},1300);
}


function animateSecond(){
	$('#rocket2').animate({
		left: 0+'px',
		top: -136+'px'
	},2000,function(){
		$(this).css({'left':'320px','top':'88px'});
	});
	window.setTimeout(function(){
		$('header h1').fadeOut('fast',function(){
			$(this).html('<img style="margin-top:-7px;position:absolute;left:100px;" src="5yearSeal2.png" width="75" alt="5 year rate guarantee" />');
		});
		$('header h2').fadeOut('fast',function(){
			$(this).html('<span style="padding-left:100px;opacity:1;color:#5c2e91;">And, every loan comes with our</span>');
		});
		$('header h3').fadeOut('fast',function(){
			$(this).html('<span style="padding-left:100px;">5-Year Rate Guarantee</span>');
		});
	},1500);
	window.setTimeout(function(){
		$('header h1, header h2, header h3').fadeIn('fast');
		window.setTimeout(function(){
			animateThird();
		}, 2700);
	},1500);
}

function animateThird(){
	$('#rocket3').animate({
		left: 524+'px'
	},1700,function(){
		$(this).css({'left':'-310px'});
	});
	window.setTimeout(function(){
		$('header h1').fadeOut('fast',function(){
			$(this).html('<small style="font-size:22px;">DIRECT IS ALWAYS BETTER</small>');
		});
		$('header h2').fadeOut('fast',function(){
			$(this).html('<small style="font-size:15px;">Go direct to loanDepot for your free personalized mortgage rate.</small>');
		});
		$('header h3').fadeOut('fast',function(){
			$(this).html('');
		});
	},1000);
	window.setTimeout(function(){
		$('header h1, header h2, header h3').fadeIn('fast');
		window.setTimeout(function(){
			$('#replay').fadeIn('slow');
		},1000);
	},1100);
}

$(function() {
	animateFirst();
	$('#replay').on('click',function(){
		$('header h1').fadeOut('fast',function(){
			$(this).html('Getting a home loan?').fadeIn('fast');
		});
		$('header h2').fadeOut('fast',function(){
			$(this).html('loanDepot offers...').fadeIn('fast');
		});
		$('header h3').fadeOut('fast',function(){
			$(this).html('');
		});
		$(this).fadeOut('fast');
		animateFirst();
	});
});