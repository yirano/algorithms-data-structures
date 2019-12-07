function workbook(n, k, arr) {
  let current_page = 0;
  let limit = k;
  let chapters = n;
  let total_page = 0;
  let empty_arr = []
  let start_page = 1;
  let starting_question = 1;
  let chapter = 0;

  for (let i = 0; i < arr.length; i += 1) {
    total_page += Math.ceil(arr[i] / limit)
    current_page += Math.ceil(arr[i] / limit)
    start_page = current_page - (Math.ceil(arr[i] / limit)) + 1
    console.log("start_page: ", start_page);
    console.log("current page: ", current_page);
    chapter += 1
    if (start_page < arr[i] && arr[i] >= current_page) {
      console.log("Something here on chapter " + chapter);
    }
  }



  console.log(total_page);
}

let n = 5;
let k = 3;
let arr = [4, 2, 6, 1, 10];
workbook(n, k, arr);