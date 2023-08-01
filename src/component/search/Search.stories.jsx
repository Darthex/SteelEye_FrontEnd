import React from "react";
import Search from "./Search";

//Added a story to change the size of the search bar component.
//First time using storybook. Tried my best!
export default {
    title: "Search",
    component: Search
}

export const small = () => <Search size="small"/>
export const medium = () => <Search size="medium"/>
export const large = () => <Search size="large"/>
