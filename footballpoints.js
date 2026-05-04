let points;
function footballPoint(win, draw, teamName) {
    points=(win*3)+(draw*1)
    console.log(`${teamName} have ${points} points`);
    }

footballPoint(2, 3, 'CIT')