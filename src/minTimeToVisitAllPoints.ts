function minTimeToVisitAllPoints(points: number[][]): number {
    // find max difference between each two points (x or y, which is ever bigger)
    let result : number = 0;
    if(points.length < 2) {
        return result;
    }

    for(let i=0; i< points.length-1; i++){
        // could be solved with much less variables, but this is more readable
         const x1: number = points[i][0];
         const y1: number = points[i][1];
         const x2: number = points[i+1][0];
         const y2: number = points[i+1][1];
         const diffX: number = Math.abs(x2 - x1);
         const diffY: number = Math.abs(y2 - y1);
        result += Math.max(diffX, diffY);
    }
    return result;
  }
  
  export function testminTimeToVisitAllPoints() {
    const result = minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]);
    console.log("testminTimeToVisitAllPoints");
    console.log(result);
  }
  