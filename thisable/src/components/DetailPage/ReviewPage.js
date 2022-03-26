import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import {
  getReview,
  getReviewAverage,
  postReview,
  postReviewRecommend,
  postReviewDiscourage,
} from "../../services/user.service";

function ReviewPage({ locationId }) {
  const [reviews, setReviews] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewNum, setReviewNum] = useState("");
  const [sort, setSort] = useState("recommended");

  const handleRating = (rate) => {
    setRating(rate / 20);
    console.log(rating);
  };

  useEffect(async () => {
    const reviewList = await getReview(locationId, sort);
    const averageNum = await getReviewAverage(locationId);
    setReviews(reviewList);
    setReviewNum(averageNum.count);
  }, [locationId, sort]);

  const [inputValue, setInputValue] = useState("");
  console.log("input: ", inputValue);

  const clear = () => {
    setInputValue("");
    setRating(0);
  };

  const [recommend, setRecommend] = useState(0);
  const [discourage, setDiscourage] = useState(0);

  const renderReviews =
    reviews &&
    reviews.response.map((review) => {
      var good = review.good;
      var bad = review.bad;

      return (
        <div className="review">
          <div className="reviewtop">
            <div className="reviewtopleft">
              <Rating ratingValue={review.star * 20} readonly />
              <div className="reviewuser">{review.userType}</div>
            </div>
            <div className="reviewdate">{review.createdAt}</div>
          </div>
          <div className="reviewcontent">{review.detail}</div>
          <div className="helpbuttoncontainer">
            <button className="helpbutton">
              <div
                onClick={() =>
                  postReviewRecommend(review._id) && setRecommend(good + 1)
                }
              >
                도움이 돼요
              </div>
              {/* <div className="helpbuttonnum">{recommend}</div> */}
              <div className="helpbuttonnum">{review.good}</div>
            </button>
            <button className="helpbutton">
              <div onClick={() => postReviewDiscourage(review._id)}>
                도움이 안돼요
              </div>
              <div className="helpbuttonnum">{bad}</div>
            </button>
          </div>
        </div>
      );
    });

  return (
    <div>
      <div className="reviewcontainer">
        <div className="reviewinputtop">
          <div className="reviewtitle">후기를 남겨주세요</div>
          <Rating onClick={handleRating} ratingValue={rating} />
        </div>
        <textarea
          className="reviewinput"
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="작성한 후기는 익명으로 등록됩니다."
          value={inputValue}
        />
        <button
          className="reviewinputbutton"
          onClick={() => postReview(locationId, inputValue, rating) && clear()}
        >
          등록
        </button>
      </div>
      <div className="reviewlist">
        <div className="reviewlisttitle">
          <div className="reviewlistnum">후기 {reviewNum}개</div>
          <div className="reviewlistsort">
            <div onClick={() => setSort("recommended")}>사용자 추천순 |</div>
            <div onClick={() => setSort("createdAt")}>최근 작성순</div>
          </div>
        </div>
        {renderReviews}
      </div>
    </div>
  );
}

export default ReviewPage;
