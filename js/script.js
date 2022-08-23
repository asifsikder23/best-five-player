const playersBtn = document.getElementsByClassName('click-btn');
for(let playerBtn of playersBtn){
    playerBtn.addEventListener('click', function () {
        const playerName = playerBtn.parentNode.parentNode.children[0];
        
        const playerNames = playerName.innerText;
        const ol = document.getElementById('selected-player');
        if(ol.children.length < 5){
            const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerText = playerNames;
        ol.appendChild(li);
        playerBtn.setAttribute('disabled', true);
        }
        else{
            alert('Too many players!!! You can not add more than 5 players');
        }
    })
}
// calculate the expense for per player using common function
function getValue(inputID){
    const input = document.getElementById(inputID);
    const inputValue = parseInt(input.value);
    return inputValue;
}
document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerExpenseInputField = getValue('per-player');
    const ol = document.getElementById('selected-player');
    const lilen = ol.children.length;
    const playerExpenses = perPlayerExpenseInputField * lilen;
    const player = document.getElementById('player-expenses');
    player.innerText = playerExpenses;
})
document.getElementById('total-calculate').addEventListener('click', function(){
    const manager = getValue('manager');
    const coach = getValue('coach');
    const player = document.getElementById('player-expenses');
    const total = document.getElementById('total');
    total.innerText = parseInt(player.innerText) + manager + coach;
})