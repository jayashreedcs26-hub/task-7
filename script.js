var missionInput = document.getElementById('missionInput');
var addBtn = document.getElementById('addBtn');
var missionList = document.getElementById('missionList');
var totalCount = document.getElementById('totalCount');
var completedCount = document.getElementById('completedCount');
var pendingCount = document.getElementById('pendingCount');
var colorBtn = document.getElementById('colorBtn');


var colors = ['#94abd9', '#a7996a', '#568a88', '#aa687e'];
var colorIndex = 0;

function changeBackground() {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
    return colorIndex;
}

function updateCounter() {
    var total = missionList.children.length;
    var completed = document.querySelectorAll('#missionList li.completed').length;

    totalCount.textContent = total;
    completedCount.textContent = completed;
    pendingCount.textContent = total - completed;
    return total;
}

function addMission() {
    var text = missionInput.value.trim();

    if (text === '') { 
        return;
    }

    var li = document.createElement('li');
    var span = document.createElement('span');
    span.textContent = text;

    var delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';

    li.addEventListener('click', function(e) {
        if (e.target!== delBtn) {
            li.classList.toggle('completed');
            updateCounter();
        }
    });

    delBtn.addEventListener('click', function() {
        li.remove();
        updateCounter();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    missionList.appendChild(li);

    missionInput.value = ''; 
    updateCounter();
}

addBtn.addEventListener('click', addMission);
colorBtn.addEventListener('click', changeBackground);

missionInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addMission();
    }
});

updateCounter();