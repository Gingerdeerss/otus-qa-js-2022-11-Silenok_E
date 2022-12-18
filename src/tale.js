const personage = 'заяц';
function kolobok(personage) {
    switch (personage) {
        case 'дедушка':
            return 'Я от дедушки ушёл';
        case 'заяц':
            return 'Я от зайца ушёл';
        case 'лиса':
            return 'Меня съели';
        default:
            return 'Введите существующего персонажа: дедушка, заяц, лиса';
    }
}
console.log(kolobok(personage));

const charName = 'Дед Мороз';
function NeYear(name) {
   return `${name}!${name}!${name}!`;
};
console.log(NeYear(charName));
