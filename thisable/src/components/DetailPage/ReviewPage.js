import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import axios from "axios";

function ReviewPage(locationId) {
  const reviews = {
    message: "List Review of location number 1 Success",
    data: [
      {
        _id: "62343510c3dd5a345c6431d4",
        locationId: 1,
        userId: null,
        userType: "anonymous",
        good: 0,
        bad: 0,
        detail:
          "매장이 넓고 경사로가 있어서 이용하기 편리했어요 카페 내부도 예뻐요! 입구는 하나라 경사로 찾기 쉬울 것 같아요",
        star: 4.5,
        createdAt: "2022-03-18T09:40:53.077Z",
      },
      {
        _id: "62343510c3dd5a345c6431d4",
        locationId: 1,
        userId: null,
        userType: "anonymous",
        good: 3,
        bad: 4,
        detail:
          "매장이 넓고 경사로가 있어서 이용하기 편리했어요 카페 내부도 예뻐요! 입구는 하나라 경사로 찾기 쉬울 것 같아요",
        star: 4.5,
        createdAt: "2022-03-18T09:40:53.077Z",
      },
    ],
  };

  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  function postReview(e) {
    axios({
      url: "/review",
      method: "post",
      data: {
        locationId: locationId,
        detail: inputValue,
        stare: rating,
      },
    })
      .then(function a(response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const [recommand, setRecommand] = useState();
  const [discourage, setDiscourage] = useState();

  const recommandClick = (reviewid) => {
    //axios.post(baseUrl + /review/recommand)
  };

  const discourageClick = (reviewid) => {
    //axios.post(baseUrl + /review/discourage)
  };

  const renderReviews =
    reviews &&
    reviews.data.map((review) => {
      const reviewid = review._id;
      return (
        <div className="review">
          <div className="reviewtop">
            <div className="reviewtopleft">
              <Rating ratingValue={review.star} readonly />
              <div className="reviewuser">{review.userType}</div>
            </div>
            <div className="reviewdate">{review.createdAt}</div>
          </div>
          <div className="reviewcontent">{review.detail}</div>
          <div className="helpbuttoncontainer">
            <button className="helpbutton">
              <div onClick={recommandClick({ reviewid })}>도움이 돼요</div>
              <div className="helpbuttonnum">{review.good}</div>
            </button>
            <button className="helpbutton">
              <div onClick={discourageClick}>도움이 안돼요</div>
              <div className="helpbuttonnum">{review.bad}</div>
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
        <input
          className="reviewinput"
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="작성한 후기는 익명으로 등록됩니다."
        />
        <button className="reviewinputbutton" onClick={postReview}>
          등록
        </button>
      </div>
      <div className="reviewlist">
        <div className="reviewlisttitle">
          <div className="reviewlistnum">후기 435개</div>
          <div className="reviewlistsort">사용자 추천순 | 최근 작성순</div>
        </div>
        {renderReviews}
      </div>
    </div>
  );
}

export default ReviewPage;
