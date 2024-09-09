import p_img1 from './p_img1.jpg'
import p_img2_1 from './p_img2.jpg'
import p_img2_2 from './p_img2_2.jpg'
import p_img2_3 from './p_img2_3.jpg'
import p_img2_4 from './p_img2_4.jpg'
import p_img3 from './p_img3.jpg'
import p_img4 from './p_img4.jpg'
import p_img5 from './p_img5.jpg'
import p_img6 from './p_img6.jpg'
import p_img7 from './p_img7.jpg'
import p_img8 from './p_img8.jpg'
import p_img9 from './p_img9.jpg'
import p_img10 from './p_img10.jpg'
import p_img11 from './p_img11.jpg'
import p_img12 from './p_img12.jpg'
import p_img13 from './p_img13.jpg'
import p_img14 from './p_img14.jpg'
import p_img15 from './p_img15.jpg'
import p_img16 from './p_img16.jpg'
import p_img17 from './p_img17.jpg'
import p_img18 from './p_img18.jpg'
import p_img19 from './p_img19.jpg'
import p_img20 from './p_img20.jpg'



import logo from './logo.jpg'
import hero_img from './hero_img.jpg'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Bird of Paradise",
        description: "Impressive and tropical with large, glossy leaves that naturally split over time.",
        price: 199,
        image: [p_img1],
        category: "Indoor",
        subCategory: "indoorPlant",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Bamboo Palmt",
        description: "With dense foliage and lush fronds, the Bamboo Palm makes a statement. An air-purifying plant adaptable to low light, this palm can reach heights of up to 8 feet tall in the right conditions.",
        price: 299,
        image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category: "Indoor",
        subCategory: "IndoorPlant",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaac",
        name: "Peace Lily",
        description: "The Peace Lily has been an iconic houseplant for decades thanks to its forgiving nature, vibrant glossy leaves, and symbolic white blooms. This plant’s large leaves will give any space a lush jungle feeling. The peace lily has come to symbolize prosperity, purity, peace, and sympathy, making it a perfect heartfelt gift. More likely to bloom in bright indirect light, this plant tolerates any level of indirect light, including low light.",
        price: 69,
        image: [p_img3],
        category: "Low Maintain Plant",
        subCategory: "LowMaintain",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Red Anthurium",
        description: "With its large, bold heart-shaped flower, the Red Anthurium symbolizes hospitality, luck, and strong relationships, bringing instant happiness and abundance to any home. It can be given as a sentimental gift or added to your own collection for a splash of color. These tropical plants will thrive year-round, in a warm bright spot. Provide extra humidity with a mister to keep the leaves looking their best.",
        price: 49,
        image: [p_img4],
        category: "High Maintain",
        subCategory: "HighMaintain",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaae",
        name: "Bromeliad Pineapple",
        description: "Have you ever wanted to grow your own adorable pineapple indoors? With the Bromeliad Pineapple, you can! This bromeliad sprouts a fun ornamental pineapple from a whorl of long green leaves. Sure to spark a conversation with your next dinner guests, you’ll know your pineapple fruit has reached maturity when it turns fragrant and a brighter shade of yellow. Although this variety is not grown for edible consumption, it’s still a unique gift or addition to any personal collection.",
        price: 79,
        image: [p_img5],
        category: "New Arrival",
        subCategory: "NewArrival",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Hibiscus Tabletop",
        description: "For the ultimate tropical vibe, look no further than the Hibiscus plant. The oversized flowers shine in fluorescent shades, blooming all summer long. Best for sunny outdoor spaces and small enough for a tabletop, you’ll feel like you’re on a vacation each time you step outside. Flower color varies between plants, including pink, orange, and yellow.",
        price: 49,
        image: [p_img6],
        category: "Pet Friendly",
        subCategory: "PetFriendly",
        sizes: ["S", "L", "XL"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Pet-Friendly Trio",
        description: "Create a lush green space without worrying about your curious pets with the Pet-Friendly Trio. This bundle includes the non-toxic adorable Mini Money Tree, colorful Red Prayer Plant, and exotic Bromeliad Summer. This trio was hand-selected for their hands-off care and tolerance of various lighting conditions, so you can spend less time on plant maintenance and more time with your furry family members.",
        price: 115,
        image: [p_img7],
        category: "Pet Friendly",
        subCategory: "PetFriendly",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestseller: true
    },
    {
        _id: "aaaah",
        name: "Money Tree",
        description: "Popular for its use in Feng Shui, the Money Tree is a pet-friendly and air-purifying plant with large star-shaped leaves and a braided trunk to give your home a tropical feel.",
        price: 169,
        image: [p_img8],
        category: "Indoor",
        subCategory: "IndoorPlant",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Fiddle Leaf Fig",
        description: "Tall, sculptural, and dramatic. This plant will flourish in the right conditions",
        price: 229,
        image: [p_img9],
        category: "Air Cleaner",
        subCategory: "AirCleaner",
        sizes: ["M", "L", "XL"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Aglaonema Siam",
        description: " A hardy and gorgeous plant, the Aglaonema Siam features light pink stems and glossy leaves mottled with reds, pinks, and greens. These stunning colors vary depending on the amount of sunlight it gets. Adaptable to a wide range of lighting conditions, it can thrive in nearly any spot within a home.",
        price: 110,
        image: [p_img10],
        category: "Low Maintain",
        subCategory: "LowMaintain",
        sizes: ["S", "L", "XL"],
        date: 1716622235448,
        bestseller: true
    },
    {
        _id: "aaaak",
        name: "Monstera Deliciosa",
        description: "The Monstera deliciosa, also known as the Swiss Cheese Plant, is a striking tropical plant originating from the rainforests of southern Mexico. Lively and wild with large, tropical leaves make it a popular choice for indoor gardens.",
        price: 99,
        image: [p_img11],
        category: "Low Maintain",
        subCategory: "LowMaintain",
        sizes: ["S", "M", "L"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Whale Fin Sansevieria",
        description: "Making a huge statement with just one leaf, the Whale Fin Sansevieria is quite the standout among houseplants. These Sansevierias do well with infrequent waterings and can tolerate low to indirect bright light. Dust regularly to deter pests and keep the unique dappled pattern looking its best.",
        price: 79,
        image: [p_img12],
        category: "Air Cleaner",
        subCategory: "AirCleaner",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Olive Tree",
        description: "With shimmering sage-green leaves, the olive tree is ready to add delicate color and texture to your home decor. Hailing from the Mediterranean, this graceful plant will need plenty of bright, direct sunlight to thrive (think sunny, south-facing windows).",
        price: 79,
        image: [p_img13],
        category: "High Maintain",
        subCategory: "HighMaintain",
        sizes: ["S", "M", "L", "XL"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Fiery Philo Trio",
        description: "This vibrant and elegant trio of philodendrons is ready to grace your shelf or windowsill with their stunning foliage. The Fiery Philo Trio includes the bright and bold Moonlight, the deep and dramatic Rojo Congo, and the fiery Sun Red, each offering unique and captivating leaf colors. This group of easy-care plants makes for a thoughtful gift or a striking addition to your own collection!",
        price: 25,
        image: [p_img14],
        category: "Low Maintain",
        subCategory: "LowMaintain",
        sizes: ["S", "M", "L", "XL"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Burgundy Rubber Tree",
        description: "Robust and dramatic, the Burgundy Rubber Tree sports large, glossy leaves on durable, upright stems. This striking plant is ready to make a statement in your home with its dark, moody color palette ranging from deep forest green to rich burgundy red. This low-maintenance plant will be happiest in a spot with bright indirect light.",
        price: 99,
        image: [p_img15],
        category: "Indoor",
        subCategory: "IndoorPlant",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "Bromeliad Guzmania",
        description: "The Bromeliad Guzmania provides an eye-catching and vibrant splash of color in your home. Easy to care for, this plant requires unique watering. Keep the center of the plant, known as the “vase,” halfway filled with water and water the soil infrequently. Keep in indirect light and boost humidity around your plant by using a mister and your plant will thank you by producing pups in the future.",
        price: 46,
        image: [p_img16],
        category: "Pet Friendly",
        subCategory: "PetFriendly",
        sizes: ["S", "M", "L", "XL"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Neon Prayer Plant",
        description: "Vibrant and bright with patterned, neon green leaves.",
        price: 69,
        image: [p_img17],
        category: "Pet Friendly",
        subCategory: "PetFriendly",
        sizes: ["S", "M", "L", "XL"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Parlor Palm",
        description: "Easy and graceful, with lush dark green fronds",
        price: 79,
        image: [p_img18],
        category: "Pet Friendly",
        subCategory: "PetFriendly",
        sizes: ["S", "M", "L", "XL"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Sansevieria Zeylanica",
        description: "If you’re new to the indoor plant game or are simply looking for an easy-care houseplant, the Sansevieria is the plant for you. This hardy plant is renowned for its adaptability and its classic sword-like leaves. While it does best in bright indirect sunlight, it can truly withstand all light levels from full sun to low light. The Sansevieria is also drought tolerant, making it able to take a little neglect. Keep its sturdy leaves dust-free by wiping them regularly.",
        price: 49,
        image: [p_img19],
        category: "High Maintain",
        subCategory: "HighMaintain",
        sizes: ["S", "M", "L", "XL"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Variegated Schefflera",
        description: "A playful houseplant with umbrella-shaped leaf formations, the Variegated Schefflera is a must-have houseplant in your collection. Spotted with creamy yellows and deep greens, its compact shape, bold patterns, and easy-going nature means it’s a perfect beginner-friendly gift for a new plant parent. This plant enjoys low to bright indirect light and infrequent waterings. You can keep its leaves clean by dusting often",
        price: 190,
        image: [p_img20],
        category: "Low Maintain",
        subCategory: "LowMaintain",
        sizes: ["S", "M", "L", "XL"],
        date: 1716633245448,
        bestseller: false
    }
]