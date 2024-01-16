
//url = 'https://fakestoreapi.com/products/'

fetch('https://fakestoreapi.com/products/')
  .then(response => {
    console.log("Successful")
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json()
  })
  .then(data => {
    displayData(data)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error)
  });

function displayData(data) {

  let resultElement = document.getElementById('result')

  resultElement.innerHTML = ''

  data.forEach(product => {
    let container = document.createElement('div')
    container.classList.add('productList')


    //pictures
    let imgElement = document.createElement('img')
    imgElement.src = product.image
    imgElement.alt = product.title
    container.appendChild(imgElement)

    
    //button
    let buyButton = document.createElement('button')
    buyButton.textContent = 'Buy'

    buyButton.addEventListener('click', () => {
    alert(`You have added ${product.title} to the Cart`)
    })
    container.appendChild(buyButton)

    let paragraph = document.createElement('p')
    paragraph.innerHTML = `<strong>Product:</strong> ${product.title}<br><strong>Price:</strong> ${product.price}<br><strong>Description:</strong> ${product.description}`
    //paragraph.textContent = `Product: ${product.title}, Price: ${product.price}, Description: ${product.description}`;
    container.appendChild(paragraph)
    resultElement.appendChild(container)

  })
}
















