// Haircut recommendations mapped to face shapes
export const haircutRecommendations = {
  Oval: {
    description: "The oval face shape is considered the most versatile. Your balanced proportions mean you can pull off almost any hairstyle with ease.",
    haircuts: [
      {
        id: 'pompadour',
        name: 'Classic Pompadour',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80',
        description: 'A timeless style with volume on top swept back, featuring shorter sides that highlight your balanced features.',
        whyItWorks: 'Adds dramatic flair while maintaining your natural face symmetry'
      },
      {
        id: 'crew-cut',
        name: 'Modern Crew Cut',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&q=80',
        description: 'Clean and professional with tapered sides and slightly longer top for easy styling.',
        whyItWorks: 'Low maintenance that showcases your naturally proportional face'
      },
      {
        id: 'side-part',
        name: 'Gentleman\'s Side Part',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&q=80',
        description: 'A refined, classic look with a defined part and neatly combed sides.',
        whyItWorks: 'Adds sophistication while complementing your oval shape perfectly'
      },
      {
        id: 'textured-crop',
        name: 'Textured French Crop',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80',
        description: 'Modern European style with textured fringe and faded sides.',
        whyItWorks: 'Trendy and youthful, works beautifully with your versatile face shape'
      }
    ]
  },
  
  Round: {
    description: "Round faces have soft angles with similar width and length. The key is adding height and angles to create the illusion of length.",
    haircuts: [
      {
        id: 'quiff',
        name: 'Voluminous Quiff',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80',
        description: 'Height-focused style with volume at the front, swept up and back from the face.',
        whyItWorks: 'Adds vertical length to balance your face\'s natural width'
      },
      {
        id: 'faux-hawk',
        name: 'Textured Faux Hawk',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&q=80',
        description: 'Edgy central height with closely cropped sides creating angular definition.',
        whyItWorks: 'Creates strong vertical lines that elongate your face'
      },
      {
        id: 'high-fade',
        name: 'High Fade with Spikes',
        image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=500&fit=crop&q=80',
        description: 'Dramatic high fade with textured, spiked top for maximum height.',
        whyItWorks: 'The high fade slims the sides while spikes add elongating height'
      },
      {
        id: 'angular-fringe',
        name: 'Angular Fringe',
        image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=500&fit=crop&q=80',
        description: 'Asymmetrical fringe styled to one side with sharp, angular lines.',
        whyItWorks: 'Diagonal lines break up roundness and add visual length'
      }
    ]
  },
  
  Square: {
    description: "Square faces feature a strong jawline and angular features. Softer styles help balance these pronounced angles.",
    haircuts: [
      {
        id: 'textured-fringe',
        name: 'Soft Textured Fringe',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&q=80',
        description: 'Messy, textured fringe that falls naturally across the forehead.',
        whyItWorks: 'Softens your strong jawline with organic, flowing texture'
      },
      {
        id: 'layered-medium',
        name: 'Layered Medium Length',
        image: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=400&h=500&fit=crop&q=80',
        description: 'Medium-length cut with soft layers that frame the face.',
        whyItWorks: 'Layers add movement that softens angular features'
      },
      {
        id: 'messy-top',
        name: 'Messy Top with Taper',
        image: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=400&h=500&fit=crop&q=80',
        description: 'Deliberately tousled top with a clean, tapered neckline.',
        whyItWorks: 'Controlled chaos on top balances your structured jawline'
      },
      {
        id: 'slick-back',
        name: 'Slicked Back Undercut',
        image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=500&fit=crop&q=80',
        description: 'Sleek, swept-back top with disconnected undercut sides.',
        whyItWorks: 'Embraces your strong features with a powerful, confident look'
      }
    ]
  },
  
  Heart: {
    description: "Heart-shaped faces have a wider forehead tapering to a narrower chin. Styles that add width at the jaw work beautifully.",
    haircuts: [
      {
        id: 'side-swept',
        name: 'Side Swept Style',
        image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=500&fit=crop&q=80',
        description: 'Longer top swept to one side, covering part of the forehead.',
        whyItWorks: 'Minimizes forehead width while framing your face elegantly'
      },
      {
        id: 'medium-layers',
        name: 'Medium with Layers',
        image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=500&fit=crop&q=80',
        description: 'Chin-length layers that add volume around the lower face.',
        whyItWorks: 'Builds width at the jawline to balance your proportions'
      },
      {
        id: 'textured-bangs',
        name: 'Textured Bangs',
        image: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=400&h=500&fit=crop&q=80',
        description: 'Full, textured bangs that reduce the appearance of a wide forehead.',
        whyItWorks: 'Draws attention to your eyes while balancing forehead width'
      },
      {
        id: 'classic-taper',
        name: 'Classic Taper',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&q=80',
        description: 'Traditional tapered cut with slightly longer top and graduated sides.',
        whyItWorks: 'Creates a balanced silhouette that flatters your features'
      }
    ]
  },
  
  Diamond: {
    description: "Diamond faces have narrow forehead and chin with wide cheekbones. Adding width at the forehead and chin creates harmony.",
    haircuts: [
      {
        id: 'volume-top',
        name: 'Voluminous Top',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop&q=80',
        description: 'Full volume on top with side-swept styling to widen the forehead.',
        whyItWorks: 'Adds width where you need it most - at the forehead'
      },
      {
        id: 'deep-side-part',
        name: 'Deep Side Part',
        image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=500&fit=crop&q=80',
        description: 'Dramatic side part with volume that extends the forehead visually.',
        whyItWorks: 'Creates the illusion of a wider forehead for balance'
      },
      {
        id: 'textured-layers',
        name: 'Chin-Length Texture',
        image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=500&fit=crop&q=80',
        description: 'Longer layers with texture that add width around the chin.',
        whyItWorks: 'Balances your cheekbones by filling out the lower face'
      },
      {
        id: 'swept-fringe',
        name: 'Long Swept Fringe',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop&q=80',
        description: 'Longer fringe swept across the forehead with textured ends.',
        whyItWorks: 'Widens your forehead while adding sophisticated style'
      }
    ]
  }
}

// Get recommendations for a specific face shape
export function getRecommendations(faceShape) {
  const normalizedShape = faceShape.charAt(0).toUpperCase() + faceShape.slice(1).toLowerCase()
  return haircutRecommendations[normalizedShape] || haircutRecommendations['Oval']
}

// Face shape descriptions for the results panel
export const faceShapeInfo = {
  Oval: {
    icon: '⬭',
    traits: ['Balanced proportions', 'Slightly longer than wide', 'Gentle curves']
  },
  Round: {
    icon: '●',
    traits: ['Equal width and length', 'Soft angles', 'Full cheeks']
  },
  Square: {
    icon: '■',
    traits: ['Strong jawline', 'Angular features', 'Wide forehead']
  },
  Heart: {
    icon: '♥',
    traits: ['Wider forehead', 'High cheekbones', 'Pointed chin']
  },
  Diamond: {
    icon: '◆',
    traits: ['Narrow forehead', 'Wide cheekbones', 'Pointed chin']
  }
}

