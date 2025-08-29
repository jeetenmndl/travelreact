import { Calendar, CheckSquare, MapPin, User } from "lucide-react";

export const features = [
    {
        title: "Easy Booking",
        icon: MapPin,
        color: "text-blue-500",
        titleColor: "text-blue-500",
        description: "Manage flights, hotels, and activities all in one place with our simple system"
    },
    {
        title: "Smart Itineraries",
        icon: Calendar,
        titleColor: "text-green-500",
        color: "text-green-500 ",
        description: "Create and manage detailed itineraries with our intelligent planning tools"
    },
    {
        title: "Packing Lists",
        icon: CheckSquare,
        titleColor: "text-purple-500",
        color: "text-purple-500",
        description: "Never forget essentials with our smart packing list generator and manager"
    },
    {
        title: "24/7 Support",
        icon: User,
        titleColor: "text-orange-500",
        color: "text-orange-500",
        description: "Get help anytime with our dedicated customer support team"
    }
];

export const famousTrips = [
    {
        place: "Paris, France",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/330px-Paris_-_Eiffelturm_und_Marsfeld2.jpg",
        days: 7,
        budget: 1500
    },
     {
        place: "Mustang, Nepal",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Kagdeni%2C_Mustang%2C_Nepal.jpg/1200px-Kagdeni%2C_Mustang%2C_Nepal.jpg",
        days: 5,
        budget: 1200
    },
     {
        place: "Switzerland",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bundeshaus_Bern_2009%2C_Flooffy.jpg/250px-Bundeshaus_Bern_2009%2C_Flooffy.jpg",
        days: 8,
        budget: 2000
    }
]

export  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "TravelEase made planning our honeymoon to Bali absolutely seamless. The itinerary was perfect and the packing list ensured we didn't forget anything important. Highly recommended!",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      text: "The Tokyo trip was incredible! Every detail was planned perfectly, from the temple visits to the modern attractions. The local recommendations were spot on.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "Paris has always been a dream destination, and TravelEase made it a reality. The romantic itinerary and cultural experiences exceeded all expectations.",
    },
    {
      id: 4,
      name: "David Thompson",
      location: "London, UK",
      rating: 5,
      text: "Outstanding service! The detailed planning and 24/7 support made our family trip stress-free. The kids loved every activity on the itinerary.",
    },
  ]