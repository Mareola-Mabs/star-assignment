// - named export
export function range(start, end, step = 1) {
  //  implement a range function

  // If bad range, throw an error
  if (end <= start) throw new Error("Bad Range, Kindly use a valid range");

  try {
    // If both start and end present
    if (start && end) {
        let output = [];
        for (let i = start; i < end; i += step) {
            output.push(i);
      }
        return output;
    }
    // If only start present
    let output = [];
    for (let i = 0; i < start; i += step) {
        output.push(i);
    }
    return output;
  } catch (err) {
        console.log(err);
        return output;
  }
}


// =====> Assignment by Ibukunola Oreoluwa Mabawonku

range(10) // start-0 , end-10 [0,1,2,3,4,5,6,7,8,9]

range(2, 10) // start-2, end-10

range(0, 10, 2) // start- , end-10, step- 2 [0, 2, 4, 6, 8]
range(5) // [0, 1, 2, 3, 4]
