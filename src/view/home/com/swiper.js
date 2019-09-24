import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css'

const img_list = ["http://p1.music.126.net/r4pClqvUItPuOXyAGPt8lg==/109951164373794490.jpg",
  "http://p1.music.126.net/YO-E4NH9YTChn6ppO6KiNw==/109951164374387937.jpg",
  "http://p1.music.126.net/vXBcygdmM8Ym1js1dRY-mA==/109951164374379733.jpg",
  "http://p1.music.126.net/bDPC0MF9FpIpCns4AoNtHg==/109951164374380879.jpg",
  "http://p1.music.126.net/14KZWKBKuddXGQ8bXkeUHQ==/109951164374401124.jpg",
  "http://p1.music.126.net/mezROtXOszat6vYhORxt7A==/109951164374371154.jpg",
  "http://p1.music.126.net/dvtoAoJQ8GZ01Wv_cMq7gg==/109951164375637221.jpg",
  "http://p1.music.126.net/ycqUIWAVcH1NlRBQvjORtQ==/109951164374413591.jpg",]

// const img_list=['../../img/banner/1.jpg',
//                 '../../img/banner/2.jpg',
//                 '../../img/banner/3.jpg',
//                 '../../../img/banner/4.jpg',]

const slide_color = ['#e8c696',
  '#0e1c36',
  "#a64a3d",
  "#1b080a",
  "#3f3f3f",
  "#161616",
  "#4b0b09",
  "#332d9b",]


const FadeEffect = () => {
  const params = {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    <Swiper {...params}>
      {
        //   img_list.map((item,index)=>{
        //   return (
        //     <div style={{background:slide_color[index]}}>
        //       <div className="image-wrap">
        //           <img src={item}></img>
        //       </div>
        //     </div>
        //   )
        // })
        img_list.map(renderSlide)
      }
    </Swiper>
  )
};


const renderSlide = (item, index) => {
  return (
    <div className="any-sss" style={{ background: slide_color[index] }}>
      <div className="wrap">
        <img src={item}></img>

        <div className="download">&nbsp;</div>
      </div>

    </div>
  )
}

export default FadeEffect;