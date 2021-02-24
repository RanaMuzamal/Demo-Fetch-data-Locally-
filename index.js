

async function getData(){
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
    const data =await response.json();
    console.log(data);

}
//getData();
async function postData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
         
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
postData();

