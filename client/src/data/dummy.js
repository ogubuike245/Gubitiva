// const image1 = "https://source.unsplash.com/random/900×700/?technology";
// const image2 = "https://source.unsplash.com/random/900×700/?travel";
// const image3 = "https://source.unsplash.com/random/900×700/?food";
// const image4 = "https://source.unsplash.com/random/900×700/?business";
import image1 from "../assets/images/hero/hero1.jpg";
import image2 from "../assets/images/hero/hero2.jpg";
import image3 from "../assets/images/hero/hero3.jpg";
import image4 from "../assets/images/hero/hero4.jpg";

export const slots = [
  {
    id: 1,
    cover: image1,
    category: "technology",
    slotNumber: "one",
    title:
      "how IT can help retirees stay connected and engaged in their later years",
    authorName: "Ogubuike Emejuru",
    authorImg: "../images/authors/sarah.jpg",
    time: "15 Apr - 2023",
  },
  {
    id: 2,
    cover: image2,
    category: "sports",
    title:
      "The Evolution of Football: Why the 3-3-3-1 Formation is the Best...",
    authorName: "John Doe",
    authorImg: "../images/authors/john.jpg",
    time: "20 Apr - 2023",
    slotNumber: "two",
  },
  {
    id: 3,
    cover: image3,
    category: "food",
    title: "Tasting the world's spiciest noodles in Sichuan, China",
    authorName: "Emily Lee",
    authorImg: "../images/authors/emily.jpg",
    time: "25 Apr - 2023",
    slotNumber: "three",
  },
  {
    id: 4,
    cover: image4,
    category: "business",
    title:
      "Startup company revolutionizes sustainable packaging with biodegradable materials",
    authorName: "David Kim",
    authorImg: "../images/authors/david.jpg",
    time: "30 Apr - 2023",
    slotNumber: "four",
  },
];
