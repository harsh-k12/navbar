//color effect when curser is in it
$(document).ready(() =>{
	
	$(".chatOn").mouseover(() =>{
		$(".chatOn").css("background","orange")
	})
	$(".chatOn").mouseout(() =>{
		$(".chatOn").css("background","khaki")
	})
	
		$(".message").mouseover(() =>{
			$(".message").css("background","orange")
			$(".message").css("font-style","normal")
		})
		$(".message").mouseout(() =>{
			$(".message").css("background","khaki")
			$(".message").css("font-style","italic")
		})
	
			$(".profile").mouseover(() =>{
				$(".profile").css("background","orange")
				$(".profile").css("font-style","normal")
			})
			$(".profile").mouseout(() =>{
				$(".profile").css("background","khaki")
				$(".profile").css("font-style","italic")
			})
	
				$(".chat").mouseover(() =>{
					$(".chat").css("background","orange")
					$(".chat").css("font-style","normal")
				})
				$(".chat").mouseout(() =>{
					$(".chat").css("background","khaki")
					$(".chat").css("font-style","italic")
				})
	
})