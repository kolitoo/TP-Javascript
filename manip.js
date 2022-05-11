function getId(arg) {
    return document.getElementById(arg);
}

let list = ['https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg', 'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_960_720.jpg', 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg', 'https://cdn.pixabay.com/photo/2022/03/27/11/23/cat-7094808_960_720.jpg', 'https://cdn.pixabay.com/photo/2019/11/08/11/56/cat-4611189_960_720.jpg'];

let list2 = ['img0', 'img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9']

list2.forEach(function (img) {
    getId(img).addEventListener('click', function () {
        getId('affiche').src = list[list2.indexOf(img)];
    })
})

document.addEventListener('DOMContentLoaded', bordure);

function bordure() {
    list2.forEach(function (img) {
        getId(img).classList.add('noir');
        getId(img).classList.remove('rouge');
    })
    switch (getId('affiche').src) {
        case list[0]:
            getId(list2[0]).classList.add('rouge');
            break;
        case list[1]:
            getId(list2[1]).classList.add('rouge');
            break;
        case list[2]:
            getId(list2[2]).classList.add('rouge');
            break;
        case list[3]:
            getId(list2[3]).classList.add('rouge');
            break;
        case list[4]:
            getId(list2[4]).classList.add('rouge');
            break;
        case list[5]:
            getId(list2[5]).classList.add('rouge');
            break;
        case list[6]:
            getId(list2[6]).classList.add('rouge');
            break;
        case list[7]:
            getId(list2[7]).classList.add('rouge');
            break;
        case list[8]:
            getId(list2[8]).classList.add('rouge');
            break;
        case list[9]:
            getId(list2[9]).classList.add('rouge');
            break;
        default:
    }
    setTimeout(bordure, 500);
}

document.addEventListener('DOMContentLoaded', copiage);

function copiage() {
    getId('ecriture').value = getId('lecture').value;
    setTimeout(copiage, 500);
}

document.addEventListener('DOMContentLoaded', calculage);

function calculage() {
    let resultat = getId('expos').value;
    getId('nbr').innerHTML = resultat;
    getId('carre').innerHTML = resultat * resultat;
    getId('cube').innerHTML = resultat * resultat * resultat;
    setTimeout(calculage, 500);
}

getId('bouge').addEventListener('click', function () {
    switch (getId('cbleu').classList[0]) {
        case 'pos-un':
            getId('cbleu').classList.add('pos-deux');
            getId('cbleu').classList.remove('pos-un');
            break;
        case 'pos-deux':
            getId('cbleu').classList.add('pos-trois');
            getId('cbleu').classList.remove('pos-deux');
            break;
        case 'pos-trois':
            getId('cbleu').classList.add('pos-quatre');
            getId('cbleu').classList.remove('pos-trois');
            break;
        case 'pos-quatre':
            getId('cbleu').classList.add('pos-un');
            getId('cbleu').classList.remove('pos-quatre');
            break;
        default:
    }
})

getId('roul').addEventListener('wheel', function () {
    if (getId('cvert').classList.contains('avance')) {
        switch (getId('cvert').classList[1]) {
            case 'roul-un':
                getId('cvert').classList.add('roul-deux');
                getId('cvert').classList.remove('roul-un');
                break;
            case 'roul-deux':
                getId('cvert').classList.add('roul-trois');
                getId('cvert').classList.remove('roul-deux');
                break;
            case 'roul-trois':
                getId('cvert').classList.add('roul-quatre');
                getId('cvert').classList.remove('roul-trois');
                break;
            case 'roul-quatre':
                getId('cvert').classList.add('roul-cinq');
                getId('cvert').classList.remove('roul-quatre');
                break;
            case 'roul-cinq':
                getId('cvert').classList.add('roul-six');
                getId('cvert').classList.remove('roul-cinq');
                break;
            case 'roul-six':
                getId('cvert').classList.add('roul-cinq');
                getId('cvert').classList.remove('roul-six');
                getId('cvert').classList.remove('avance');
                break;
            default:
        }
    } else {
        switch (getId('cvert').classList[0]) {
            case 'roul-cinq':
                getId('cvert').classList.add('roul-quatre');
                getId('cvert').classList.remove('roul-cinq');
                break;
            case 'roul-quatre':
                getId('cvert').classList.add('roul-trois');
                getId('cvert').classList.remove('roul-quatre');
                break;
            case 'roul-trois':
                getId('cvert').classList.add('roul-deux');
                getId('cvert').classList.remove('roul-trois');
                break;
            case 'roul-deux':
                getId('cvert').classList.add('avance');
                getId('cvert').classList.add('roul-un');
                getId('cvert').classList.remove('roul-deux');
                break;
            default:
        }
    }
})