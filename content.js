let savedScrollPosition = null;

document.addEventListener('click', function(e) {
    let target = e.target;

    while (target.tagName !== 'A' && target.parentElement) {
        target = target.parentElement;
    }

    if (target.tagName === 'A' && target.href.indexOf('.html#') !== -1) {
        savedScrollPosition = e.pageY - 10;
        
        let backButton = document.getElementById('scrollBackButton');
        if (backButton) {
            backButton.style.display = 'block';
        } else {
            backButton = document.createElement('button');
            backButton.textContent = 'Go back';
            backButton.id = 'scrollBackButton';
            document.body.appendChild(backButton);
            
            backButton.style.position = 'fixed';
            backButton.style.bottom = '20px';
            backButton.style.left = '20px';
            
            backButton.addEventListener('click', function() {
                window.scrollTo(0, savedScrollPosition);
                backButton.style.display = 'none';
            });
        }
    }
});