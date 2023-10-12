const PARENT_TAG = "ytd-popup-container";
const TARGET_TAG = "tp-yt-paper-dialog";
const OPTIONS = { "childList": true };
const MUTATION_TYPE = "childList";
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
    if (mutationRecord.type == MUTATION_TYPE) {
      mutationRecord.addedNodes.forEach(node => {
        if (node.tagName == TARGET_TAG.toUpperCase()){
          console.log("Silly goose!");
          node.remove();
        }
      });
      const video = document.querySelector("video");
      if (video != undefined) {
        video.play();
      }
    }
  })
}