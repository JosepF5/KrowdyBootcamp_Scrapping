import { searchSelectors } from "../config/scrapperSelectors";
import { $ } from "./selectors";

export async function waitForSelector(
  selector,
  intervalTime = 500,
  timeOut = 5000
) {
  new Promise((res, rej) => {
    let cont = 0;
    const interval = setInterval(() => {
      cont++;
      if (cont === timeOut / intervalTime + 1){
        clearInterval(interval);
        rej(false);
      }
      if($(searchSelectors.paginateResultsContainer)){
        clearInterval(interval);
        res(true)
      }
    }, intervalTime);
  });
}
