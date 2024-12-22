//get data

import EmblaCarousel from "components/carousel/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel';

import "./style.css";


export default function HomeCourosel() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = [
    {
      title: "Explore the Latest Trends",
      imgUrl: "/assets/images/banners/banner-18.jpg",
      buttonLink: "/shop/trends",
      buttonText: "Shop Now",
      description: "Discover the latest trends and styles for the season.",
    },
    {
      title: "Limited Time Offers",
      imgUrl: "/assets/images/banners/banner-19.jpg",
      buttonLink: "/shop/offers",
      buttonText: "View Deals",
      description: "Take advantage of our exclusive discounts and offers.",
    },
    {
      title: "New Arrivals",
      imgUrl: "/assets/images/banners/banner-20.jpg",
      buttonLink: "/shop/new-arrivals",
      buttonText: "Check It Out",
      description: "Browse our collection of new arrivals and find your style.",
    },
  ];



  return <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>;
}
