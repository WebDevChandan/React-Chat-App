import { PrismaClient } from '@prisma/client'
import Description from "./components/Description";
import Image from "./components/Image";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";
import { error } from 'console';

const prisma = new PrismaClient();

interface Restaurant {
    id: number;
    name: string;
    slug: string;
    images: string[];
    description: string;
}

const fetchRestaurantsBySlug = async (slug: string): Promise<Restaurant> => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            id: true,
            name: true,
            images: true,
            description: true,
            slug: true,
        }
    })

    if (!restaurant)
        throw new Error();

    return restaurant;
}


export default async function RestaurantDetails({ params }: { params: { slug: string } }) {

    const restaurant = await fetchRestaurantsBySlug(params.slug);
    
    return (
        <>
            <div className="bg-white w-[70%] rounded p-3 shadow">
                <RestaurantNavBar slug={restaurant.slug} />
                <Title name={restaurant.name} />
                <Rating />
                <Description description={restaurant.description} />
                <Image images={restaurant.images} />
                <Reviews />
            </div>
            <div className="w-[27%] relative text-reg">
                <ReservationCard />
            </div>
        </>
    )
}