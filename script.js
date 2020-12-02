document.getElementById("apiBtn").addEventListener("click", displayData);


function displayData() {

    const result = document.getElementById("result");
    const img = document.getElementById("img")

    result.innerHTML = "Loading...";
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (resp) {
            // Transform the returned json string data into a real json object.
            return resp.json()
        })
        .then(function (data) {
            // return the data to be used
            result.innerHTML = JSON.stringify(data.value);

            img.style.display = "block";

            count.addCount();
            displayCount = () => {
                document.getElementById("count").innerText = count.getCount();
            }
            displayCount();
        });
}

function Count(ct) {
    let _ct = ct;
    this.addCount = () => {
        _ct++;
    };
    this.getCount = () => _ct;
}
let count = new Count(0);


// let jeremy = [1, 2, 3];

// for (let i = 1; i <= jeremy.length; i++) {
//     console.log(i);
// }

// jeremy.map(i => {
//     console.log(i);
// }
// )