/*
    Дан произвольный url -
    https://purpleshool.ru/course/javascript
    Нужно сделать функцию, которая выводит в консоль:
    - Протокол (https)
    - Доменное имя (purpleshool.ru)
    - Путь внутри сайта (/course/javascript)
*/

const url = 'https://purpleshool.ru/course/javascript';

parseUrl(url);

function parseUrl(url) {
    const [protocol, otherUrl] = url.split(':');
    const [none1, none2, domain, ...patchArray] = otherUrl.split('/');
    const patch = patchArray.join('/')
    console.log(protocol);
    console.log(domain);
    console.log(patch);
}