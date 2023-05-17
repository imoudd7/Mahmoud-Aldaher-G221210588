const kedi_btn = document.getElementById('kedi_btn');
const köpek_btn = document.getElementById('köpek_btn');
const kedi_sonucu = document.getElementById('kedi_sonucu');
const köpek_sonucu = document.getElementById('köpek_sonucu');

kedi_btn.addEventListener('click', getRandomCat);
köpek_btn.addEventListener('click', getRandomDog);

function getRandomCat() {
  fetch('https://aws.random.cat/meow').
  then(res => res.json()).
  then(data => {
    kedi_sonucu.innerHTML = `<img src=${data.file} alt="cat" />`;
  });
}

function getRandomDog() {
  fetch('https://random.dog/woof.json').
  then(res => res.json()).
  then(data => {
    if (data.url.includes('.mp4')) {
      getRandomDog();
    } else
    {
      köpek_sonucu.innerHTML = `<img src=${data.url} alt="dog" />`;
    }
  });
}

    