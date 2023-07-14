const imgs = document.querySelectorAll('.col > div');

// the idea is to observe the visible elements with threshold = 0
// then the other elements with thershold = 0.4 

let disconnect = false;
const initialObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, idx) => {
        if (entry.isIntersecting) { // the elements of the firs row 
            entry.target.classList.add(`show-${idx + 1}`);
            disconnect = true;
        }
    })
    if (disconnect) {
        initialObserver.disconnect();
        imgs.forEach(img => observer.observe(img));
    }
})

const options = {
    threshold: 0.2,
}

const cb = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }

    })
}

const observer = new IntersectionObserver(cb, options)

imgs.forEach(img => initialObserver.observe(img));