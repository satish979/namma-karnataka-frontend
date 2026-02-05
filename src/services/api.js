// Hardcoded frontend-only API shim. Returns Promises with { data }

import HampiImg from "../images/hampi.jpg";
import mysorePalcae from "../images/mysorePalcae.jpg";
import coorg from "../images/coorg.jpg";
import UdupiDelightsImg from "../images/UdupiDelights.jpg";
import nandiHillsImg from "../images/nandihills_videoframe.mp4";

const categories = [
  {
    id: 1,
    name: "Nature",
    description: "Parks, waterfalls, and scenic views",
    icon: "🏞️",
  },
  {
    id: 2,
    name: "Food",
    description: "Local cuisine and street food",
    icon: "🍛",
  },
  {
    id: 3,
    name: "Heritage",
    description: "Temples, forts, and cultural sites",
    icon: "🏛️",
  },
  {
    id: 4,
    name: "Adventure",
    description: "Trekking, rivers and outdoor activities",
    icon: "🧗",
  },
];

const posts = [
  {
    id: 101,
    title: "Mysore Palace: A Royal Evening",
    description: "Experience the illuminated grandeur of Mysore Palace.",
    imageUrl: mysorePalcae,
    isFeatured: true,
    isReel: false,
    category: categories[2],
    location: "Mysore",
    createdAt: "2025-11-05T10:00:00.000Z",
  },
  {
    id: 102,
    title: "Coorg Coffee Trails",
    description: "A journey through misty coffee estates and local flavors.",
    imageUrl: coorg,
    isFeatured: true,
    isReel: true,
    category: categories[0],
    location: "Coorg",
    createdAt: "2025-10-12T08:30:00.000Z",
  },
  {
    id: 103,
    title: "Hampi: Ruins & Stories",
    description: "Explore the majestic ruins that tell tales of a bygone era.",
    imageUrl: HampiImg,
    isFeatured: true,
    isReel: false,
    category: categories[2],
    location: "Hampi",
    createdAt: "2025-09-22T12:00:00.000Z",
  },
  {
    id: 104,
    title: "Udupi Delights",
    description: "Classic coastal cuisine and temple town charm.",
    imageUrl: UdupiDelightsImg,
    isFeatured: false,
    isReel: false,
    category: categories[1],
    location: "Udupi",
    createdAt: "2025-08-03T09:15:00.000Z",
  },
  {
    id: 105,
    title: "Nandi Hills Sunrise",
    description: "Catch a breathtaking sunrise above the clouds.",
    videoUrl: nandiHillsImg,
    isFeatured: true,
    isReel: true,
    category: categories[3],
    location: "Nandi Hills",
    createdAt: "2025-12-01T05:00:00.000Z",
  },
];

// Utility: mimic axios-like responses with { data }
const wrap = (payload) => Promise.resolve({ data: payload });

export const getAllPosts = async () => wrap(posts);

export const getPostById = async (id) => {
  const p = posts.find((x) => String(x.id) === String(id));
  return wrap(p || null);
};

export const getFeaturedPosts = async () =>
  wrap(posts.filter((p) => p.isFeatured));

export const getReels = async () => {
  return posts.filter((p) => p.isReel);
};
export const getPostsByCategory = async (categoryId) =>
  wrap(posts.filter((p) => String(p.category.id) === String(categoryId)));

export const getPostsByCategoryName = async (categoryName) =>
  wrap(posts.filter((p) => p.category.name === categoryName));

// Categories
export const getAllCategories = async () => wrap(categories);

export const getCategoryById = async (id) =>
  wrap(categories.find((c) => String(c.id) === String(id)) || null);

export const getCategoryByName = async (name) =>
  wrap(categories.find((c) => c.name === name) || null);

// Contact submission - returns success message
export const submitContact = async (contactData) => {
  // In a real app we might persist; for now we just acknowledge receipt
  return wrap({
    message: "Contact submitted (frontend-only)",
    received: contactData,
  });
};

export default null;
