const PARENT_TAG = "ytd-popup-container";
const OPTIONS = { "childList": true };
const OBSERVER = new MutationObserver(callback);

watchForPopUp();

function watchForPopUp() {
  const ytd_popup_container = document.querySelector(PARENT_TAG);
  if (ytd_popup_container != undefined) {
    OBSERVER.observe(ytd_popup_container, OPTIONS);
  }
}

function callback(mutationList, observer) {
  console.log(mutationList);
  mutationList.forEach(mutationRecord => {
    if (mutationRecord.type == "childList") {
      console.log(mutationRecord.addedNodes);
      mutationRecord.addedNodes.forEach(node => node.remove());
      const video = document.querySelector("video");
      if (video != undefined) {
        video.play();
      }
    }
  })
}