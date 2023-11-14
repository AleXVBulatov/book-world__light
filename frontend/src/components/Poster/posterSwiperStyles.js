export const posterSwiperStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    background-color: #f6f6f6;
    padding: 4px;
    border-radius: 100%;              
  }

  .swiper-button-next svg,
  .swiper-button-prev svg {
    width: 10px;
    color: #ff9e60;
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    height: 16px;
    margin-bottom: 20px;
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #f6f6f6;
    opacity: 0.4;
  }
  .swiper-pagination-bullet-active {
    width: 16px;
    height: 16px;
    background-color: #f6f6f6;
    opacity: 1;
  }

  .swiper-scrollbar {
    margin-bottom: 5px;
    background: none;
    background-color: rgba(245, 245, 245, 0.5);
  }

  .swiper-scrollbar > div {
    background: none;
    background-color: rgba(245, 245, 245, 1);
  }
`;
// Для использования свой стрелки:
// .swiper-button-next,
// .swiper-button-prev {
// background-color: #f6f6f6;
// background-position: center;
// background-size: 20px;
// background-repeat: no-repeat;
// padding: 4;
// border-radius: 100%;
// color: transparent;
// }
// Для использования свой стрелки:
// .swiper-button-prev {
//   background-image: url(/icons/left-arrow.svg);
// }
// .swiper-button-next {
//   background-image: url(/icons/right-arrow.svg);
//   color: red
// }
// .swiper-button-next svg,
// .swiper-button-prev svg{
//   width: 0px;
// }
// .swiper-button-next::after,
// .swiper-button-prev::after {
//   content: "";
// }