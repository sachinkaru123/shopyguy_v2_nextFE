import { Metadata } from "next";
import  GroceryTwoPageView from "./home-page/page-view/grocery-2";
import SetCSRFToken from "utilities/API/CSRF";


export const metadata: Metadata = {
  title: "ShopyGuy - Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};

export default function IndexPage() {
  
  return(
  <>
  <SetCSRFToken/>
  <GroceryTwoPageView />;
  </>
  ) 
}


