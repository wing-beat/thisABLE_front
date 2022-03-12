import React from 'react'

function ReviewPage() {
  const reviews = [
    {
      star: "★★★☆☆",
      user: "장애인 이용자",
      date: "2020.10.23",
      content: "어쩌구저쩌구 웅앵웅 여기 좋아요 깨끗하고 좋고 최고예요 관리도 너무 잘되어 있고 운영시간도 길고 그냥 최고최고",
      goodhelp: "128",
      badhelp: "22",
    },
    {
      star: "★★★☆☆",
      user: "장애인 이용자",
      date: "2020.10.23",
      content: "어쩌구저쩌구 웅앵웅 여기 좋아요 깨끗하고 좋고 최고예요 관리도 너무 잘되어 있고 운영시간도 길고 그냥 최고최고",
      goodhelp: "128",
      badhelp: "22",
    },
  ]

  return (
    <div>
      <div className='reviewcontainer'>
        <div className='reviewinputtop'>
        <div className='reviewtitle'>후기를 남겨주세요</div>
        <div className='reviewinputstar'>☆☆☆☆☆</div>
        </div>
        <div className='reviewinput'>작성한 후기는 익명으로 등록됩니다.</div>
        <button className='reviewinputbutton'>등록</button>
      </div>
      <div className='reviewlist'>
        <div className='reviewlisttitle'>
        <div className='reviewlistnum'>후기 435개</div>
        <div className='reviewlistsort'>사용자 추천순 | 최근 작성순</div>
        </div>
        <div className='review'>
          <div className='reviewtop'>
          <div className='reviewtopleft'>
          <div className='reviewstar'>★★★☆☆</div>
          <div className='reviewuser'>장애인 이용자</div>
          </div>
          <div className='reviewdate'>2020.10.23</div>
          </div>
          <div className='reviewcontent'>어쩌구저쩌구 웅앵웅 여기 좋아요 깨끗하고 좋고 최고예요 관리도 너무 잘되어 있고 운영시간도 길고 그냥 최고최고</div>
          <div className='helpbuttoncontainer'>
          <button className='helpbutton'>
          <div>도움이 돼요</div>
          <div className='helpbuttonnum'>128</div>
          </button>
          <button className='helpbutton'>
          <div>도움이 안돼요</div>
          <div className='helpbuttonnum'>22</div>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewPage