var i = 0;
let snapshots = ["/Images/websiteFirstSnapshot.png", "/Images/projectPageOriginal.png"];

function nextClick() {
    if (i < 1) {
        i++;
        document.getElementById('Image').src = snapshots[i];
    }
}

function previousClick() {
    if (i > 0) {
        i--;
        document.getElementById('Image').src = snapshots[i];
    }
}
