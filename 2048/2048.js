/**
 * Created by Administrator on 2016/7/23.
 */
function getRandomInt(min, max){
    return min + Math.floor(Math.random() * (max - min + 1))
}


function getRandomNum(){
    var arr = [2, 4]
    var index = getRandomInt(0, 1)

    return arr[index]
}


function getAllEmptyNodes(){
    var emptyNodes = []
    var nodes = document.getElementsByTagName('td')
    for(var i = 0; i < nodes.length; i++){
        if(nodes[i].innerText == ''){
            emptyNodes.push(nodes[i])
        }
    }
    return emptyNodes
}


function getRandomEmptyNode(){
    var emptyNodes = getAllEmptyNodes()
    if(emptyNodes.length == 0){
        return null
    }
    var randomIndex = getRandomInt(0, emptyNodes.length - 1)
    return emptyNodes[randomIndex]
}

function getAllNodes(){
    return Array.prototype.slice.call(document.getElementsByTagName('td'))
}



function init(){
    var num1 = getRandomNum()
    var num2 = getRandomNum()

    var node1 = getRandomEmptyNode()
    node1.innerText = num1

    var node2 = getRandomEmptyNode()
    node2.innerText = num2
}

function moveLeft(){
    console.log('moveLeft')
    var nodes = getAllNodes()
    var row1 = nodes.slice(0, 4)
    var row2 = nodes.slice(4, 8)
    var row3 = nodes.slice(8, 12)
    var row4 = nodes.slice(12, 16)

    console.log(row1)

}



function moveUp(){
    console.log('moveUp')
}

function moveRight(){
    console.log('moveRight')
}

function moveDown(){
    console.log('moveDown')
}



function main(){
    init()


    document.addEventListener('keyup', function(event){
        var keyCode = event.keyCode

        if(keyCode == 37){
            moveLeft()
        }else if(keyCode == 38){
            moveUp()
        }else if(keyCode == 39){
            moveRight()
        }else if(keyCode == 40){
            moveDown()
        }else{

        }

    }, false)
}

main()