const data = {
  north: {
    fragment: "Could He be A Teacher",
    prompt: "Write down a truth you wish wasn’t true.\nBurn it. Or bury it. Or fold it into your wallet like a lie.",
  },
  east: {
    fragment: "ThEir LittLe MEssy HOWdy’s Turned tO HELlos Point in YOUr direction",
    prompt: "Notice who is watching you today.\nRespond without words. Then disappear.",
  },
  south: {
    fragment: "GIVE MorE And She wIll Give NoTHing thAT YOU UNDERSTAND",
    prompt: "Tell someone a secret you do not understand yourself.\nLet their confusion become the offering.",
  },
  west: {
    fragment: "Yesterday OUr Color ANoTheR UniverSe Transcends Myth Entirely",
    prompt: "Name a color no one else can see.\nThat is your direction now. Walk toward it.",
  }
};

const visited = {};
const directions = document.querySelectorAll('.direction');
const ritual = document.getElementById('ritual');
const fragment = document.getElementById('fragment');
const prompt = document.getElementById('prompt');
const back = document.getElementById('back');
const final = document.getElementById('finalMessage');

directions.forEach(btn => {
  btn.addEventListener('click', () => {
    const dir = btn.dataset.dir;
    visited[dir] = true;
    fragment.innerText = data[dir].fragment;
    prompt.innerText = data[dir].prompt;
    ritual.style.display = 'flex';

    if (Object.keys(visited).length === 4) {
      setTimeout(() => final.classList.remove('hidden'), 3000);
    }
  });
});

back.addEventListener('click', () => {
  ritual.style.display = 'none';
});
