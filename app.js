// import { jump } from '../legend-of/utils.js'

kaboom({
    global: true,
    fullscreen : true,
    scale: 1,
    debug: true,
    // background: [ 24, 196, 222,]
})

loadSprite('link-walk-left', 'assets/link-walk-left.png');
loadSprite('link-walk-right', 'assets/penguin-scaled.png');
loadSprite('link-walk-up', 'assets/link-walk-up.png');
loadSprite('link-walk-down', 'assets/link-walk-down.png');

loadSprite('bottom-left', 'assets/walls/bottom-left.png');
loadSprite('bottom-right', 'assets/walls/bottom-right.png');
loadSprite('bottom-wall', 'assets/walls/bottom-wall.png');
loadSprite('left-wall', 'assets/walls/left-wall.png');
loadSprite('right-wall', 'assets/walls/right-wall.png');
loadSprite('top-left', 'assets/walls/top-left.png');
loadSprite('top-right', 'assets/walls/top-right.jpeg');
loadSprite('top-wall', 'assets/walls/top-wall.png');


const speed = 320;

const player = add([ 
    sprite('link-walk-right'), 
    pos(center()),
    area(),
    // body(),
])
onKeyDown("left", () => {
	player.move(-speed, 0)
})

onKeyDown("right", () => {
	player.move(speed, 0)
})

onKeyDown("up", () => {
	player.move(0, -speed)
})

onKeyDown("down", () => {
	player.move(0, speed)
})
onClick(() => {
})
onKeyPress('space', () => {
    timer(200, player.move(0, -500));
})

onKeyRelease('space', () => {
    player.move(0, 500)
})




const map = add(scene('game', () =>{
    const map = [ 
        'aaaaaaaaaaaaaaaaaaaaa',
        'a                    ',
        'a                    ',
        'a                    ',
        'a                    ',
        'a                    ',
        'a                    ',
        'a                    ',
        'a                    ',
        'a                    ',
        'a                    ',
        'a                    ',
        'a                    ',
        'a                    ',
        'a                    ',
        'aaaaaaaaaaaaaaaaaaaaa',
        
    ]
    const levelConfig ={
        width: 48,
        height: 48,
        a: [sprite('left-wall'), solid()]
    }
    addLevel(map, levelConfig);
    
}))



