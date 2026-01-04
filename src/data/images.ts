// Using import.meta.glob to eager load all assets avoids top-level imports
// and allows easier management of local images.
const allImages = import.meta.glob<{ default: ImageMetadata }>('../assets/**/*.{jpeg,jpg,png,gif}', { eager: true });

function getAsset(path: string) {
  // Vite keys are relative to the file or root. When using relative path in glob, keys are relative.
  const key = `../assets/${path}`;
  const mod = allImages[key];
  if (!mod) {
    console.warn(`Image not found: ${path}`);
    return undefined;
  }
  return mod.default;
}

export const images = {
  // Social Sharing
  social: {
    default: "/images/social-share-default.jpg",
    blog: "/images/social-share-blog.jpg",
    announcement: "/images/social-share-announcement.jpg",
    default_fallback: "https://placehold.co/1200x630/6f1d1b/ffe6a7?text=Hebron+Matriculation+Hr.+Sec.+School",
  },

  // Home Page
  home: {
    hero_carousel_1: getAsset('hebron-main-block.png'),
    hero_carousel_2: getAsset( 'hebron-DSC06068.jpg' ),
    hero_carousel_3: getAsset('hebron-boys.jpg'),
    hero_carousel_4: getAsset('hebron-20241115_130054.jpg'),
    hero_carousel_5: getAsset('hebron-DSC01793-1.jpg'),
    hero_carousel_6: getAsset('hebron-block-3.png'),
    hero_carousel_7: undefined,
    hero_carousel_8: undefined,
    hero_carousel_9: undefined,
    hero_carousel_10: undefined,
    school_community_gallery: [
      getAsset('hebron-DSC04139.png'),
      getAsset('hebron-class-room-1.jpg'),
      getAsset('hebron-class-room-2.jpg'),
      getAsset( 'hebron-class-room-3.jpg' ),
      getAsset( 'hebron-class-room-4.jpg' ),
      getAsset( 'hebron-class-room-5.jpg' ),
      getAsset( 'hebron-IV-boys.jpg' ),
      getAsset( 'hebron-IV-2.jpg' ),
    ],
  },

  // About Page
  about: {
    history_founders: getAsset('Hebron-founders.png'),
    history_early_days_gallery: [
      getAsset( 'hebron-1-IMG_2424.jpg' ),
      getAsset( 'hebron-2-IMG_2426.jpg' ),
      getAsset( 'hebron-3-IMG_2425.jpg' ),
      getAsset( 'hebron-4-IMG_2427.jpg' ),
      getAsset( 'hebron-5-IMG_2428.jpg' ),
      getAsset('hebron-6-IMG_2429.jpg'), 
      getAsset( 'hebron-7-IMG_2430.jpg' ),
      getAsset( 'hebron-8-IMG_2431.jpg' ),
      getAsset( 'hebron-9-IMG_2432.jpg' ),
      getAsset('hebron-10-IMG_2433.jpg'),
    ],
    history_growth: getAsset('hebron-first_batch.jpg'),
    history_current_admin: getAsset('hebron-DSC01892.jpg'),
    history_campus: getAsset('hebron-DSC04139.png'),
  },

  // Academics (Rank Holders)
  academics: {
    rank_holder_1: "https://placehold.co/400x400/6f1d1b/ffe6a7?text=Rank+1",
    rank_holder_2: "https://placehold.co/400x400/99582a/ffe6a7?text=Rank+2",
    rank_holder_3: "https://placehold.co/400x400/432818/ffe6a7?text=Rank+3",
    rank_holder_4: "https://placehold.co/400x400/bb9457/432818?text=Rank+4",
    guest_lectures: [
      getAsset('hebron-invited-talk.jpg'),
      getAsset('hebron-invited-talk-1.jpg'),
      getAsset( 'hebron-invited-talk-2.jpg' ),
      getAsset( 'hebron-invited-talk-3.jpg' ),
    ],
  },

  // Co-Curricular
  cocurricular: {
    gallery: [
      getAsset( 'hebron-ncc.jpg' ),
      getAsset( 'hebron-chess.jpg' ),
      getAsset( 'hebron-eco-club.jpg' ),
      getAsset( 'hebron-talent-search-7.jpg' ),
      getAsset( 'hebron-flower-kolam.jpg' ),
      getAsset( 'hebron-eco-club2.jpg' ),
      getAsset( 'hebron-volley.jpg' ),
      getAsset( 'hebron-talent-search.jpg' ),
      getAsset( 'hebron-school-day.jpg' ),
      getAsset( 'hebron-talent-search-2.jpg' ),
      getAsset( 'hebron-talent-search-3.jpg' ),
      getAsset( 'hebron-sports-day.jpg' ),
      getAsset( 'hebron-houses.jpg' ),
      getAsset( 'hebron-talent-search-4.jpg' ),
      getAsset( 'hebron-talent-search-5.jpg' ),
      getAsset( 'hebron-sports-day-2.jpg' ),
      getAsset( 'hebron-talent-search-6.jpg' ),
      getAsset( 'hebron-houses-2.jpg' ),
      getAsset( 'hebron-tree-planting.jpg' ),
      getAsset( 'hebron-sports-day-3.jpg' ),
      getAsset( 'hebron-taltent-search-judge.JPG' ),
      getAsset( 'hebron-schoolday-4.jpg' ),
      getAsset( 'hebron-school-day-5.jpg' ),
      getAsset( 'hebron-schoolD.jpg' ),
    ]
  },

  // Facilities
  facilities: {
    gallery: [
      getAsset( 'hebron-library.jpg' ),
      getAsset( 'hebron-zoology.jpg' ),
      getAsset( 'hebron-computer.jpg' ),
      getAsset( 'hebron-physics.jpg' ),
      getAsset( 'hebron-chemistry.jpg' ),
      getAsset( 'hebron-cse.jpg' ),
      getAsset( 'hebron-chem.jpg' ),

    ]
  },

  // Alumni
  alumni: {
    sivan: "https://placehold.co/400x500/6f1d1b/ffe6a7?text=Dr.+K.+Sivan",
    chandrasekaran: "https://placehold.co/400x500/99582a/ffe6a7?text=Mr.+N.+Chandrasekaran",
    sudha: "https://placehold.co/400x500/432818/ffe6a7?text=Ms.+Sudha+Murty"
  }
};
