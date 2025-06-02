// Synchronous = Execute line by line consecutively in a sequential manner code
//               that wait for an  operation to complete.

// Asynchronous = Allow multiple operations to be performed cocurrently without waitting
//                doesen't block the excution flow and allow the program to continue
//                (I/O operation, network request, fetching data)
//                Handle with: Callback, Promise, Async/Await

function func1(Callback) {
  setTimeout(() => {
    console.log('Task 1');
    Callback();
  }, 3000);
}

function func2() {
  console.log('Task 2');
  console.log('Task 3');
  console.log('Task 4');
}

func1(func2);
