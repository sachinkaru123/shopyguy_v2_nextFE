//get data

import EmblaCarousel from "components/carousel/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel';

import "./style.css";



export default function HomeCourosel({slides}) {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;




  return <EmblaCarousel slides={slides} options={OPTIONS}></EmblaCarousel>;
}
