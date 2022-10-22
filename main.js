const item = document.querySelector('.item');
const places = document.querySelectorAll('.placeholder');

item.addEventListener(
    'dragstart', (e) => {
        e.target.classList.add('hold');
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
    }
);

item.addEventListener(
    'dragend', (e) => {
        e.target.classList.remove('hold', 'hide');
    }
);

places.forEach(place => {
    place.addEventListener('dragover', dragover);
    place.addEventListener('dragenter', dragenter);
    place.addEventListener('dragleave', dragleave);
    place.addEventListener('drop', dragdrop);
});

function dragover (e) {
    e.preventDefault();

}
function dragenter (e) {
    e.target.classList.add('hovered');
}
function dragleave (e) {
   e.target.classList.remove('hovered');
}
function dragdrop (e) {
    e.target.append(item);
   e.target.classList.remove('hovered');
}