(() => {
	const searchInput = document.getElementById('resource-search');
	const cards = Array.from(document.querySelectorAll('.resource-card'));
	const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
	const visibleCount = document.getElementById('visible-count');
	const emptyState = document.getElementById('empty-state');
	const toast = document.getElementById('provisional-toast');
	const copyFeedback = document.getElementById('copy-feedback');
	let activeFilter = 'all';
	let toastTimeout;
	let copyFeedbackTimeout;

	function updateCards() {
		const query = searchInput ? searchInput.value.trim().toLocaleLowerCase('pt-PT') : '';
		let visible = 0;

		cards.forEach((card) => {
			const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
			const searchableText = `${card.dataset.search} ${card.textContent}`.toLocaleLowerCase('pt-PT');
			const matchesQuery = !query || searchableText.includes(query);
			const shouldShow = matchesCategory && matchesQuery;

			card.hidden = !shouldShow;
			if (shouldShow) visible += 1;
		});

		if (visibleCount) visibleCount.textContent = String(visible);
		if (emptyState) emptyState.hidden = visible !== 0;
	}

	if (searchInput) {
		searchInput.addEventListener('input', updateCards);
	}

	filterButtons.forEach((button) => {
		button.addEventListener('click', () => {
			activeFilter = button.dataset.filter;
			filterButtons.forEach((filterButton) => {
				const isActive = filterButton === button;
				filterButton.classList.toggle('is-active', isActive);
				filterButton.setAttribute('aria-pressed', String(isActive));
			});
			updateCards();
		});
	});

	document.addEventListener('keydown', (event) => {
		if (searchInput && event.key === '/' && document.activeElement !== searchInput) {
			event.preventDefault();
			searchInput.focus();
		}
	});

	document.addEventListener('click', (event) => {
		const provisionalLink = event.target.closest('a[data-provisional]');
		if (!provisionalLink) return;

		event.preventDefault();
		if (!toast) return;
		toast.hidden = false;
		window.clearTimeout(toastTimeout);
		toastTimeout = window.setTimeout(() => {
			toast.hidden = true;
		}, 3500);
	});

	document.addEventListener('click', async (event) => {
		const copyButton = event.target.closest('[data-copy-link]');
		if (!copyButton || !copyFeedback) return;

		const serverAddress = copyButton.dataset.copyLink;
		try {
			await navigator.clipboard.writeText(serverAddress);
			copyFeedback.textContent = `Endereço do servidor copiado: ${serverAddress}`;
		} catch {
			copyFeedback.textContent = `Não foi possível copiar automaticamente. Copia manualmente: ${serverAddress}`;
		}

		copyFeedback.hidden = false;
		window.clearTimeout(copyFeedbackTimeout);
		copyFeedbackTimeout = window.setTimeout(() => {
			copyFeedback.hidden = true;
		}, 6000);
	});
})();
