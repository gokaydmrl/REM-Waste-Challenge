import "./App.css";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import { useScreenSize } from "./hooks/useScreenSize";
import { Modal } from "./components/Modal/Modal";
import { Slide } from "./components/Slide/Slide";
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";
import { Steps } from "./components/Steps/Steps";
import { SelectButton } from "./components/Buttons/SelectButton";
import { FilterButtons } from "./components/Filters/FilterButtons";
import { useData } from "./context/DataContext";
import { Loading } from "./components/LoadingSceleton/Loading";

function App() {
  const slidesPerView = useScreenSize();
  const { data, showModal, handleSelect, selectedItem } = useData();

  return (
    <div className="mainWrapper">
      <Nav />
      <Header size={1} text="Choose Your Skip Size" />
      <Header size={2} text="Select the skip size that best suits your needs" />
      <Header size={3} text="Filter By" />
      {!data.length && <Loading />}
      <FilterButtons />
      {showModal && <Modal />}
      <Swiper
        mousewheel={true}
        slidesPerView={slidesPerView}
        spaceBetween={24}
        pagination={{
          type: "bullets",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Mousewheel]}
        className="mySwiper"
        style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id} className="swiperSlider">
              <SelectButton
                callBack={() => handleSelect(item)}
                item={item}
                selectedItem={selectedItem}
              />
              <Slide item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Steps />
    </div>
  );
}

export default App;
