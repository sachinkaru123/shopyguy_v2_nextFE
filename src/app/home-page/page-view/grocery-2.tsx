// GLOBAL CUSTOM COMPONENTS
// import Setting from "components/settings";
// import { Footer2 } from "components/footer";
import Scrollbar from "components/scrollbar";
// import Newsletter from "components/newsletter";
// import StickyWrapper from "components/sticky-wrapper";
// import GrocerySideNav from "components/page-sidenav/grocery-side-nav";
import { MobileNavigationBar2 } from "components/mobile-navigation";
// LOCAL CUSTOM COMPONENTS

;
// import ProductCarousel from "../product-carousel";
// API FUNCTIONS
import api from "utils/__api__/grocery-2";
import api2 from "utils/__api__/grocery-4";

import api3 from "../../../utilities/API/home_API";

import { EmblaOptionsType } from "embla-carousel";

import {useCallback, useState } from "react";
import GrocerySideNav from "components/grocery-side-nav";
import StickyWrapper from "components/sticky-wrapper";
import AllProducts from "../../../pages-sections/all-products";
import ShopLayout2 from "../layout";
import Section2 from "pages-sections/home-sections/section-2";
import Section3 from "pages-sections/home-sections/section-3";
import { HomeCaurosel } from "components/carousel";
import { HomeCourosel } from "pages-sections/home-sections/courosel";
// import EmblaCarousel from "../emblaCarousel";

export default async function GroceryTwoPageView() {
  const services = await api.getServices();
  const categories = await api.getCategories();
  // const testimonials = await api.getTestimonials();
  // const dairyProducts = await api.getDairyProducts();
  // const navigationList = await api.getNavigationList();
  // const mainCarouselData = await api.getMainCarousel();
  const featuredProducts = await api.getFeaturedProducts();
  // const bestHomeProducts = await api.getBestHomeProducts();
  // const bestSellProducts = await api.getBestSellProducts();
  // const discountBanners = await api.getDiscountBannerList();
  const categoryNav = await api3.getNavigationList();

  const categoryNavigations = [
    {
      icon: "Carrot",
      title: "Vegetables",
      href: "/products/search/vegetables",
    },
    {
      icon: "Apple",
      title: "Fruits & Vegetables",
      href: "/products/search/Fruits & Vegetables",
      child: [
        {
          title: "Fresh Frutes",
          href: "/products/search/Fresh Frutes",
          child: [
            {
              title: "Pears, apples, quinces",
              href: "/products/search/Pears, apples, quinces",
            },
            {
              title: "Peaches, plums, apricots",
              href: "/products/search/Peaches, plums, apricots",
            },
            { title: "Grapes", href: "/products/search/Grapes" },
          ],
        },
        {
          title: "Fresh Vegetables",
          href: "/products/search/Fresh Vegetables",
          child: [
            { title: "Onion", href: "/products/search/Onion" },
            { title: "Potato", href: "/products/search/Potato" },
            {
              title: "Vegetable Pack",
              href: "/products/search/Vegetable Pack",
            },
          ],
        },
      ],
    },
    {
      icon: "Milk",
      title: "Dariry & Eggs",
      href: "/products/search/Dariry & Eggs",
    },
    {
      icon: "Breakfast",
      title: "Breakfast",
      href: "/products/search/Breakfast",
    },
    { icon: "Yogurt", title: "Frozen", href: "/products/search/Frozen" },
    { icon: "Honey", title: "Organic", href: "/products/search/Organic" },
    {
      icon: "Beer",
      title: "Canned Food",
      href: "/products/search/Canned Food",
    },
    {
      icon: "Snack",
      title: "Coffee & Snacks",
      href: "/products/search/Coffee & Snacks",
    },
    {
      icon: "Bottle",
      title: "Sauces & Jems",
      href: "/products/search/Sauces & Jems",
    },
    { icon: "Honey", title: "Organic", href: "/products/search/Organic" },
    {
      icon: "Beer",
      title: "Canned Food",
      href: "/products/search/Canned Food",
    },
    {
      icon: "Snack",
      title: "Coffee & Snacks",
      href: "/products/search/Coffee & Snacks",
    },
    {
      icon: "Bottle",
      title: "Sauces & Jems",
      href: "/products/search/Sauces & Jems",
    },
  ];


 

  const mainCarouselData = [
    {
      id: 1,
      title: "Get Your Grocery Within 40 Minutes",
      imgUrl: "/assets/images/products/garlic.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed pellentesque nibh tortor.`,
      playStoreLink: "/",
      appStoreLink: "/",
    },
    {
      id: 2,
      title: "Get Your Grocery Within 40 Minutes",
      imgUrl: "/assets/images/products/garlic.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed pellentesque nibh tortor.`,
      playStoreLink: "/",
      appStoreLink: "/",
    },
  ];

  // SIDE NAVBAR COMPONENT
  const SideNav = <GrocerySideNav navigation={categoryNav} />;
  // const SideNav = <GrocerySideNav navigation={categoryNavigations} />;


  //products getting
  const [stories, products] = await Promise.all([
    api2.getStories(),
    api2.getAllProducts(),
  ]);
  //emvbler
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const OPTIONS: EmblaOptionsType = {};


  return (
    <ShopLayout2>
    <div className="mt-1">
      <StickyWrapper SideNav={SideNav}>
        {/* TOP HERO AREA */}
        {/* <Section1 carouselData={mainCarouselData} /> */}

        <HomeCourosel/>

        {/* SERVICE LIST AREA */}
        <Section2 services={services} />

        {/* SHOP BY CATEGORY LIST AREA */}
        <Section3 categories={categories} />

        {/* ALL PRODUCTS */}
        <AllProducts products={products} />

        {/* FEATURED ITEMS AREA */}
        {/* <ProductCarousel title="Featured Items" products={featuredProducts} /> */}
        {/* <EmblaCarousel slides={SLIDES} options={OPTIONS}/> */}

        {/* BEST SELLER IN YOUR AREA */}
        {/* <ProductCarousel title="Best Seller in Your Area" products={bestSellProducts} /> */}

        {/* DISCOUNT BANNER AREA */}
        {/* <Section4 cardList={discountBanners} /> */}

        {/* BEST OF HOME ESSENTIALS PRODUCTS AREA  */}
        {/* <ProductCarousel title="Best of Home Essentials" products={bestHomeProducts} /> */}

        {/* SNACKS-DRINKS-DAIRY PRODUCTS AREA */}
        {/* <ProductCarousel title="Snacks, Drinks, Dairy & More" products={dairyProducts} /> */}

        {/* CLIENT TESTIMONIALS AREA */}
        {/* <Section5 testimonials={testimonials} /> */}

       
      </StickyWrapper>

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      {/* <Setting /> */}

      {/* POPUP NEWSLETTER FORM */}
      {/* <Newsletter image="/assets/images/newsletter/bg-2.png" /> */}

      {/* SMALL DEVICE BOTTOM NAVIGATION */}
      <MobileNavigationBar2>
      <Scrollbar>{SideNav}</Scrollbar>
      </MobileNavigationBar2>
    </div>
    </ShopLayout2>
  );
}
