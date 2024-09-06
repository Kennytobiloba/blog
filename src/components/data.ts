import blog from "../assests/blog.jpg"
import blogone from "../assests/blogone.jpg";
import blogtwo from "../assests/blogtwo.jpg";
import blogthree from "../assests/blogfive.jpg";
import blogfour from "../assests/blogsix.jpg";
import blogfive from "../assests/blogseven.jpg";
import Relatedone from "../assests/relatedone.jpg";
import Relatedtwo from "../assests/relatedtwo.jpg";
import Relatedthree from "../assests/relatedthree.jpg";
import { StaticImageData } from "next/image";

// Define the type for each feature post
export interface FeaturePostType {
  img: StaticImageData; // Set the type to StaticImageData for images
  topic: string;
  des: string;
  id:any
}

export const Relatedpost: FeaturePostType[] = [
  {
    id:7,
    img:Relatedone,
    topic: "Why Minimal Makeup is the New Trend",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:8,
    img:Relatedtwo,
    topic: "How to Choose the Perfect Dress for Going Out",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
]

export const latest: FeaturePostType[] = [
  {
    id:1,
    img: blogtwo,
    topic: "Your Guide to Look Stunning in Winter Clothes",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:2,
    img: blog,
    topic: "Best Looking Sunglasses of 2023 based on your type",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:3,
    img: blogone,
    topic: "Fall Clothes to look for when shopping",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:4,
    img: blogthree,
    topic: "2023 Fashion trends summary guide",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:5,
    img: blogfour,
    topic: "How to choose the right bag for your outfit",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:6,
    img: blogfive,
    topic: "Guide to matching outfit colors and style",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },

]


export const AllBlog: FeaturePostType[] = [
  {
    id:1,
    img: blogtwo,
    topic: "Your Guide to Look Stunning in Winter Clothes",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:2,
    img: blog,
    topic: "Best Looking Sunglasses of 2023 based on your type",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:3,
    img: blogone,
    topic: "Fall Clothes to look for when shopping",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:4,
    img: blogthree,
    topic: "2023 Fashion trends summary guide",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:5,
    img: blogfour,
    topic: "How to choose the right bag for your outfit",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:6,
    img: blogfive,
    topic: "Guide to matching outfit colors and style",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:7,
    img:Relatedone,
    topic: "Guide to matching outfit colors and style",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:7,
    img:Relatedone,
    topic: "Why Minimal Makeup is the New Trend",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:8,
    img:Relatedtwo,
    topic: "How to Choose the Perfect Dress for Going Out",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:9,
    img:Relatedthree,
    topic: "Your Full Makeup Guide for Beginners",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },

]

export const Featurepost: FeaturePostType[] = [
  {
    id:1,
    img: blogtwo,
    topic: "Your Guide to Look Stunning in Winter Clothes",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:2,
    img: blog,
    topic: "Your Guide to Look Stunning in Winter Clothes",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
  {
    id:3,
    img: blogone,
    topic: "Your Guide to Look Stunning in Winter Clothes",
    des: "Lorem ipsum dolor sit amet, consectetur ut labore et  Ut enim ad minim veniam ...",
  },
];
