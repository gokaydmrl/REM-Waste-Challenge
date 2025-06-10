import { useState } from "react";
import "./App.css";
import "./index.css";
import { useCachedData } from "./hooks/useCachedData";
// import Test from "./components/Test";
import { Swiper, SwiperSlide } from "swiper/react";

// import pic4 from "./assets/4-yarder-skip.jpg";
// import pic5 from "./assets/5-yarder-skip.jpg";
// import pic6 from "./assets/6-yarder-skip.jpg";
// import pic14 from "./assets/14-yarder-skip.jpg";
// import pic16 from "./assets/16-yarder-skip.jpg";
// import pic20 from "./assets/20-yarder-skip.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import { useScreenSize } from "./hooks/useScreenSize";
import { Modal } from "./components/Modal/Modal";
import type { IData } from "./types/data";
import { Slide } from "./components/Slide/Slide";
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";
import { Steps } from "./components/Steps/Steps";
import { SelectButton } from "./components/Buttons/SelectButton";
import { FilterButtons } from "./components/Filters/FilterButtons";
import { FilterButton } from "./components/Filters/FilterButton";

function App() {
  const [priceFilterAsc, setPriceFilterAsc] = useState(true);
  const [yardSkipFilterAsc, setYardSkipFilterAsc] = useState(true);

  const { data, filteredDataByPrice, filteredDataByYardSkip } = useCachedData({
    cacheKey: "MAINDATA",
    asc: priceFilterAsc,
    yardSkipFilterAsc: yardSkipFilterAsc,
  });

  const slidesPerView = useScreenSize();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Partial<IData> | null>(null);

  const handleSelect = (item: Partial<IData>) => {
    setSelectedItem({
      hire_period_days: item.hire_period_days,
      price_before_vat: item.price_before_vat,
      size: item.size,
      id: item.id,
    });
    setShowModal(true);
  };

  const handleSetPriceChange = () => {
    setPriceFilterAsc((prev) => !prev);
    filteredDataByPrice();
  };

  const handleSetYardSkipChange = () => {
    setYardSkipFilterAsc((prev) => !prev);
    filteredDataByYardSkip();
  };

  return (
    <div className="mainWrapper">
      <Nav />
      <Header size={1} text="Choose Your Skip Size" />
      <Header size={2} text="Select the skip size that best suits your needs" />
      <Header size={3} text="Filter By" />

      <FilterButtons>
        <FilterButton
          type="Price"
          handleFilter={handleSetPriceChange}
          isAsc={priceFilterAsc}
        />
        <FilterButton
          type="Yard Skip"
          handleFilter={handleSetYardSkipChange}
          isAsc={yardSkipFilterAsc}
        />
      </FilterButtons>
      {showModal && <Modal setShowModal={setShowModal} {...selectedItem} />}
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
