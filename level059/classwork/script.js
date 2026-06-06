const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const img = document.querySelector('img');

let index = 0;

const urls = [
    "https://tse2.mm.bing.net/th/id/OIP.roHntiwsK2sQ73ICkLPmaAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg",
    "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?cs=srgb&dl=lights-car-vehicle-244206.jpg&fm=jpg",
    "https://tse1.explicit.bing.net/th/id/OIP.T2np1mi9MSaSFrHC9zratQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
];

nextBtn.addEventListener('click', () => {
    index++;

    if(index > urls.length - 1){
        index = 0;
    }

    img.src = urls[index]
});

prevBtn.addEventListener('click', () => {
    index--;

    if(index < 0) {
        index = urls.length - 1;
    }

    img.src = urls[index];
});