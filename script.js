const accordionInit = (animatonTime = 200) => {
  const checkingSizeTime = 50;

  const accordions = document.querySelectorAll(".accordion");

  const getAnswerHeight = (accordionItem) => {
    accordionItem.classList.add("check-answer-size");
    const answerContainer = accordionItem.querySelector(".accordion-answer");
    answerContainer.style.height = "auto";
    const answerContainerHeight = answerContainer.offsetHeight;
    answerContainer.style.height = "";
    return [answerContainer, answerContainerHeight];
  };

  accordions.forEach((accordion) => {
    const accordionItems = accordion.querySelectorAll(".accordion-item");

    accordionItems.forEach((accordionItem) => {
      const quetionBtn = accordionItem.querySelector(".accordion-question");

      quetionBtn.addEventListener("click", () => {
        const [answerContainer, answerContainerHeight] =
          getAnswerHeight(accordionItem);
        const displayedItem = accordion.querySelector(".answer-displayed");
        const hideDisplayedItems = (displayedItem) => {
          if (!displayedItem) return;
          const answerContainer =
            displayedItem.querySelector(".accordion-answer");
          const answerContainerHeight = answerContainer.offsetHeight;

          answerContainer.style.height = answerContainerHeight + "px";
          displayedItem.classList.add("hide-answer");
          setTimeout(() => {
            answerContainer.style.height = "0px";
            setTimeout(() => {
              answerContainer.style.height = "";
              displayedItem.classList.remove(
                "show-answer",
                "hide-answer",
                "answer-displayed",
                "check-answer-size"
              );
            }, animatonTime);
          }, checkingSizeTime);
        };
        hideDisplayedItems(displayedItem);

        // show accordionItem
        if (accordionItem.classList.contains("answer-displayed")) return;
        setTimeout(() => {
          accordionItem.classList.remove("check-answer-size");
          accordionItem.classList.add("show-answer");
          answerContainer.style.height = answerContainerHeight + "px";
          setTimeout(() => {
            answerContainer.style.height = "";
            accordionItem.classList.remove("show-answer");
            accordionItem.classList.add("answer-displayed");
          }, animatonTime);
        }, checkingSizeTime);
      });
    });
  });
};

// In case of change animatonTime value, it has to be changed in style sheet as well
accordionInit();
