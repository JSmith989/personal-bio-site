const photos = [
    {
        image: "/images/oliver1.JPG"
    },
    {
        image: "/images/oliver3.JPG"
    },
    {
        image: "/images/oliver2.JPG"
    },
    {
        image: "/images/pennyAndMe_2.png"
    },
    {
        image: "/images/holly1.JPG"
    },
    {
        image: "/images/holly2.JPG"
    },
    {
        image: "/images/columbiaCar.jpg "
    },
    {
        image: "/images/IMG_1122.jpg"
    }
]

const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
  };

  const createPhotoCards = () => {
    let domString = '';


    for(let i=0; i < photos.length; i++){
        domString += `<div class="photo-page">`
        domString +=      `<img src= ${photos[i].image} alt="photo" class="photo-class"/>`
        domString += `</div>`
        }
       
    printToDom('photography', domString)
};

const init1 = () => {
    createPhotoCards();
};

init1();