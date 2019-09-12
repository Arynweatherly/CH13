// // Some starter code
// console.log("boom")
// const container = document.querySelector("#addressList")

// document.querySelector("#saveEntry").addEventListener("click", event => {
//     /*
//         Collect the user put by selecting the input fields, one
//         at a time, and accessing the `value` property
//     */
//     const personName = document.querySelector("#fullName").value
//     const personAddress = document.querySelector("#address").value

//     // Once you have collected all the values, update the DOM
//     // with some HTML
//     container.innerHTML += `
//         <section>
//             <h1>${personName}</h1>
//             <div>${personAddress}</div>
//         </section>
//     `

// })

const container = document.querySelector("#favList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    const favThing = document.querySelector("#favThings").value;
    const favlocation = document.querySelector("#favlocation").value;
    container.innerHTML += `
    <section>
        <h1>${favThing}</h1>
        <div>${favlocation}</div>
    </section>
    `
})