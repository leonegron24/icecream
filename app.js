const iceCream = [
    { name: 'Cookie Dough', price: 1.25, quantity: 0, type: 'scoop' },
    { name: 'Vanilla', price: 1, quantity: 0, type: 'scoop' },
    { name: 'Strawberry', price: 1.25, quantity: 0, type: 'scoop' },
    { name: 'Sprinkles', price: 0.25, quantity: 0, type: 'topping' },
    { name: 'Chocolate Chips', price: 0.25, quantity: 0, type: 'topping' },
    { name: 'Cookie Chunks', price: 0.50, quantity: 0, type: 'topping' }
  ]

  function orderVanilla(){
    console.log('ordering Vanilla')
    let qtyVanilla = iceCream[1].quantity
    iceCream[1].quantity += 1
    console.log(qtyVanilla)
  }

  function orderFlavor(addFlavor){

    for (let i = 0; i<iceCream.length; i++){
        const item = iceCream[i]

        if (addFlavor == item.name){
            item.quantity += 1
            console.log (i, item)
        }
    }
    drawFlavor();
  }

  function drawFlavor(){
    const orderListElm = document.getElementById('order-list')
    const orderTotal = document.getElementById('order-total')

    let orderContent = ''

    for (let i = 0; i<iceCream.length; i++){
        const item = iceCream[i]

        if (item.quantity > 0){
            orderContent += `
            <p> ${item.quantity} x ${item.name} $${(item.price * item.quantity).toFixed(2)} </p>`
        }
    }

    orderListElm.innerHTML = orderContent
    const returnTotal = totalOrder()
    orderTotal.innerText = '$' + returnTotal.toFixed(2)
  }

  function totalOrder(){
    let total = 0
    for(let i = 0; i < iceCream.length; i++){
        const item = iceCream[i]
        total += item.price * item.quantity
    }
    console.log('$$', total)
    return total
}