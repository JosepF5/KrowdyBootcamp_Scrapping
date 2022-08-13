import { searchSelectors } from "../config/scrapperSelectors";
import { $,$$ } from "../utils/selectors";
import { waitForSelector } from "../utils/waitFor";

async function init() {

  await waitForSelector(searchSelectors.paginateResultsContainer);
  const URLsCandidates = $$(searchSelectors.paginateResultsContainer).map(
    (candidate) => $(".app-aware-link", candidate).href
  );

  console.log(URLsCandidates);

  const port = chrome.runtime.connect({ name: "secureChannelScrap" });
  port.postMessage({ URLsCandidates });

}
init();