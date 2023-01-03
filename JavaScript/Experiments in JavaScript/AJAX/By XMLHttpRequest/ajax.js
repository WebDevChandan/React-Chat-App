function loadData() {
  var xhttp = new XMLHttpRequest();

  //1. Data going to read from 'readme.txt' file in 'asynchronous mode' using 'GET' http method.
    xhttp.open("GET", "readme.txt", true);

    //[Optional] Requesting fake JSON data using an api: https://jsonplaceholder.typicode.com/posts
    //   xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  //2. Request Send to the server
  xhttp.send();

  //3. After sending request to the server. Now server will send response back to the client with 'resonseText'(Since, we're requesting text from readme.txt file) & 'status'.

  //4. Since, we're using XMLHttpRequest for requesting data, so it will divide the whole processing into 5 steps called readyState (From state code from 0 to 4).
  //This event always keeps checking the response came from the server or not.
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200)
      document.getElementById("demo").innerText = this.responseText;
        
    // When Error encounters
    else if (this.readyState === 4 && this.status === 404)
      document.getElementById("demo").innerText = "File Not Found";
    else if (this.readyState === 4 && this.status === 401)
      document.getElementById("demo").innerText =
        "Connection not Established with server";
  };
}
