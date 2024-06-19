const swiper = new Swiper(".detail-img-slider", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      direction: "vertical",
    },
  },
});
const swiper2 = new Swiper(".detail-thumb", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".detail-img-next",
    prevEl: ".detail-img-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// READMORE
const handleReadMore = () => {
  const readmoreList = document.querySelectorAll(".feedback-item .readmore");
  Array.from(readmoreList).forEach((readmore) => {
    const content = readmore.parentElement.querySelector(
      ".feedback-item-comment"
    );
    if (
      content.scrollHeight <
      parseInt(window.getComputedStyle(content).fontSize) * 8
    ) {
      readmore.classList.add("d-none");
    }
    readmore.addEventListener("click", () => {
      content.classList.toggle("show");
    });
  });
};

handleReadMore();

const fbData = [
  {
    name: "Kate Nguyen",
    description:
      "I try to cook/bake as much as possible using zero acre. My family prefers cooking at home to minimize seed oil intake. The oil works great for anything from making a salad dressing to frying taquitos. Even for making breads that call for oil, the zero acre product performs perfectly. I try to cook/bake as much as possible using zero acre. My family prefers cooking at home to minimize seed oil intake. The oil works great for anything from making a salad dressing to frying taquitos. Even for making breads that call for oil, the zero acre product performs perfectly.",
    date: "4",
    imageURL: "assets/images/cmt-1.png",
    title: "Very Happy",
    rating: "4",
  },
  {
    name: "Kate",
    description:
      "Tasteless I made brownies with it instead of butter. As you can see it was well liked.",
    date: "3",
    imageURL: "assets/images/cmt-3.png",
    title: "Very Happy",
    rating: "5",
  },
  {
    name: "Nguyen",
    description:
      "I love that BeautyBloom is going after the problematic and gigantic seed oil industry which is complicit in the proliferation of superphysiological doses of fats unfit for human consumption, aiding in making people overweight and metabolically unhealthy. I use this clean and neutral tasting oil for light pan. I love that BeautyBloom is going after the problematic and gigantic seed oil industry which is complicit in the proliferation of superphysiological doses of fats unfit for human consumption, aiding in making people overweight and metabolically unhealthy. I use this clean and neutral tasting oil for light pan",
    date: "6",
    imageURL: "assets/images/cmt-2.png",
    rating: "4",
  },
];

const handleFeedback = (fbData) => {
  return fbData.reduce(
    (addFb, fb) =>
      addFb +
      `<div class="feedback-item">
  <div class="feedback-item-wrapper">
    <div class="feedback-user">
      <div class="feedback-avatar">
        <p>CS</p>
      </div>
      <div>
        <h4>${fb.name}</h4>
        <h5>
          Verified Buyer
          <img
            src="assets/images/check-icon.png"
            alt="check icon"
          />
        </h5>
      </div>
    </div>
    <p>
      <img src="assets/images/like-icon.png" alt="like icon" />I
      recommend this product
    </p>
  </div>
  <div class="feedback-item-content">
    <div class="feedback-item-rating">
      <div class="rating-detail" style="--rating: ${fb.rating}"></div>
      <span>${fb.date} weeks ago</span>
    </div>
    <h3>${fb.title}</h3>
    <p class="feedback-item-comment">
      ${fb.description}
    </p>
    <button class="readmore">Read more</button>
    <div class="feedback-like">
      <h6>Was this helpful?</h6>
      <div class="feedback-like-item">
        <button title="like">
          <img src="assets/images/up-icon.png" alt="like" />
        </button>
        <span>1</span>
      </div>
      <div class="feedback-like-item">
        <button title="dislike">
          <img src="assets/images/down-icon.png" alt="dislike" />
        </button>
        <span>0</span>
      </div>
    </div>
  </div>
  <div class="feedback-item-image">
    <img
      src="${fb.imageURL}"
      alt="${fb.title}"
      title="${fb.title}"
    />
  </div>
</div>`,
    ""
  );
};

const loadFeedback = document.querySelector(".feedback-loadmore");
if (loadFeedback) {
  loadFeedback.addEventListener("click", () => {
    const listFB = document.querySelector(".feedback-main");
    if (listFB && fbData) {
      const content = handleFeedback(fbData);
      listFB.insertAdjacentHTML("beforeend", content);
    }
    handleReadMore();
  });
}
