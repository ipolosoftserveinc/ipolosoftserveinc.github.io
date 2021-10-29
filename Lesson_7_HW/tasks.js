/*
1. За допомогою методів об’єкта winow створити:
1) нове вікно розміром 300х300 пікселів.
2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
4) із затримкою 2 сек закрийте вікно.
 */
open('#', 'targetWindow', `scrollbars=yes,resizable=yes,width=300,height=300`);
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
function resize() {
    delay(2000).then(() => {window.resizeTo(500, 500);});
}
function move() {
    delay(2000).then(() => {window.moveTo(200, 200);});
}
function closeWindow() {
    delay(2000).then(() => {window.close();});
}
await resize();
await move();
await closeWindow();