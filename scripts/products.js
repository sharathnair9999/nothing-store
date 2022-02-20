

	const filterBtn = document.getElementById('filter-toggle')
	const filterSection = document.querySelector('.filter-section')
	const productList = document.querySelector('.products-list')
	const filterBtnText = document.querySelector('#filter-btn-text')


	filterBtn.addEventListener("click", ()=>{
		filterSection.classList.toggle('show')
		productList.classList.toggle('hide')


		filterSection.classList.contains('show') ? filterBtnText.innerHTML = "Apply" : filterBtnText.innerHTML = "Filter"

	})


