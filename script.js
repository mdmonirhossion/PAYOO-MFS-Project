// login button functionlity
document.getElementById("login-button").addEventListener("click", function(e) {
    e.preventDefault()
    const mobileNumber = 1770183572
    const pinNumber = 1234

    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    console.log(mobileNumberValueConverted, pinNumberValueConverted)

    if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
        window.location.href = "./home.html"
    } else {
        alert("Invalid credentials")
    }
})