var express= require('express')
var app = express()

//app.use(express.static(__dirname + '/public'));
var port=3200;

/*app.get('/',function(request, response){
    response.send("Get Request is responsive")
})
*/


//subtask 1
app.use(express.static(__dirname + '/public'))
app.listen(port)
console.log('Server listening: '+port)

//get request reponse is sum of two numbers
app.get('/addNumbers',function(request,response){
    var number1= request.query.number1
    var number2=request.query.number2
    //convert incoming input to integer
    var sum=parseInt(number1)+parseInt(number2)
    response.send('Sum of the given two numbers '+number1+"+"+number2+" = "+sum)
})

//Homework C
//Arrays
let accounts=[
    { id:1, name:'alex',deposit:1},
    { id:2, name:'sarah',deposit:10},
    { id:3, name:'jim',deposit:100}
]
//Given input is initialized

app.get('/displayArray',function(request, response)
{  
    var accountId=request.query.accountId
    var message="Account Not Found"
    console.log(accountId)
    
    accounts.forEach(account=>{
        //Account ID entered matches with Input Array
        if (account.id==accountId){
            //Print statement if id exist in array  
            message="Account is found"+"<br><br>"+"ID = "+account.id+"<br>"+"  Name = "+account.name+"<br>"+"  Deposit ="+account.deposit;
            
                  

        }
          

    });
    //Respone sent 
    response.send(message)
    
})



//HD Task
/*
Why Linked List are used
1)Linked list has faster deletion and insertion as linked list elements
are allocated randomly in memory and not continous like in case of arrays
2) Size is not predefined so, size can be increased and decreased as program runs. 
*/

class LinkedList 
{
    //constructor with account contents
    constructor(accountId, accountName, accountDeposit)
    {
        this.accountId=accountId
        this.accountName=accountName
        this.accountDeposit=accountDeposit
        this.next=null
    }
}

let Node=new LinkedList(1, 'alex',5)
Node.next=new LinkedList(2, 'sarah',5)
Node.next.next=new LinkedList(3,'jim',15)


app.get('/linkedList',function(request, response){
    var accountId=parseInt(request.query.accountId)
    console.log("Input Account Id is"+accountId)
    let node=Node
    let message="Account is Not Found"
    while(node!=null){
        if(node.accountId==accountId)
        {
            //display messsage if id is found in linked list
            message="Account is found"+"<br><br>"+"ID = "+node.accountId+"<br>"+"  Name = "+node.accountName+"<br>"+"  Deposit ="+node.accountDeposit  
            

        }
        node=node.next
    }
    response.send(message)
})



